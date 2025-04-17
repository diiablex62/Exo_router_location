import { Menu } from "lucide-react";
import { FaSun } from "react-icons/fa6";
import { FaMoon } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = ({ mode, toggleMode }) => {
  return (
    <header className='bg-white shadow-md p-4 flex justify-between items-center'>
      {/* Logo */}
      <NavLink
        to='/'
        className={({ isActive }) =>
          isActive ? "text-red-500 font-bold" : "text-red-500"
        }>
        <h1 className='text-xl font-bold'>Airbed & Breakfast</h1>
      </NavLink>

      {/* Catégories */}
      <div className='flex flex-row'>
        <nav className='hidden md:flex space-x-6 items-center'>
          <NavLink
            to='/maisons'
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold"
                : "text-gray-600 hover:text-black"
            }>
            Maisons
          </NavLink>
          <NavLink
            to='/villas'
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold"
                : "text-gray-600 hover:text-black"
            }>
            Villas
          </NavLink>
          <NavLink
            to='/login'
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold"
                : "text-gray-600 hover:text-black"
            }>
            Login
          </NavLink>
        </nav>
        <button className='text-xl ml-6' onClick={toggleMode}>
          {!mode ? <FaSun /> : <FaMoon />}
        </button>
        {/* Menu Burger (Mobile) */}
        <button className='md:hidden'>
          <Menu size={28} />
        </button>
      </div>
    </header>
  );
};

export default Header;
