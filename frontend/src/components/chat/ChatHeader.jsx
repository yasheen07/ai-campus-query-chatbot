import React from 'react';
import { LogOut } from 'lucide-react'; // Import LogOut icon
import { motion } from 'framer-motion'; // Import motion for animation

const ChatHeader = ({ onLogout }) => { // Accept onLogout prop
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-primary text-secondary p-4 shadow-md flex items-center justify-between"> {/* Changed to justify-between */}
      <div className="flex items-center">
        <img src="/src/assets/jmc-logo.svg" alt="JMC Logo" className="w-8 h-8 mr-3" />
        <h2 className="text-lg font-semibold">Jamal Mohamed College – AI Campus Assistant</h2>
      </div>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={onLogout} // Use the onLogout prop
        className="p-2 rounded-full hover:bg-white/20 transition-colors duration-200"
        title="Logout"
      >
        <LogOut size={24} />
      </motion.button>
    </div>
  );
};

export default ChatHeader;