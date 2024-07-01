import { createContext, useState, useEffect } from 'react';
import authService from '../services/authService';
import { useUser } from './UserContext';
import api from '../services/api';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(authService.getCurrentUser());
  const { fetchUserData } = useUser(); // Inject the useUser hook

  useEffect(() => {
    setCurrentUser(authService.getCurrentUser());
  }, []);

  const login = async (nickname, password) => {
    const user = await authService.login(nickname, password);
    setCurrentUser(user);
    await fetchUserData();
  };

  const register = async (nickname, password) => {
    await authService.register(nickname, password);
  };

  const logout = () => {
    authService.logout();
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ currentUser, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
