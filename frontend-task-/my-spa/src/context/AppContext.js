import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user] = useState({ email: "realebohasekhitlane@gmail.com", phone: "‪+266 59325969‬" });

  return (
    <AppContext.Provider value={{ user }}>
      {children}
    </AppContext.Provider>
  );
};
