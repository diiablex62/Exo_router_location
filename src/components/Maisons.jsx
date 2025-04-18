import { Link } from "react-router-dom";

const Maisons = () => {
  const maisons = [
    {
      id: "1",
      name: "Maison de Campagne",
      image: "https://www.viving.fr/wp-content/uploads/2016/02/Cre%CC%81dit-APLA-Laure-Pettier-840a.jpg",
    },
    {
      id: "2",
      name: "Maison Moderne",
      image: "https://www.depreux-construction.com/wp-content/uploads/2022/11/maison-moderne-nos-modeles-plans-idees-amenagement.jpg",
    },
  ];

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>Maisons</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {maisons.map((maison) => (
          <div
            key={maison.id}
            className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
            <img
              src={maison.image}
              alt={maison.name}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold'>{maison.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Maisons;
