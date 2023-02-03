import { createBrowserRouter } from "react-router-dom";
import Children from "../components/pages/Children";
import Dashboard from "../components/pages/Dashboard";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "children",
        element: <Children />,
      },
      {
        path: "abc",
        element: <Home />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
