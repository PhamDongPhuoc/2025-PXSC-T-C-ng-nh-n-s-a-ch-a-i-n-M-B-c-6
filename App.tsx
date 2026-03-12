import React, { useState, useCallback } from 'react';
import LandingPage from './components/LandingPage';
import QuizPage from './components/QuizPage';
import ResultsPage from './components/ResultsPage';
import { GameState, UserData, Answer, Question, QuizPart } from './types';
import { parseQuizData } from './data/quizData';

const allQuestions = parseQuizData();

const App: React.FC = () => {
  const [gameState, setGameState] = useState<GameState>(GameState.Landing);
  const [userData, setUserData] = useState<UserData | null>(null);
  const [currentQuestions, setCurrentQuestions] = useState<Question[]>([]);
  const [answers, setAnswers] = useState<Answer[]>([]);
  const [score, setScore] = useState<number>(0);
  const [quizDuration, setQuizDuration] = useState<number>(30 * 60);

  const startQuiz = useCallback((data: UserData, part: QuizPart) => {
    let selectedQuestions: Question[] = [];
    let duration = 30 * 60;

    switch (part) {
      case '1':
        selectedQuestions = allQuestions.slice(0, 60);
        break;
      case '2':
        selectedQuestions = allQuestions.slice(60, 120);
        break;
      case '3':
        selectedQuestions = allQuestions.slice(120, 180);
        break;
      case '4':
        selectedQuestions = allQuestions.slice(180, 240);
        break;
      case '5':
        selectedQuestions = allQuestions.slice(240, 300);
        break;
      case '6': {
        const pool1 = allQuestions.slice(0, 250);
        const pool2 = allQuestions.slice(250, 300);
        
        const random36 = [...pool1].sort(() => 0.5 - Math.random()).slice(0, 36);
        const random4 = [...pool2].sort(() => 0.5 - Math.random()).slice(0, 4);
        
        // 36 first questions from pool1, 4 last questions from pool2
        selectedQuestions = [...random36, ...random4];
        duration = 40 * 60; // 40 minutes for 40 questions
        break;
      }
      default:
        selectedQuestions = allQuestions.slice(0, 60);
    }
    
    setUserData(data);
    setCurrentQuestions(selectedQuestions);
    setQuizDuration(duration);
    setAnswers(Array(selectedQuestions.length).fill({ selectedOption: null }));
    setScore(0);
    setGameState(GameState.Quiz);
  }, []);

  const finishQuiz = useCallback((finalAnswers: Answer[]) => {
    let correctAnswers = 0;
    finalAnswers.forEach((answer, index) => {
      if (answer.selectedOption === currentQuestions[index].correctAnswerIndex) {
        correctAnswers++;
      }
    });
    setAnswers(finalAnswers);
    setScore(correctAnswers);
    setGameState(GameState.Results);
  }, [currentQuestions]);

  const restartQuiz = useCallback(() => {
    setGameState(GameState.Landing);
    setUserData(null);
    setCurrentQuestions([]);
    setAnswers([]);
    setScore(0);
  }, []);

  const renderPage = () => {
    switch (gameState) {
      case GameState.Quiz:
        return <QuizPage questions={currentQuestions} onFinishQuiz={finishQuiz} duration={quizDuration} />;
      case GameState.Results:
        return <ResultsPage questions={currentQuestions} answers={answers} score={score} onRestart={restartQuiz} userData={userData} />;
      case GameState.Landing:
      default:
        return <LandingPage onStartQuiz={startQuiz} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 dark:bg-slate-900 dark:text-slate-200 transition-colors duration-300">
      {renderPage()}
    </div>
  );
};

export default App;