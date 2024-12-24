import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Shield, Lock, AlertTriangle } from 'lucide-react';

const Login = () => {
  const [accessCode, setAccessCode] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
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
    } catch (err) {
      setError('Authentication failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-gray-700 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="bg-green-400/10 p-3 rounded-full">
              <Shield className="w-12 h-12 text-green-400" />
            </div>
          </div>
          <h1 className="text-2xl font-bold text-white mb-2">Secure Access Required</h1>
          <p className="text-gray-400">Enter your military-issued access code</p>
        </div>

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
                className="w-full bg-gray-700/50 border border-gray-600 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                placeholder="XXXX-XXXX-XXXX"
                required
              />
            </div>
          </div>

          {error && (
            <div className="flex items-center text-red-400 text-sm">
              <AlertTriangle className="w-4 h-4 mr-2" />
              {error}
            </div>
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
        </div>
      </div>
    </div>
  );
};

export default Login;