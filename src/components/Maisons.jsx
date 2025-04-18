import { Link } from "react-router-dom";

const Maisons = () => {
  const maisons = [
    { id: "1", name: "Maison de Campagne" },
    { id: "2", name: "Maison Moderne" },
  ];

  return (
    <div>
      <h1>Maisons</h1>
      <ul>
        {maisons.map((maison) => (
          <li key={maison.id}>
            <Link to={`/maisons/${maison.id}`}>{maison.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Maisons;
