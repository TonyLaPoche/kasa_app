import { createHashRouter } from "react-router-dom";
import MainLayout from "../components/layouts/mainLayout/MainLayout";
import Home from "../views/home/Home";
import About from "../views/about/About";
import Logement from "../views/logement/Logement";
import { loader as logementLoader } from "../routes/loader/loader";
import ErrorPage from "../views/errors/error-page";

export const router = createHashRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    errorElement: (
      <MainLayout>
        <ErrorPage />
      </MainLayout>
    ),
  },
  {
    path: "/a-propos",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
    errorElement: (
      <MainLayout>
        <ErrorPage />
      </MainLayout>
    ),
  },
  {
    path: "logement/:id",
    element: (
      <MainLayout>
        <Logement />
      </MainLayout>
    ),
    loader: logementLoader,
    errorElement: (
      <MainLayout>
        <ErrorPage />
      </MainLayout>
    ),
  },
]);
