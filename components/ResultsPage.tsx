

import React from 'react';
import type { Question, Answer, UserData } from '../types';

interface ResultsPageProps {
  questions: Question[];
  answers: Answer[];
  score: number;
  onRestart: () => void;
  userData: UserData | null;
}

const ResultsPage: React.FC<ResultsPageProps> = ({ questions, answers, score, onRestart, userData }) => {
  const totalQuestions = questions.length;
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  let resultStatus = '';
  let encouragementMessage = '';
  let statusColorClass = '';

  if (percentage >= 70) {
    resultStatus = 'Đạt kết quả tốt';
    encouragementMessage = 'Bạn làm rất tốt, hãy tiếp tục phát huy!';
    statusColorClass = 'text-green-600 dark:text-green-400';
  } else {
    resultStatus = 'Cần cố gắng thêm';
    encouragementMessage = 'Cố gắng lên, hãy ôn tập kỹ hơn nhé!';
    statusColorClass = 'text-orange-600 dark:text-orange-400';
  }

  const isPass = percentage >= 70;
  
  const handleExportToWord = () => {
    let htmlContent = `
        <html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'>
        <head>
            <meta charset='utf-8'>
            <title>Kết quả bài thi</title>
            <style>
                body { font-family: 'Times New Roman', serif; font-size: 12pt; }
                h1, h2, h3 { text-align: center; }
                .question-block { margin-bottom: 20px; page-break-inside: avoid; }
                .question-text { font-weight: bold; }
                .options-list { list-style-type: none; padding-left: 0; }
                .option-item { margin-bottom: 5px; padding: 5px; border-radius: 4px; }
                .correct-answer { background-color: #d4edda; }
                .user-incorrect-answer { background-color: #f8d7da; }
            </style>
        </head>
        <body>
            <h1>Kết quả bài làm trắc nghiệm SHN bậc 6/7 Máy Động 03/2026</h1>
            <h2>Thí sinh: ${userData?.name || 'N/A'}</h2>
            <h3>Email: ${userData?.email || 'N/A'}</h3>
            <p style="text-align: center; font-weight: bold; font-size: 14pt;">Kết quả: ${score} / ${totalQuestions} (${percentage}%)</p>
            <hr>
    `;

    questions.forEach((q, index) => {
        const userAnswerIndex = answers[index].selectedOption;
        const isCorrect = userAnswerIndex === q.correctAnswerIndex;
        let resultText = '';
        if (userAnswerIndex === null) {
            resultText = '<span style="color: #856404; font-weight: bold;"> (Bỏ qua)</span>';
        } else if (isCorrect) {
            resultText = '<span style="color: #155724; font-weight: bold;"> (Đúng)</span>';
        } else {
            resultText = '<span style="color: #721c24; font-weight: bold;"> (Sai)</span>';
        }

        htmlContent += `
            <div class="question-block">
                <p class="question-text">Câu ${q.id}: ${q.question} ${resultText}</p>
                <ul class="options-list">
        `;

        q.options.forEach((option, optionIndex) => {
            let itemClass = 'option-item';
            let indicators = '';

            if (optionIndex === q.correctAnswerIndex) {
                itemClass += ' correct-answer';
                indicators += ' (Đáp án đúng)';
            }
            if (optionIndex === userAnswerIndex && !isCorrect) {
                itemClass += ' user-incorrect-answer';
                indicators += ' (Bạn chọn)';
            } else if (optionIndex === userAnswerIndex) {
                 indicators += ' (Bạn chọn)';
            }

            htmlContent += `<li class="${itemClass}">${String.fromCharCode(65 + optionIndex)}. ${option} <strong>${indicators}</strong></li>`;
        });

        htmlContent += `
                </ul>
            </div>
        `;
    });

    htmlContent += `
        </body>
        </html>
    `;
    
    const blob = new Blob(['\ufeff', htmlContent], {
        type: 'application/msword'
    });
    
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `ket-qua-${userData?.name.replace(/\s+/g, '-') || 'thi-sinh'}.doc`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen container mx-auto p-4 sm:p-8">
      <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-2 text-slate-800 dark:text-slate-200">Kết quả bài làm</h1>
        <p className="text-center text-xl font-semibold text-blue-600 dark:text-blue-400 mb-2">
          Chúc mừng bạn đã hoàn thành bài ôn tập này!
        </p>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-8">
          Xin chào <span className="font-bold">{userData?.name || 'bạn'}</span>, bạn đã trả lời đúng <span className="text-blue-600 font-bold">{score}/{totalQuestions}</span> câu hỏi.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
          <div className="relative w-48 h-48">
            <svg className="w-full h-full" viewBox="0 0 36 36">
              <path
                className="text-slate-200 dark:text-slate-700"
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
              />
              <path
                className={isPass ? 'text-green-500' : 'text-orange-500'}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeDasharray={`${percentage}, 100`}
                strokeLinecap="round"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl font-bold text-slate-800 dark:text-slate-200">{percentage}%</span>
                <span className="text-sm text-slate-500 dark:text-slate-400">Chính xác</span>
            </div>
          </div>
          <div className="text-center md:text-left">
            <p className={`text-2xl font-bold ${statusColorClass}`}>
              {resultStatus}
            </p>
            <p className="text-5xl font-extrabold text-slate-800 dark:text-slate-200 my-2">
              {score} / {totalQuestions}
            </p>
            <p className="text-slate-600 dark:text-slate-400">{encouragementMessage}</p>
          </div>
        </div>

        <div className="text-center mb-12 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={onRestart}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Làm lại bài thi
          </button>
          <button
            onClick={handleExportToWord}
            className="px-8 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition"
          >
            Xuất file Word
          </button>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6 text-slate-800 dark:text-slate-200">Xem lại câu trả lời</h2>
          <div className="space-y-6">
            {questions.map((q, index) => {
              const userAnswerIndex = answers[index].selectedOption;
              const isCorrect = userAnswerIndex === q.correctAnswerIndex;

              return (
                <div key={q.id} className="p-6 bg-slate-50 dark:bg-slate-900/50 rounded-xl border border-slate-200 dark:border-slate-700">
                  <div className="flex justify-between items-start mb-4">
                    <p className="font-bold text-slate-800 dark:text-slate-200">
                      Câu {q.id}: {q.question}
                    </p>
                    {userAnswerIndex !== null && (
                        isCorrect ? (
                        <span className="flex-shrink-0 ml-4 px-3 py-1 text-xs font-semibold text-green-800 bg-green-200 dark:bg-green-900 dark:text-green-300 rounded-full">Đúng</span>
                        ) : (
                        <span className="flex-shrink-0 ml-4 px-3 py-1 text-xs font-semibold text-red-800 bg-red-200 dark:bg-red-900 dark:text-red-300 rounded-full">Sai</span>
                        )
                    )}
                  </div>
                  <div className="space-y-3">
                    {q.options.map((option, optionIndex) => {
                      const isUserAnswer = userAnswerIndex === optionIndex;
                      const isCorrectAnswer = q.correctAnswerIndex === optionIndex;
                      let optionClass = 'border-slate-200 dark:border-slate-700';

                      if (isCorrectAnswer) {
                        optionClass = 'border-green-500 bg-green-50 dark:bg-green-900/40';
                      }
                      if (isUserAnswer && !isCorrectAnswer) {
                        optionClass = 'border-red-500 bg-red-50 dark:bg-red-900/40';
                      }

                      return (
                        <div key={optionIndex} className={`flex items-start p-3 rounded-lg border-2 ${optionClass}`}>
                          <div className="flex-shrink-0 mt-1 mr-3">
                            {isCorrectAnswer && <CheckCircleIcon />}
                            {isUserAnswer && !isCorrectAnswer && <XCircleIcon />}
                          </div>
                          <span className="text-slate-700 dark:text-slate-300">{option}</span>
                        </div>
                      );
                    })}
                     {userAnswerIndex === null && (
                        <div className="p-3 rounded-lg border-2 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/40">
                            <span className="text-yellow-700 dark:text-yellow-300 font-medium">Bạn đã bỏ qua câu này.</span>
                        </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const CheckCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
    </svg>
);

const XCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-600" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
    </svg>
);

export default ResultsPage;