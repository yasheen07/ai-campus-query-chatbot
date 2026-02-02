import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../components/layout/AuthLayout';
import GradientButton from '../components/ui/GradientButton';
import InputField from '../components/ui/InputField';
import { motion } from 'framer-motion';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Temporarily make login always succeed for demonstration
    setTimeout(() => {
      console.log('Login attempt (always succeeds for demonstration):', { email, password });
      localStorage.setItem('isLoggedIn', 'true'); // Set login state
      setLoading(false);
      navigate('/'); // Navigate to the root page (Landing)
    }, 2000);
  };

  return (
    <AuthLayout title="Login to your Account">
      <form onSubmit={handleSubmit} className="space-y-6">
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
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-red-500 text-center"
          >
            {error}
          </motion.p>
        )}
        <GradientButton variant="solid">
          {loading ? (
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-secondary mx-auto"></div>
          ) : (
            'Login'
          )}
        </GradientButton>
      </form>
      <p className="text-center text-text-gray mt-6">
        New user?{' '}
        <Link to="/register" className="text-primary hover:underline">
          Register
        </Link>
      </p>
    </AuthLayout>
  );
};

export default Login;