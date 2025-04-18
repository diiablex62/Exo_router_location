import React, { useState } from "react";
import { AppContext } from "./AppContextInstance";

export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = (status = true) => {
    setIsLoggedIn(status);
  };

  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
