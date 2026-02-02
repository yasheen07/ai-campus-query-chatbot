import React from 'react';
import { Link } from 'react-router-dom';

const LandingHeader = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-10 bg-transparent p-4 flex items-center justify-between">
      <div className="flex items-center">
        <img src="/src/assets/jmc-logo.svg" alt="JMC Logo" className="w-8 h-8 mr-2" />
        <span className="text-text-gray font-semibold text-lg hidden sm:block">Jamal Mohamed College</span>
      </div>
      <div className="flex space-x-4">
        <Link to="/login" className="text-text-gray hover:text-primary transition-colors duration-200">
          Login
        </Link>
        <Link to="/register" className="text-text-gray hover:text-primary transition-colors duration-200">
          Register
        </Link>
      </div>
    </div>
  );
};

export default LandingHeader;