import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface AuthContextType {
  isAuthenticated: boolean;
  accessCode: string | null;
  login: (code: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [accessCode, setAccessCode] = useState<string | null>(null);
  const navigate = useNavigate();

  // Simulated access codes (in production, these would be securely stored and validated)
  const validAccessCodes = [
    'ALPHA-7X9Y-2023',
    'BRAVO-8Z2X-2023',
    'DELTA-5K4M-2023',
    'CHARLIE-78EM-2023'

  ];

  useEffect(() => {
    const storedAuth = localStorage.getItem('auth');
    if (storedAuth) {
      const { code } = JSON.parse(storedAuth);
      setAccessCode(code);
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (code: string): Promise<boolean> => {
    // Simulate API validation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    if (validAccessCodes.includes(code)) {
      setAccessCode(code);
      setIsAuthenticated(true);
      localStorage.setItem('auth', JSON.stringify({ code }));
      return true;
    }
    return false;
  };

  const logout = () => {
    setAccessCode(null);
    setIsAuthenticated(false);
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, accessCode, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};