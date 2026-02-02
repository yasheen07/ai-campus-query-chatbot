import React from 'react';
import { motion } from 'framer-motion';
import { Bot, User } from 'lucide-react';

const Message = ({ message }) => {
  const isUser = message.sender === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-start gap-3 mb-4 ${isUser ? 'justify-end' : ''}`}
    >
      {!isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-primary flex items-center justify-center rounded-full text-secondary">
          <Bot size={18} />
        </div>
      )}
      <div
        className={`p-3 rounded-xl max-w-[80%] break-words ${ // Changed padding
          isUser
            ? 'bg-chat-user-bg text-chat-user-text border border-chat-user-border rounded-br-none' // Added border and used new bg/text
            : 'bg-chat-bot-bg text-chat-bot-text rounded-bl-none' // Used new bg/text
        }`}
      >
        <p className="text-lg">{message.text}</p> {/* Changed font size */}
      </div>
      {isUser && (
        <div className="flex-shrink-0 w-8 h-8 bg-primary flex items-center justify-center rounded-full text-secondary">
          <User size={18} />
        </div>
      )}
    </motion.div>
  );
};

export default Message;