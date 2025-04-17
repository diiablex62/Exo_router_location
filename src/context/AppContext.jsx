import React from "react";
import { AppContext } from "./AppContextInstance";

export const AppContextProvider = ({ children }) => {
  return (
    <AppContext.Provider
      value={
        {
        
        }
      }>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
