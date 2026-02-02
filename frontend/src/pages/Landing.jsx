import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import LandingLayout from '../components/layout/LandingLayout';
import { motion } from 'framer-motion';

// Chat-related imports
import ChatHeader from '../components/chat/ChatHeader';
import ChatWindow from '../components/chat/ChatWindow';
import ChatInput from '../components/chat/ChatInput';
import TypingIndicator from '../components/chat/TypingIndicator';
import { collegeInfo } from '../utils/collegeInfo'; // Import collegeInfo

const Landing = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('isLoggedIn') === 'true');
  const [messages, setMessages] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatWindowRef = useRef(null);

  const chatSuggestions = [
    "Tell me about JMC",
    "What courses are offered?",
    "How to apply for admission?",
    "What are the fees?"
  ];


  // Effect for initial welcome message (only if logged in)
  useEffect(() => {
    if (isLoggedIn && messages.length === 0) {
      const welcomeMessage = {
        text: "Welcome to Jamal Mohamed College AI Assistant. Ask me about courses, admissions, exams, or placements.",
        sender: 'bot'
      };
      setMessages([welcomeMessage]);
    }
  }, [isLoggedIn, messages.length]);

  // Effect for scrolling to bottom of chat window
  useEffect(() => {
    if (chatWindowRef.current) {
      chatWindowRef.current.scrollTop = chatWindowRef.current.scrollHeight;
    }
  }, [messages, isTyping]);


  const handleSend = async (messageText) => {
    if (!messageText.trim()) return;

    const userMessage = { text: messageText, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      let botResponseText = "";
      const lowerCaseMessage = messageText.toLowerCase();

      // Enhanced responses based on provided collegeInfo
      if (lowerCaseMessage.includes("about jmc") || lowerCaseMessage.includes("about college") || lowerCaseMessage.includes("about the college")) {
        botResponseText = collegeInfo.about.summary + "\n\n" +
                          `Affiliation: ${collegeInfo.about.affiliation}\n` +
                          `Autonomous Status: ${collegeInfo.about.autonomous_status}\n` +
                          `Accreditation: ${collegeInfo.about.accreditation}\n` +
                          `Campus Size: ${collegeInfo.about.campus_size}\n` +
                          `Student Strength: ${collegeInfo.about.student_strength}`;
      } else if (lowerCaseMessage.includes("course") || lowerCaseMessage.includes("department") || lowerCaseMessage.includes("programs")) {
        botResponseText = collegeInfo.courses.summary + "\n\n" +
                          `Undergraduate Programs: ${collegeInfo.courses.ug_programs}\n` +
                          `Postgraduate Programs: ${collegeInfo.courses.pg_programs}\n` +
                          `Research Programs: ${collegeInfo.courses.research_programs}\n\n` +
                          collegeInfo.courses.departments_note;
      } else if (lowerCaseMessage.includes("admission process") || lowerCaseMessage.includes("admissions") || lowerCaseMessage.includes("apply")) {
        botResponseText = collegeInfo.admissions.summary + "\n\n" +
                          `UG Admissions: ${collegeInfo.admissions.ug_process}\n` +
                          `PG Admissions: ${collegeInfo.admissions.pg_process}\n\n` +
                          `General Steps: ${collegeInfo.admissions.general_steps}`;
      } else if (lowerCaseMessage.includes("fees") || lowerCaseMessage.includes("fee structure") || lowerCaseMessage.includes("cost")) {
        botResponseText = collegeInfo.fees.summary + "\n\n" +
                          `Undergraduate Fees: ${collegeInfo.fees.ug_fees}\n` +
                          `Postgraduate Fees: ${collegeInfo.fees.pg_fees}\n` +
                          `Other Costs: ${collegeInfo.fees.other_costs}`;
      } else if (lowerCaseMessage.includes("facilities") || lowerCaseMessage.includes("hostel") || lowerCaseMessage.includes("library") || lowerCaseMessage.includes("campus facilities") || lowerCaseMessage.includes("sports")) {
        botResponseText = collegeInfo.facilities.summary + "\n\n" +
                          `Academics & Infrastructure: ${collegeInfo.facilities.academics_infrastructure}\n` +
                          `Hostel Accommodation: ${collegeInfo.facilities.hostel_accommodation}\n` +
                          `Sports & Extra Activities: ${collegeInfo.facilities.sports_extra}`;
      } else if (lowerCaseMessage.includes("placement") || lowerCaseMessage.includes("training") || lowerCaseMessage.includes("recruiters")) {
        botResponseText = collegeInfo.placements.summary + "\n\n" +
                          `Recruiters: ${collegeInfo.placements.recruiters}\n` +
                          `Packages: ${collegeInfo.placements.packages}`;
      } else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("address") || lowerCaseMessage.includes("phone") || lowerCaseMessage.includes("email") || lowerCaseMessage.includes("website") || lowerCaseMessage.includes("location")) {
        botResponseText = `Address: ${collegeInfo.contact.address}\n` +
                          `Phone: ${collegeInfo.contact.phone}\n` +
                          `Email: ${collegeInfo.contact.email}\n` +
                          `Website: ${collegeInfo.contact.website}`;
      } else if (lowerCaseMessage.includes("working hours") || lowerCaseMessage.includes("hours")) {
        botResponseText = `Administrative Office: ${collegeInfo.working_hours.admin_office}\n` +
                          `Library & Labs: ${collegeInfo.working_hours.library_labs}\n` +
                          `Hostels: ${collegeInfo.working_hours.hostels}\n\n` +
                          collegeInfo.working_hours.note;
      } else if (lowerCaseMessage.includes("college")) { // General college query fallback
        botResponseText = "Jamal Mohamed College (JMC) is a well-established autonomous Arts & Science College. What specific aspect are you interested in?";
      }
      else {
        botResponseText = "I can help only with Jamal Mohamed College related questions. Please ask something relevant to the college (e.g., about JMC, courses, admissions, fees, facilities, placements, contact, working hours).";
      }

      const botMessage = { text: botResponseText, sender: 'bot' };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setMessages([]); // Clear messages on logout
    navigate('/');
  };

  const handleLandingChatSend = (message) => {
    // If not logged in, any interaction with the input on landing page prompts login
    if (!isLoggedIn) {
      navigate('/login');
    } else {
      handleSend(message);
    }
  };


  if (isLoggedIn) {
    // Render the full chat interface if logged in
    return (
      <div className="main-container w-full h-screen flex flex-col p-0 overflow-hidden relative">
        <ChatHeader onLogout={handleLogout} />
        <div ref={chatWindowRef} className="flex-1 overflow-y-auto px-4 py-2 pt-20 pb-16">
          <div className="max-w-2xl mx-auto">
            {messages.length <= 1 && ( // Show suggestions if only welcome message or no messages
              <div className="flex flex-col items-center justify-center h-full text-text-gray">
                <p className="text-xl mb-6">How can I help you today?</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:max-w-xl px-4">
                  {chatSuggestions.map((suggestion, index) => (
                    <motion.button
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                      className="p-4 bg-secondary/70 backdrop-blur-sm rounded-lg shadow-md text-text-gray hover:bg-primary/10 transition-colors duration-200 text-left text-lg"
                      onClick={() => handleSend(suggestion)}
                    >
                      {suggestion}
                    </motion.button>
                  ))}
                </div>
              </div>
            )}
            <ChatWindow messages={messages} isTyping={isTyping} />
            {isTyping && <TypingIndicator />}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-secondary p-3 shadow-lg flex justify-center">
          <div className="w-full md:max-w-2xl">
            <ChatInput onSend={handleSend} isTyping={isTyping} />
          </div>
        </div>
      </div>
    );
  } else {
    // Render the ChatGPT-like landing page if not logged in
    const suggestions = [
        "Tell me about JMC",
        "What courses are offered?",
        "How to apply for admission?",
        "What are the fees?"
    ];

    return (
      <LandingLayout onSendChatInput={handleLandingChatSend}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full md:max-w-2xl mt-8 px-4">
          {suggestions.map((suggestion, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              className="p-4 bg-secondary/70 backdrop-blur-sm rounded-lg shadow-md text-text-gray hover:bg-primary/10 transition-colors duration-200 text-left"
              onClick={() => handleLandingChatSend(suggestion)} // Simulate sending the suggestion
            >
              {suggestion}
            </motion.button>
          ))}
        </div>
      </LandingLayout>
    );
  }
};

export default Landing;
