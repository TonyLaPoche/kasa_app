import { createHashRouter } from "react-router-dom";
import Home from "../views/home/Home";
import About from "../views/about/About";
import Logement from "../views/logement/Logement";
import { loader as logementLoader } from "../routes/loader/loader";
import ErrorPage from "../views/errors/error-page";
import MainLayout from "../layouts/mainLayout/MainLayout";

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
