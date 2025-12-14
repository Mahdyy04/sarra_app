import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import LoginChoice from "./pages/login/LoginChoice.jsx";
import ClientLogin from "./pages/login/ClientLogin";
import EtudiantLogin from "./pages/login/EtudiantLogin";
import Dashboard from "./pages/Dashboard";
import Introduction from "./pages/content/Introduction";
import AnalyseFonctionnelle from "./pages/content/AnalyseFonctionnelle";
import ArmoireDePuissance from "./pages/content/ArmoireDePuissance";
import ChaineInformations from "./pages/content/ChaineInformations";
import DiagrammeFAST from "./pages/content/DiagrammeFAST.jsx";
import GenereCahier from "./pages/content/GenereCahier.jsx";
import Malaxeur from "./pages/content/Malaxeur.jsx";
import Pupitre from "./pages/content/Pupitre";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import PresentationPage from "./pages/content/PresentationPage.jsx";
import CahierDeChargePage from "./pages/content/CahierDeChargePage.jsx";
import AnalyseSADT from "./pages/content/AnalyseSADT.jsx";
import HomePage from "./pages/HomePage.jsx";
import PdfGenerated from "./pages/content/PdfGenerated.jsx";

let router = createBrowserRouter([
  {
    path: "/",
    Component: LoginChoice,
    ErrorBoundary: NotFoundPage,
  },
  {
    path: "/login/client",
    Component: ClientLogin,
  },
  {
    path: "/login/etudiant",
    Component: EtudiantLogin,
  },
  {
    path: "/home",
    Component: HomePage,
  },
  {
    path: "/dashboard",
    Component: Dashboard,
    children: [
      {
        path: "/dashboard/introduction",
        Component: Introduction,
      },
      {
        path: "/dashboard/presentation",
        Component: PresentationPage,
      },
      {
        path: "/dashboard/presentation/armoire",
        Component: ArmoireDePuissance,
      },
      {
        path: "/dashboard/presentation/malaxeur",
        Component: Malaxeur,
      },
      {
        path: "/dashboard/presentation/pupitre",
        Component: Pupitre,
      },
      {
        path: "/dashboard/cahier",
        Component: CahierDeChargePage,
      },
      {
        path: "/dashboard/cahier/analyse",
        Component: AnalyseFonctionnelle,
      },
      {
        path: "/dashboard/cahier/fast",
        Component: DiagrammeFAST,
      },
      {
        path: "/dashboard/cahier/chaine",
        Component: ChaineInformations,
      },
      {
        path: "/dashboard/cahier/sadt",
        Component: AnalyseSADT,
      },
      {
        path: "/dashboard/generer",
        Component: GenereCahier,
      },
      {
        path: "/dashboard/generer/pdf",
        Component: PdfGenerated,
      },
    ],
  },
  {
    path: "/about",
    Component: AboutPage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
