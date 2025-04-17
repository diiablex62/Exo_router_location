import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import Villas from "./components/Villas";
import Maisons from "./components/Maisons";
import Login from "./components/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <App></App>,
    children: [
      {
        path: "/villas",
        element: <Villas></Villas>,
      },
      {
        path: "/maisons",
        element: <Maisons></Maisons>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },
]);
