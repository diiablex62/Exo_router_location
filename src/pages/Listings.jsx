import React, { useContext } from "react";
import Card from "../components/Card";
import { AppContext } from "../context/AppContextInstance";

const Listings = () => {
  const { listings } = useContext(AppContext);

  return (
    <div>
      <h1 className='text-white text-3xl font-bold my-6'>
        Logements disponibles
      </h1>
      <div className='flex flex-wrap gap-4'>
        {listings.map((listing) => (
          <Card key={listing.id} listing={listing} />
        ))}
      </div>
    </div>
  );
};

export default Listings;
