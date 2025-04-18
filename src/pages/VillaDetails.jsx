import React from "react";
import { useParams } from "react-router-dom";

const VillaDetails = () => {
  const { id } = useParams();

  const villas = [
    {
      id: "1",
      name: "Villa Luxe",
      location: "Cannes",
      price: "500€",
      image: "https://media.inmobalia.com/imgV1/B95mbh8olwFQm~uCUaVOI2kQT0hb0a8sZ9turUNfnwtvuccYCzs0YVPfPbfkc2VnnN1JFDplhuC3TbFKfXVo08pGqR~CZ~mrxcTC5sqFaIC90xjr560VLXB4A8Fyk7B9cfOIAx5oL7TDz~08uzCVPbX8_HRVDi45aTuX9Ly88TF9AFDADeRm3uvl_4kJEkC7RqVVehXaAbFvZFbEXIHDXlI_4nsj6k2db1evArDKqygjaIQ0gyz2rzFnpK_iB_ykM6l02T1QCQOcIDf5CqQtLY_pdOLzHOcIezT_82owWdoFviVCmOOya8ACcWdAxuSskL9cVcwqxGiyrSl_C8FaL54JtIid78h_~bLWKpvf2kd2wjE2fg1mAQiPw57SiAIb1DrLl2GiIVWMxGfNdX8S.jpg",
    },
    {
      id: "2",
      name: "Villa Bord de Mer",
      location: "Nice",
      price: "400€",
      image: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/295090917.jpg?k=d17621b71b0eaa0c7a37d8d8d02d33896cef75145f61e7d96d296d88375a7d39&o=&hp=1",
    },
  ];

  const villa = villas.find((v) => v.id === id);

  if (!villa) {
    return <p>Villa non trouvée.</p>;
  }

  return (
    <div>
      <h1>{villa.name}</h1>
      <img src={villa.image} alt={villa.name} className='w-full h-auto my-4' />
      <p>Location: {villa.location}</p>
      <p>Prix: {villa.price}</p>
    </div>
  );
};

export default VillaDetails;
