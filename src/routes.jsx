import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
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
]);
