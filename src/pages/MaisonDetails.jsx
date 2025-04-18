import React from "react";
import { useParams } from "react-router-dom";

const MaisonDetails = () => {
  const { id } = useParams();

  const maisons = [
    {
      id: "1",
      name: "Maison de Campagne",
      location: "Provence",
      price: "150€",
      image: "https://www.illico-travaux.com/wp-content/uploads/2020/05/AdobeStock_55289985-scaled.jpeg",
    },
    {
      id: "2",
      name: "Maison Moderne",
      location: "Lyon",
      price: "200€",
      image: "https://www.depreux-construction.com/wp-content/uploads/2022/11/maison-moderne-nos-modeles-plans-idees-amenagement.jpg",
    },
  ];

  const maison = maisons.find((m) => m.id === id);

  if (!maison) {
    return <p>Maison non trouvée.</p>;
  }

  return (
    <div>
      <h1>{maison.name}</h1>
      <img
        src={maison.image}
        alt={maison.name}
        className='w-full h-auto my-4'
      />
      <p>Location: {maison.location}</p>
      <p>Prix: {maison.price}</p>
    </div>
  );
};

export default MaisonDetails;
