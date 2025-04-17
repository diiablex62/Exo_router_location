import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import { Outlet } from "react-router-dom";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState(false);

  const toggleMode = () => {
    setMode(!mode);
  };

  return (
    <div
      className={`min-h-screen flex flex-col ${
        mode ? "bg-gray-100" : "bg-gray-800"
      } `}>
      <Header toggleMode={toggleMode} mode={mode} />
      <main className='flex-grow'>
        <Outlet />
        <Reviews /> 
      </main>
      <Footer />
    </div>
  );
}

export default App;
