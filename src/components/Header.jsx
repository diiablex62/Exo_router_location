import { Menu } from "lucide-react";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";

const Header = ({ user, mode, toggleUser, toggleHome, toggleMode }) => {
  return (
    <header className="bg-white shadow-md p-4 flex justify-between items-center">
      {/* Logo */}
      <h1 className="text-xl font-bold text-red-500">Airbed & Breakfast</h1>

      {/* Catégories */}
      <div className="flex flex-row">
        {user ? (
          <nav className="hidden md:flex space-x-6 items-center">
            <a
              href="#"
              className="text-gray-600 hover:text-black"
              onClick={toggleHome}
            >
              Maisons
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black"
              onClick={toggleHome}
            >
              Appartements
            </a>
            <a href="#" className="text-gray-600 hover:text-black">
              Villas
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-black"
              onClick={toggleUser}
            >
              Deconnexion
            </a>
          </nav>
        ) : (
          <nav className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-gray-600 hover:text-black"
              onClick={toggleUser}
            >
              Connexion
            </a>
          </nav>
        )}
        <a href="#" className="text-xl ml-6" onClick={toggleMode}>
          {!mode ? <FaSun /> : <FaMoon />}
        </a>
        {/* Menu Burger (Mobile) */}
        <button className="md:hidden">
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;
