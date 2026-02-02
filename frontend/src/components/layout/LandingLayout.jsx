import React from 'react';
import LandingHeader from './LandingHeader';
import ChatInput from '../chat/ChatInput'; // Assuming ChatInput will be directly included

const LandingLayout = ({ children, onSendChatInput }) => {
  return (
    <div className="main-container relative min-h-screen flex flex-col items-center justify-between">
      <LandingHeader />
      
      {/* Main content area (logo, title, suggestions) */}
      <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
        <img src="/src/assets/jmc-logo.svg" alt="JMC Logo" className="w-24 h-24 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-text-gray mb-4">AI-Powered Campus Query Chatbot</h1>
        <p className="text-lg text-text-gray mb-8">Smart AI assistance for Jamal Mohamed College</p>
        
        {children} {/* For prompt suggestions */}
      </div>

      {/* Chat input fixed at bottom */}
      <div className="w-11/12 md:max-w-2xl mb-4"> {/* Adjusted width for input area */}
        <ChatInput onSend={onSendChatInput} />
      </div>
    </div>
  );
};

export default LandingLayout;