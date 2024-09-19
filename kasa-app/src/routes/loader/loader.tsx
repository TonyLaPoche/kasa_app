import { Logement } from "../../model/logement";
import logements from "../../data/data.json";

export function loader({ params }: { params: Partial<Logement> }) {
  const logement = logements.find((logement: Logement) => logement.id === params.id);

  if (!logement) {
    throw new Response("Oups! La page que vous demandez n'existe pas.", { status: 404 });
  }

  return logement;
}

export default loader;
