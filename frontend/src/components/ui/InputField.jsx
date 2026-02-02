import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

const InputField = ({ type = 'text', placeholder, name, id, value, onChange, required = false }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const isPassword = type === 'password';

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="relative w-full">
      <input
        type={isPassword ? (isPasswordVisible ? 'text' : 'password') : type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full min-h-48 bg-secondary text-text-gray placeholder-gray-500 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary transition-colors duration-200"
      />
      {isPassword && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 px-4 flex items-center text-gray-500 hover:text-primary transition-colors duration-200"
        >
          {isPasswordVisible ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}
    </div>
  );
};

export default InputField;