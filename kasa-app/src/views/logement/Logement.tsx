// src/views/logement/Logement.tsx
import { useLoaderData } from "react-router-dom";
import logements from "@/data/data.json"; // Importe les données JSON directement

// Loader qui cherche un logement en fonction de l'ID dans l'URL
export function loader({ params }: { params: { id: string } }) {
  const logement = logements.find((logement) => logement.id === params.id);

  if (!logement) {
    throw new Response("Oups! La page que vous demandez n'existe pas.", { status: 404 }); // Renvoie une erreur 404 si aucun logement n'est trouvé
  }

  return logement;
}

const Logement = () => {
  const logement = useLoaderData(); // Récupère les données du loader

  return (
    <div>
      <h1>{logement.title}</h1>
      <img src={logement.cover} alt={logement.title} />
      <p>{logement.description}</p>
      <ul>
        {logement.equipments.map((equipment: string, index: number) => (
          <li key={index}>{equipment}</li>
        ))}
      </ul>
      {/* Afficher plus de détails sur le logement ici */}
    </div>
  );
};

export default Logement;
