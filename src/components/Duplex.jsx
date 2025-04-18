import React, { useContext } from "react";
import { AppContext } from "../context/AppContextInstance";
import Card from "./Card";

const Duplex = () => {
  const { listings } = useContext(AppContext);

  const duplexes = listings.filter((listing) => listing.type === "Duplex");

  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Voir les duplex : </h1>
      <div className='flex flex-wrap gap-4'>
        {duplexes.map((duplex) => (
          <Card key={duplex.id} listing={duplex} />
        ))}
      </div>
    </div>
  );
};

export default Duplex;
