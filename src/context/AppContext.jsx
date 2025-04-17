import React, { useState } from "react";
import { AppContext } from "./AppContextInstance";

export const AppContextProvider = ({ children }) => {
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

export default AppContextProvider;
