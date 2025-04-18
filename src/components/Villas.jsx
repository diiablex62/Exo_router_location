import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContextInstance";

const Villas = () => {
  const [filter, setFilter] = useState("Tous");
  const { listings } = useContext(AppContext);

  const villas = listings.filter(
    (listing) => listing.type === "Duplex" || listing.type === "Studio"
  );
  const filteredVillas =
    filter === "Tous"
      ? villas
      : villas.filter((villa) => villa.type === filter);

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>Villas</h1>
      <div className='mb-4'>
        <label htmlFor='filter' className='block text-lg font-medium mb-2'>
          Filtrer par :
        </label>
        <select
          id='filter'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className='p-2 border border-gray-300 rounded-md'>
          <option value='Tous'>Tous</option>
          <option value='Duplex'>Duplex</option>
          <option value='Studio'>Studio</option>
        </select>
      </div>
      <div className='flex flex-wrap gap-4'>
        {filteredVillas.map((villa) => (
          <div
            key={villa.id}
            className='bg-white shadow-lg rounded-xl p-4 w-64 cursor-pointer'>
            <img
              src={villa.image}
              alt={villa.title}
              className='w-full h-40 object-cover rounded-lg'
            />
            <div className='p-4'>
              <h2 className='text-lg font-semibold'>{villa.title}</h2>
              <p className='text-gray-500 italic'>{villa.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Villas;
