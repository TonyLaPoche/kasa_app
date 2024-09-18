import { Link, useRouteError } from "react-router-dom";
import styles from "./error-pages.module.scss";

interface RouteError {
  status: number;
  statusText: string;
  data: string;
  internal: boolean;
}

export default function ErrorPage() {
  const error = useRouteError() as RouteError;

  return (
    <section className={styles.errorPage}>
      <h1 className={styles.errorTitle}>{error.status}</h1>
      <p className={styles.errorMessage}>
        Oups! La page que
        <br /> vous demandez n'existe pas.
      </p>
      <Link to="/" className={styles.errorRedirection}>
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}
