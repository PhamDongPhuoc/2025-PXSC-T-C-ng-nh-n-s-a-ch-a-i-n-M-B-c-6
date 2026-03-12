

import React, { useState } from 'react';
import type { UserData, QuizPart } from '../types';

interface LandingPageProps {
  onStartQuiz: (userData: UserData, part: QuizPart) => void;
}

const StatCard: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl flex items-center space-x-4 border border-white/20">
        <div className="text-blue-300">{icon}</div>
        <div>
            <p className="text-sm text-slate-300">{label}</p>
            <p className="text-xl font-bold text-white">{value}</p>
        </div>
    </div>
);

const PartButton: React.FC<{
  part: QuizPart;
  label: string;
  description: string;
  disabled: boolean;
  bgColor?: string;
  hoverBgColor?: string;
  descriptionColor?: string;
}> = ({
  part,
  label,
  description,
  disabled,
  bgColor = 'bg-green-600',
  hoverBgColor = 'hover:bg-green-500',
  descriptionColor = 'text-green-200'
}) => (
  <button
    type="submit"
    value={part}
    disabled={disabled}
    className={`w-full ${bgColor} ${hoverBgColor} text-white font-semibold py-3 px-4 rounded-lg transition-transform transform hover:scale-105 text-left flex flex-col justify-center items-center text-center h-24 disabled:bg-slate-500 disabled:cursor-not-allowed disabled:transform-none`}
  >
    <span className="block font-bold text-lg">{label}</span>
    <span className={`block text-sm ${descriptionColor}`}>{description}</span>
  </button>
);


const LandingPage: React.FC<LandingPageProps> = ({ onStartQuiz }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [participantCount] = useState(() => Math.floor(Math.random() * (100 - 88 + 1)) + 88);


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const submitter = (event.nativeEvent as SubmitEvent).submitter as HTMLButtonElement;
    if (!submitter || isSubmitting) return;
    
    const part = submitter.value as QuizPart;

    if (name.trim() && email.trim() && email.includes('@')) {
      setError('');
      setIsSubmitting(true);

      const webhookUrl = 'https://us-central1-zenleads-ai.cloudfunctions.net/publicWebhook/ShDD335t46mZmcPxkRdV';
      const data = {
        ho_ten: name,
        email: email,
        quiz_part: part,
      };

      try {
        const response = await fetch(webhookUrl, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
            throw new Error('Lỗi máy chủ: ' + response.status);
        }

        const responseData = await response.json();

        if (responseData.redirectTo) {
          window.location.href = responseData.redirectTo;
        } else {
          onStartQuiz({ name, email }, part);
        }
      } catch (error) {
        console.error('Lỗi khi gửi form:', error);
        setError('Đã có lỗi xảy ra. Vui lòng thử lại sau.');
      } finally {
        setIsSubmitting(false);
      }
    } else {
      setError('Vui lòng nhập đầy đủ và chính xác thông tin.');
    }
  };


  return (
    <div 
      className="relative min-h-screen" 
      style={{ 
        backgroundImage: `url('/background.png')`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center' 
      }}
    >
      <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"></div>
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-white">
        <div className="absolute top-4 left-4 sm:top-8 sm:left-8 flex flex-col items-center text-center">
            <img src="https://picsum.photos/seed/logo/200/200" alt="Sáu rảnh Logo" className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover shadow-lg" referrerPolicy="no-referrer" />
            <div className="mt-2">
                <p className="font-bold text-white text-lg">Sáu rảnh</p>
                <p className="text-sm text-slate-300">0908528885</p>
            </div>
        </div>

        <div className="absolute top-4 right-4 sm:top-8 sm:right-8 flex flex-col items-center text-center">
            <a 
              href="https://zalo.me/0908528885"
              target="_blank"
              rel="noopener noreferrer"
              className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center text-center p-2 shadow-lg transition-transform transform hover:scale-105"
              aria-label="Nhận thiết kế Landingpage"
            >
                <span className="text-xs sm:text-sm font-semibold leading-tight">Nhận thiết kế Landingpage</span>
            </a>
        </div>
        
        <div className="w-full max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-red-400 leading-relaxed">Ôn tập 300 câu trắc nghiệm SHN bậc 6/7 Máy Động 03/2026</h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Củng cố kiến thức và tự tin vượt qua kỳ thi với bộ 300 câu hỏi trắc nghiệm SHN bậc 6/7 Máy Động 03/2026.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12">
              <StatCard icon={<UsersIcon />} label="Người tham gia" value={participantCount.toString()} />
              <StatCard icon={<ClipboardIcon />} label="Tổng số câu hỏi" value="300" />
              <StatCard icon={<BookOpenIcon />} label="Chủ đề" value="SHN bậc 6/7 Máy Động 03/2026" />
          </div>

          <div className="flex justify-center">
            {/* Part 2: Start Quiz */}
            <form id="contact-form-landing-page" onSubmit={handleSubmit} className="w-full max-w-xl bg-slate-800/50 p-8 rounded-2xl border border-slate-700 backdrop-blur-md">
              <h2 className="text-2xl font-semibold mb-4 text-green-300">Bắt đầu ôn tập</h2>
              <p className="text-slate-300 mb-6">
                Nhập thông tin, sau đó chọn một phần để bắt đầu.
              </p>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Họ và tên"
                    name="ho_ten"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-slate-700 border border-slate-600 text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-400"
                    required
                  />
                </div>
              </div>
               {error && <p className="text-red-400 text-sm mt-4">{error}</p>}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">
                  <PartButton part="1" label="Phần 1" description="Câu 1-60" disabled={isSubmitting} />
                  <PartButton part="2" label="Phần 2" description="Câu 61-120" disabled={isSubmitting} />
                  <PartButton part="3" label="Phần 3" description="Câu 121-180" disabled={isSubmitting} />
                  <PartButton part="4" label="Phần 4" description="Câu 181-240" disabled={isSubmitting} />
                  <PartButton part="5" label="Phần 5" description="Câu 241-300" disabled={isSubmitting} />
                  <PartButton 
                    part="6" 
                    label="Thi thử" 
                    description="40 câu ngẫu nhiên" 
                    disabled={isSubmitting}
                    bgColor="bg-orange-700"
                    hoverBgColor="hover:bg-orange-600"
                    descriptionColor="text-orange-300"
                  />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};


const UsersIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m-7.5-2.962c.56-1.634 1.325-3.166 2.197-4.502.872-1.337 1.33-2.783 1.33-4.285 0-1.282.68-2.518 1.732-3.182C13.524 4.042 12.793 4 12 4s-1.524.042-2.232.106c1.052.664 1.732 1.9 1.732 3.182 0 1.502.458 2.948 1.33 4.285.872 1.336 1.636 2.868 2.197 4.502M12 10.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-6 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm6 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    </svg>
);

const ClipboardIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.125 2.25h-4.5c-1.125 0-2.062.938-2.062 2.063v15.375c0 1.125.938 2.063 2.063 2.063h12.75c1.125 0 2.063-.938 2.063-2.063V4.313c0-1.125-.938-2.063-2.063-2.063h-4.5m-6 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Zm6 0a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5Z" />
    </svg>
);

const BookOpenIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25" />
    </svg>
);


export default LandingPage;