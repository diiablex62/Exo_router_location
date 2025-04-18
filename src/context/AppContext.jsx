import React, { useState } from "react";
import { AppContext } from "./AppContextInstance";

export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState(false);

  const login = (status = true) => {
    setIsLoggedIn(status);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        mode,
        toggleMode,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
