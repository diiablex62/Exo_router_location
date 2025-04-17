import React, { createContext, useState } from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [home, setHome] = useState(false);
  const [mode, setMode] = useState(false);

  const toggleUser = () => setUser(!user);
  const toggleHome = () => setHome(!home);
  const toggleMode = () => setMode(!mode);

  return (
    <AppContext.Provider
      value={{
        user,
        home,
        mode,
        toggleUser,
        toggleHome,
        toggleMode,
      }}>
      {children}
    </AppContext.Provider>
  );
};
