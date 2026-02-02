import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

const ChatInput = ({ onSend, isTyping }) => {
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (input.trim() !== '') {
      onSend(input);
      setInput('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="w-full px-4 py-2 bg-transparent"> {/* Background handled by parent in Chat.jsx */}
      <div className="relative flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={isTyping}
          className="flex-1 px-4 py-3 pr-14 bg-secondary text-text-gray placeholder-gray-500 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent transition-colors duration-200 h-[50px] sm:h-[45px]" // Adjusted height
          placeholder="Ask me anything about Jamal Mohamed College..."
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleSend}
          disabled={input.trim() === '' || isTyping}
          className="absolute right-1 w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <Send className="w-6 h-6" />
        </motion.button>
      </div>
    </div>
  );
};

export default ChatInput;