import { Link } from "react-router-dom";

const Villas = () => {
  const villas = [
    {
      id: "1",
      name: "Villa Luxe",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1",
    },
    {
      id: "2",
      name: "Villa Bord de Mer",
      image: "https://media.lesechos.com/api/v1/images/view/67f5336ac543af9efe079388/1280x720/01402096953667-web-tete.jpg",
    },
  ];

  return (
    <div className='p-6'>
      <h1 className='text-3xl font-bold mb-6'>Villas</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
        {villas.map((villa) => (
          <div
            key={villa.id}
            className='block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow'>
            <img
              src={villa.image}
              alt={villa.name}
              className='w-full h-48 object-cover'
            />
            <div className='p-4'>
              <h2 className='text-xl font-semibold'>{villa.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Villas;
