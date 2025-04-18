import React, { useState } from "react";
import { AppContext } from "./AppContextInstance";

export const AppContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [mode, setMode] = useState(false);

  const listings = [
    {
      id: 1,
      image:
        "https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Villa de Luxe",
      location: "Nice, France",
      price: "250",
      type: "Duplex",
    },
    {
      id: 2,
      image:
        "https://images.pexels.com/photos/2098405/pexels-photo-2098405.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Chalet Montagne",
      location: "Chamonix, France",
      price: "180",
      type: "Studio",
    },
    {
      id: 3,
      image:
        "https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Maison Bohème",
      location: "Bordeaux, France",
      price: "120",
      type: "Studio",
    },
    {
      id: 4,
      image:
        "https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Loft Design",
      location: "Paris, France",
      price: "300",
      type: "Duplex",
    },
    {
      id: 5,
      image:
        "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Cabane en forêt",
      location: "Lille, France",
      price: "90",
      type: "Studio",
    },
  ];

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
        listings, // Ajout de la liste globale
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
