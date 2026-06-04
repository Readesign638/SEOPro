// src/context/YourProvider.js
import React, { createContext, useContext } from 'react';

// Create a context
const YourContext = createContext();

// Create a provider component
export const YourProvider = ({ children }) => {
  // Define any state or functions you need to provide
  const value = {
    // Example state or functions
    exampleValue: "Some value",
    exampleFunction: () => console.log("Function called"),
  };

  return (
    <YourContext.Provider value={value}>
      {children}
    </YourContext.Provider>
  );
};

// Custom hook to use the context
export const useYourContext = () => useContext(YourContext);