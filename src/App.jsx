import React from "react";
import Header from "./components/Header";
import Listings from "./pages/Listings";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
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
        <Listings />
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
