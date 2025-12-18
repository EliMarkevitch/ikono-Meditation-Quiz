import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStart }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="flex flex-col items-center text-center space-y-8 max-w-lg mx-auto"
    >
      <img 
        src="https://raw.githubusercontent.com/EliMarkevitch/images/main/ikono_logo.png" 
        alt="IKONO" 
        className="h-6 md:h-8 mb-2 object-contain" 
      />
      
      <h1 className="text-4xl md:text-5xl font-bold leading-tight">
        Are You Ready to <span className="text-ikonoPink">Meditate</span> Without Actually Meditating?
      </h1>
      
      <p className="text-lg text-gray-300 font-light max-w-md">
        Discover why traditional methods might not be working for you and find your path to effortless calm in less than 60 seconds.
      </p>

      <button
        onClick={onStart}
        className="group relative px-8 py-4 bg-white text-ikonoBlue font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,35,165,0.4)]"
      >
        <span className="relative z-10 flex items-center gap-2">
          Find your calm <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </span>
      </button>
      
      <p className="text-xs text-gray-500 uppercase tracking-widest mt-8">
        Powered by IKONO
      </p>
    </motion.div>
  );
};

export default StartScreen;