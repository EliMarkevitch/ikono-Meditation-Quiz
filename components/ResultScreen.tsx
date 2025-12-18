import React from 'react';
import { motion } from 'framer-motion';
import { QuizResult } from '../types';

interface ResultScreenProps {
  result: QuizResult;
  score: number;
}

const ResultScreen: React.FC<ResultScreenProps> = ({ result }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto w-full py-8"
    >
      <div className="bg-white/5 border border-white/10 rounded-3xl md:rounded-[32px] backdrop-blur-md shadow-2xl relative overflow-hidden flex flex-col">
        {/* Decorative background gradients */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-ikonoPink/20 blur-[80px] -translate-y-1/2 translate-x-1/2 rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-600/20 blur-[80px] translate-y-1/2 -translate-x-1/2 rounded-full pointer-events-none" />

        <div className="relative z-10 flex flex-col h-full">
          {/* Main Text Content */}
          <div className="p-6 md:p-12 pb-8">
            <div className="mb-2 text-ikonoPink font-bold tracking-widest text-sm uppercase">Your Result</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              {result.title}
            </h2>
            
            <div className="bg-white/5 rounded-2xl p-6 mb-12 border border-white/10">
              <p className="text-lg text-gray-100 font-medium leading-relaxed">
                {result.description}
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                 <div className="h-px bg-white/20 flex-1"></div>
                 <span className="font-semibold tracking-wider">JOIN THE WAITLIST</span>
                 <div className="h-px bg-white/20 flex-1"></div>
              </div>

              <div className="w-full flex justify-center bg-white rounded-xl overflow-hidden shadow-inner">
                <iframe 
                  src="https://docs.google.com/forms/d/e/1FAIpQLSfgG_BwD4yemBWcypp-5hOxbBh2z-ZNBpa7HEr5KRpJ7Qu5Mg/viewform?embedded=true" 
                  width="100%" 
                  height="800" 
                  frameBorder="0" 
                  marginHeight={0} 
                  marginWidth={0}
                  className="max-w-full"
                >
                  Loading…
                </iframe>
              </div>
            </div>
          </div>
          
          <div className="pb-8 px-6 text-center mt-2 relative z-20">
            <p className="text-white/40 text-xs">Scroll to complete the form</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ResultScreen;