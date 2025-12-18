import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X } from 'lucide-react';
import { Question } from '../types';

interface QuizScreenProps {
  question: Question;
  currentIndex: number;
  totalQuestions: number;
  onAnswer: (isYes: boolean) => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({ question, currentIndex, totalQuestions, onAnswer }) => {
  const progress = ((currentIndex) / totalQuestions) * 100;

  return (
    <div className="w-full max-w-lg mx-auto">
      {/* Progress Bar */}
      <div className="w-full bg-white/10 h-1.5 rounded-full mb-8 overflow-hidden">
        <motion.div 
          className="h-full bg-ikonoPink"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "circOut" }}
        />
      </div>

      <div className="text-center mb-12 min-h-[160px] flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.h2
            key={question.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="text-2xl md:text-3xl font-medium leading-relaxed"
          >
            {question.text}
          </motion.h2>
        </AnimatePresence>
      </div>

      <div className="grid grid-cols-2 gap-4 md:gap-6">
        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 35, 165, 0.1)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAnswer(false)}
          className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/20 bg-white/5 hover:border-ikonoPink/50 transition-colors group"
        >
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-3 group-hover:border-ikonoPink group-hover:bg-ikonoPink text-white transition-all">
            <X className="w-6 h-6" />
          </div>
          <span className="text-lg font-semibold tracking-wide">NO</span>
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 35, 165, 0.1)" }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onAnswer(true)}
          className="flex flex-col items-center justify-center p-6 rounded-2xl border border-white/20 bg-white/5 hover:border-ikonoPink/50 transition-colors group"
        >
          <div className="w-12 h-12 rounded-full border border-white/30 flex items-center justify-center mb-3 group-hover:border-ikonoPink group-hover:bg-ikonoPink text-white transition-all">
            <Check className="w-6 h-6" />
          </div>
          <span className="text-lg font-semibold tracking-wide">YES</span>
        </motion.button>
      </div>
      
      <div className="text-center mt-8 text-white/30 text-sm">
        Question {currentIndex + 1} of {totalQuestions}
      </div>
    </div>
  );
};

export default QuizScreen;