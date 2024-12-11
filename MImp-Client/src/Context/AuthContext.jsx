import React, { createContext, useContext, useState } from 'react';
import { isAuthenticated } from '../services/AuthServices';

// Create the context
const AuthContext = createContext();

// Create a provider component
export const AuthProvider = ({ children }) => {
  const [isLoggedOut, setIsLoggedOut] = useState(!isAuthenticated());

  const logout = () => {
    console.log('Logging out...');
    setIsLoggedOut(true);
    // Add any logout logic (like clearing storage)
  };
  const login = () => {
    console.log('Logging in...');
    setIsLoggedOut(false);
    // Add any login logic
  };

  return (
    <AuthContext.Provider value={{ isLoggedOut, logout, login }}>
      {children}
    </AuthContext.Provider>
  );
};

// Custom hook for using the AuthContext
export const useAuth = () => {
  return useContext(AuthContext);
};
