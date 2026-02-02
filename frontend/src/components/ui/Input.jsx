import React from 'react';

const Input = ({ id, name, type, required, value, onChange, placeholder, className = '' }) => {
    return (
        <input
            id={id}
            name={name}
            type={type}
            required={required}
            value={value}
            onChange={onChange}
            className={`relative block w-full px-3 py-2 text-white placeholder-gray-500 bg-gray-700 border border-gray-600 rounded-md appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm ${className}`}
            placeholder={placeholder}
        />
    );
};

export default Input;
