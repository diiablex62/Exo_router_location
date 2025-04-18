import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Login from "./components/Login";
import Maisons from "./components/Maisons";
import Villas from "./components/Villas";
import Listings from "./pages/Listings";
import Reviews from "./components/Reviews";
import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Listings /> },
      { path: "/reviews", element: <Reviews /> },
      { path: "/maisons", element: <Maisons /> },
      { path: "/villas", element: <Villas /> },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
