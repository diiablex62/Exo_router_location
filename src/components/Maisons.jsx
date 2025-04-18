import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContextInstance";

const Maisons = () => {
  const [filter, setFilter] = useState("Tous");
  const { listings } = useContext(AppContext);

  const maisons = listings.filter(
    (listing) => listing.type === "Duplex" || listing.type === "Studio"
  );
  const filteredMaisons =
    filter === "Tous"
      ? maisons
      : maisons.filter((maison) => maison.type === filter);

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>Maisons</h1>
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
        {filteredMaisons.map((maison) => (
          <div
            key={maison.id}
            className='bg-white shadow-lg rounded-xl p-4 w-64 cursor-pointer'>
            <img
              src={maison.image}
              alt={maison.title}
              className='w-full h-40 object-cover rounded-lg'
            />
            <div className='p-4'>
              <h2 className='text-lg font-semibold'>{maison.title}</h2>
              <p className='text-gray-500 italic'>{maison.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maisons;
