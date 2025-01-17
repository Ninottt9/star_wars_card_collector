// src/context/UserContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';
import api from '../services/api';

// Create the UserContext
const UserContext = createContext({
  user: {},
  updateUser: (newUserData: any) => {},
  fetchUserData: async () => {},
});

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Function to update user data
  const updateUser = (newUserData) => {
    setUser(newUserData);
  };

  // Fetch user data from your backend API and set it
  const fetchUserData = async () => {
    try {
      // Example API call
      const response = await api.get('/user');
      const userData = response.data;
      setUser(userData);
    } catch (error) {
      console.error('Failed to fetch user data:', error);
    }
  };
  // Mock function to fetch user data on mount, replace with actual API call
  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <UserContext.Provider value={{ user, updateUser, fetchUserData }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUser = () => {
  return useContext(UserContext);
};
