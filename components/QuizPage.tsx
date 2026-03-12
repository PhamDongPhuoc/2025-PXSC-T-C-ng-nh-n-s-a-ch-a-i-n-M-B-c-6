import React, { useState, useEffect, useCallback } from 'react';
import type { Question, Answer } from '../types';

interface QuizPageProps {
  questions: Question[];
  onFinishQuiz: (answers: Answer[]) => void;
  duration: number;
}

const ProgressTracker: React.FC<{
  totalQuestions: number;
  currentQuestion: number;
  answers: Answer[];
  onQuestionSelect: (questionIndex: number) => void;
}> = ({ totalQuestions, currentQuestion, answers, onQuestionSelect }) => {
  return (
    <div className="w-full lg:w-80 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-lg h-full">
      <h3 className="text-xl font-bold mb-4 text-slate-800 dark:text-slate-200">Danh sách câu hỏi</h3>
      <div className="grid grid-cols-5 gap-2 max-h-[calc(100vh-200px)] overflow-y-auto pr-2">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const isAnswered = answers[i]?.selectedOption !== null;
          const isCurrent = i === currentQuestion;
          let buttonClass = 'bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-600';
          if (isAnswered) {
            buttonClass = 'bg-blue-500 text-white hover:bg-blue-600';
          }
          if (isCurrent) {
            buttonClass = 'bg-green-500 text-white ring-2 ring-offset-2 ring-green-500 dark:ring-offset-slate-800';
          }

          return (
            <button
              key={i}
              onClick={() => onQuestionSelect(i)}
              className={`w-12 h-12 flex items-center justify-center rounded-lg font-semibold transition-all duration-200 ${buttonClass}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const QuizPage: React.FC<QuizPageProps> = ({ questions, onFinishQuiz, duration }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>(() => Array(questions.length).fill({ selectedOption: null }));
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    // Reset answers when questions change
    setAnswers(Array(questions.length).fill({ selectedOption: null }));
    setCurrentQuestionIndex(0);
    setTimeLeft(duration);
  }, [questions, duration]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          onFinishQuiz(answers);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onFinishQuiz, answers]);

  const handleOptionSelect = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = { selectedOption: optionIndex };
    setAnswers(newAnswers);
  };

  const goToNextQuestion = useCallback(() => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  }, [currentQuestionIndex, questions.length]);

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleFinish = () => {
    if (window.confirm('Bạn có chắc chắn muốn nộp bài không?')) {
      onFinishQuiz(answers);
    }
  };
  
  // Handle case where questions are not loaded yet
  if (questions.length === 0) {
    return <div>Loading...</div>;
  }


  const currentQuestion = questions[currentQuestionIndex];
  const answeredCount = answers.filter(a => a.selectedOption !== null).length;

  return (
    <div className="min-h-screen flex flex-col lg:flex-row gap-8 p-4 sm:p-8">
      {/* Main Content */}
      <div className="flex-1">
        <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-blue-600 dark:text-blue-400">Câu hỏi {currentQuestionIndex + 1}/{questions.length}</h2>
            <div className="flex items-center space-x-2 bg-slate-100 dark:bg-slate-700 px-3 py-1.5 rounded-full font-semibold">
              <ClockIcon />
              <span>{Math.floor(timeLeft / 60)}:{('0' + (timeLeft % 60)).slice(-2)}</span>
            </div>
          </div>

          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2.5 mb-6">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${(answeredCount / questions.length) * 100}%` }}></div>
          </div>
          
          <p className="text-lg font-semibold mb-6 text-slate-800 dark:text-slate-200 min-h-[60px]">{currentQuestion.question}</p>
          
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <label
                key={index}
                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                  answers[currentQuestionIndex]?.selectedOption === index
                    ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/50'
                    : 'border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600'
                }`}
              >
                <input
                  type="radio"
                  name={`question-${currentQuestion.id}`}
                  checked={answers[currentQuestionIndex]?.selectedOption === index}
                  onChange={() => handleOptionSelect(index)}
                  className="w-5 h-5 text-blue-600 focus:ring-blue-500"
                />
                <span className="ml-4 text-slate-700 dark:text-slate-300">{option}</span>
              </label>
            ))}
          </div>

          <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={goToPreviousQuestion}
              disabled={currentQuestionIndex === 0}
              className="w-full sm:w-auto px-6 py-3 bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition hover:bg-slate-300 dark:hover:bg-slate-600"
            >
              Câu trước
            </button>

            <button
              onClick={handleFinish}
              className="w-full sm:w-auto px-8 py-3 bg-red-500 hover:bg-red-600 text-white font-bold rounded-lg transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:translate-y-0"
            >
              Nộp bài
            </button>

            {currentQuestionIndex === questions.length - 1 ? (
              <button
                onClick={handleFinish}
                className="w-full sm:w-auto px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition"
              >
                Hoàn thành
              </button>
            ) : (
              <button
                onClick={goToNextQuestion}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
              >
                Câu tiếp theo
              </button>
            )}
          </div>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="lg:sticky lg:top-8 lg:self-start">
        <ProgressTracker 
          totalQuestions={questions.length}
          currentQuestion={currentQuestionIndex}
          answers={answers}
          onQuestionSelect={setCurrentQuestionIndex}
        />
      </div>
    </div>
  );
};

const ClockIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);


export default QuizPage;