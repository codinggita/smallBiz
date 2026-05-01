import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Storage } from '../../utils/storage';
import { authService } from '../../services/authService';

const ProtectedRoute = ({ children }) => {
  const [isVerifying, setIsVerifying] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const verifyAuth = async () => {
      const token = Storage.getLocal('TOKEN') || Storage.getSession('TOKEN');
      
      if (!token) {
        setIsAuthenticated(false);
        setIsVerifying(false);
        return;
      }

      try {
        // Optional: Verify token with backend
        // await authService.getMe();
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Auth verification failed:', error);
        Storage.clearAll();
        setIsAuthenticated(false);
      } finally {
        setIsVerifying(false);
      }
    };

    verifyAuth();
  }, []);

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

export default ProtectedRoute;
