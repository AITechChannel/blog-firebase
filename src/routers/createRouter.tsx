import { createBrowserRouter } from "react-router-dom";
import Children from "../components/pages/Children";
import Dashboard from "../components/pages/Dashboard";
import Home from "../components/pages/Home";
import Login from "../components/pages/Login";
import MyApp from "../components/pages/MyApp";
import ToDo from "../components/pages/ToDo";

export const router = createBrowserRouter([
  {
    path: "/home",
    element: <Home />,
    children: [
      {
        path: "children",
        element: <Children />
      },
      {
        path: "abc",
        element: <Home />
      }
    ]
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "myapp",
        element: <MyApp />
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/todo",
    element: <ToDo />
  }
]);
