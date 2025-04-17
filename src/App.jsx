import Header from "./components/Header";
import Listings from "./pages/Listings";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [user, setUser] = useState(false);
  const [home, setHome] = useState(false);
  const [mode, setMode] = useState(false);

  const toggleUser = () => {
    setUser(!user);
  };

  const toggleHome = () => {
    setHome(!home);
  };

  const toggleMode = () => {
    setMode(!mode);
  };
  return (
    <div
      className={`min-h-screen flex flex-col ${
        mode ? "bg-gray-100" : "bg-gray-800"
      } `}>
      <Header
        user={user}
        toggleUser={toggleUser}
        toggleHome={toggleHome}
        toggleMode={toggleMode}
        mode={mode}
      />
      <main className='flex-grow'>
        {user ? (
          <Listings home={home} mode={mode} />
        ) : (
          <p
            className={`text-center text-2xl ${
              mode ? "text-red-800" : "text-white"
            }  m-28`}>
            {" "}
            Vous devez etre connecté
          </p>
        )}
        <Reviews />
      </main>
      <Footer />
    </div>
  );
}

export default App;
