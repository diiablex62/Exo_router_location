import { Link } from "react-router-dom";

const Villas = () => {
  const villas = [
    { id: "1", name: "Villa Luxe" },
    { id: "2", name: "Villa Bord de Mer" },
  ];

  return (
    <div>
      <h1>Villas</h1>
      <ul>
        {villas.map((villa) => (
          <li key={villa.id}>
            <Link to={`/villas/${villa.id}`}>{villa.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Villas;
