import React, { useState } from 'react';
import { QUESTIONS, RESULTS } from './constants';
import { QuizStep } from './types';
import StartScreen from './components/StartScreen';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [step, setStep] = useState<QuizStep>(QuizStep.START);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setStep(QuizStep.QUIZ);
    setScore(0);
    setCurrentQuestionIndex(0);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAnswer = (isYes: boolean) => {
    const newScore = isYes ? score + 1 : score;
    setScore(newScore);

    if (currentQuestionIndex < QUESTIONS.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStep(QuizStep.RESULT);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const getResult = () => {
    return RESULTS.find(r => score >= r.minScore && score <= r.maxScore) || RESULTS[RESULTS.length - 1];
  };

  return (
    <div className="min-h-screen bg-ikonoBlue text-white flex flex-col items-center justify-center p-4 md:p-8 overflow-x-hidden relative selection:bg-ikonoPink selection:text-white">
      
      {/* Subtle animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-900/20 rounded-full blur-[120px] opacity-60 animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-ikonoPink/10 rounded-full blur-[120px] opacity-40 animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="w-full max-w-4xl z-10 flex-grow flex flex-col justify-center py-12">
        <AnimatePresence mode="wait">
          {step === QuizStep.START && (
            <motion.div 
              key="start"
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              className="w-full"
            >
              <StartScreen onStart={handleStart} />
            </motion.div>
          )}

          {step === QuizStep.QUIZ && (
            <motion.div
              key="quiz"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full"
            >
              <QuizScreen 
                question={QUESTIONS[currentQuestionIndex]}
                currentIndex={currentQuestionIndex}
                totalQuestions={QUESTIONS.length}
                onAnswer={handleAnswer}
              />
            </motion.div>
          )}

          {step === QuizStep.RESULT && (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="w-full"
            >
              <ResultScreen 
                result={getResult()}
                score={score}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Footer Branding (Subtle) */}
      <footer className="w-full text-center py-4 text-white/10 text-xs font-light tracking-widest z-10 mt-auto">
        IKONO © {new Date().getFullYear()}
      </footer>
    </div>
  );
};

export default App;