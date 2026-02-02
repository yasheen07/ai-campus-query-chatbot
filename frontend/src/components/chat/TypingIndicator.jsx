import React from 'react';
import { motion } from 'framer-motion';
import { Bot } from 'lucide-react';

const TypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 mb-4"
    >
      <div className="flex-shrink-0 w-8 h-8 bg-jmc-primary flex items-center justify-center rounded-full text-white">
        <Bot size={18} />
      </div>
      <div className="px-4 py-3 bg-chat-bot-bg text-chat-bot-text rounded-xl rounded-bl-none">
        <p className="text-sm md:text-base italic">JMC Assistant is typing...</p>
      </div>
    </motion.div>
  );
};

export default TypingIndicator;