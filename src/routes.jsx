import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Maisons from "./components/Maisons";
import Villas from "./components/Villas";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />, // Page d'erreur pour les routes non trouvées
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/maisons",
    element: <Maisons />,
  },
  {
    path: "/villas",
    element: <Villas />,
  },
]);
