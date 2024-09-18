// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../views/errors/error-page";
import Home from "../views/home/Home";
import About from "../views/about/About";
import Logement, { loader as logementLoader } from "../views/logement/Logement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Home />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/a-propos",
    element: (
      <MainLayout>
        <About />
      </MainLayout>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "logement/:id",
    element: (
      <MainLayout>
        <Logement />
      </MainLayout>
    ),
    loader: logementLoader,
    errorElement: <ErrorPage />,
  },
]);
