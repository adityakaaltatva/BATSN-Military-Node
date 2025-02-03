import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, Lock, AlertTriangle } from 'lucide-react';
import { motion } from 'framer-motion';

const accessCodes = [
  'ALPHA-7X9Y-2023',
  'BRAVO-8Z2X-2023',
  'DELTA-5K4M-2023',
  'CHARLIE-78EM-2023'
];

const Login = () => {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [currentCode, setCurrentCode] = useState(accessCodes[0]);
  const { login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode(accessCodes[Math.floor(Math.random() * accessCodes.length)]);
    }, 10000); // Change current code every 10 seconds
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      const success = await login(accessCode);
      if (success) {
        navigate('/');
      } else {
        setError('Invalid access code. Please try again.');
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black text-white">
      <div className="bg-gray-900/80 backdrop-blur-md p-8 rounded-lg border border-gray-700 w-full max-w-md shadow-xl">
        <div className="text-center mb-8">
          <motion.div
            className="flex justify-center mb-4"
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 5 }}
          >
            <div className="bg-green-500/10 p-3 rounded-full border border-green-400 animate-pulse">
              <Shield className="w-12 h-12 text-green-400" />
            </div>
          </motion.div>
          <h1 className="text-2xl font-bold text-white mb-2 tracking-wide">
            Military BATSN Portal
          </h1>
          <p className="text-gray-400">Enter your issued access code</p>
        </div>

        {/* Animated Current Access Code */}
        <motion.div
          className="bg-gray-800 text-green-300 p-3 rounded text-center font-mono text-lg border border-green-500 mb-6"
          animate={{ opacity: [0, 1], scale: [0.9, 1] }}
          transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
        >
          Current Code: {currentCode}
        </motion.div>

        {/* Sample Access Codes Section */}
        {/* <div className="mb-6">
          <h3 className="text-gray-400 text-sm mb-2">Access Codes Generated:</h3>
          <div className="bg-gray-800 p-3 rounded border border-gray-600 text-green-300 font-mono text-sm">
            {accessCodes.map((code, index) => (
              <p key={index} className="mb-1">{code}</p>
            ))}
          </div>
        </div> */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-400 mb-2">
              Access Code
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
              <input
                type="text"
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value.toUpperCase())}
                className="w-full bg-gray-700 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="XXXX-XXXX-XXXX"
                required
              />
            </div>
          </div>

          {error && (
            <motion.div
              className="flex items-center text-red-400 text-sm"
              animate={{ x: [-10, 10, 0] }}
              transition={{ duration: 0.3 }}
            >
              <AlertTriangle className="w-4 h-4 mr-2" />
              {error}
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? 'Authenticating...' : 'Access System'}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Authorized personnel only. All access attempts are logged.
          Powered By: EcoCDN
        </div>
      </div>
    </div>
  );
};

export default Login;
