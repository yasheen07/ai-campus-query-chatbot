import { useState } from 'react';
import { Link } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import GradientButton from '../components/ui/GradientButton';
import InputField from '../components/ui/InputField';
import PasswordStrength from '../components/ui/PasswordStrength';
import { motion } from 'framer-motion';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Registered with:', { name, email, password });
      setLoading(false);
      setSuccess(true);
    }, 2000);
  };

  if (success) {
    return (
      <AuthLayout title="Registration Successful">
        <div className="text-center text-text-gray"> {/* Text color adjusted */}
          <p className="mb-4">Your account has been created successfully.</p>
          <Link to="/login" className="text-primary hover:underline">
            Click here to Login
          </Link>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout title="Create a New Account">
      <form onSubmit={handleSubmit} className="space-y-6">
        <InputField
          type="text"
          placeholder="Full Name"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <InputField
          type="email"
          placeholder="Email Address"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          type="password"
          placeholder="Password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <PasswordStrength password={password} />
        <InputField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        {error && (
          <motion.p
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 500 }}
            className="text-red-500 text-center" // Soft red for errors
          >
            {error}
          </motion.p>
        )}
        <GradientButton variant="solid">
          {loading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-secondary mx-auto"></div>
          ) : (
            'Register'
          )}
        </GradientButton>
      </form>
      <p className="text-center text-text-gray mt-6"> {/* Text color adjusted */}
        Already have an account?{' '}
        <Link to="/login" className="text-primary hover:underline"> {/* Link color adjusted */}
          Login
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Register;