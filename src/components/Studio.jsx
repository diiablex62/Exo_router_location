import React, { useContext } from "react";
import { AppContext } from "../context/AppContextInstance";
import Card from "./Card";

const Studio = () => {
  const { listings } = useContext(AppContext);

  const studios = listings.filter((listing) => listing.type === "Studio");

  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Voir les studios</h1>
      <div className='flex flex-wrap gap-4'>
        {studios.map((studio) => (
          <Card key={studio.id} listing={studio} />
        ))}
      </div>
    </div>
  );
};

export default Studio;
