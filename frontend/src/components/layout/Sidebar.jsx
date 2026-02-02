import React from 'react';
import { Plus, MessageSquare, LogOut } from 'lucide-react';
import jmcLogo from '../../assets/jmc-logo.svg';

const Sidebar = ({ onNewChat, onLogout }) => {
    return (
        <div className="flex flex-col h-full bg-gray-800 text-white">
            <div className="flex items-center justify-center p-4 border-b border-gray-700">
                <img src={jmcLogo} alt="JMC Logo" className="h-12" />
            </div>
            <div className="flex-1 p-4 space-y-4">
                <button
                    onClick={onNewChat}
                    className="flex items-center w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                    <Plus className="w-5 h-5 mr-2" />
                    New Chat
                </button>
                <div className="space-y-2">
                    <h3 className="px-4 text-xs font-semibold tracking-wider text-gray-400 uppercase">Chat History</h3>
                    {/* Chat history list will go here */}
                </div>
            </div>
            <div className="p-4 border-t border-gray-700">
                <button
                    onClick={onLogout}
                    className="flex items-center w-full px-4 py-2 text-sm font-medium text-white rounded-md hover:bg-gray-700 focus:outline-none"
                >
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
