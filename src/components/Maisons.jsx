import React, { useContext } from "react";
import { AppContext } from "../context/AppContextInstance";
import { Link, Outlet } from "react-router-dom";

const Maisons = () => {
  const { listings } = useContext(AppContext);

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>Maisons</h1>
      <div className='flex space-x-4 mb-6'>
        <Link to='duplex' className='text-blue-500 hover:underline'>
          Duplex
        </Link>
        <Link to='studio' className='text-blue-500 hover:underline'>
          Studio
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Maisons;
