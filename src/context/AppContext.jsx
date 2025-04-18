import React, { useState } from "react";
import { AppContext } from "./AppContextInstance";

export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };

  return (
    <AppContext.Provider
      value={{
        isLoggedIn,
        login,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
