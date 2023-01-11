import Dashboard from "../components/pages/Dashboard";
import ErrorPage from "../components/pages/ErrorPage";

import Home from "../components/pages/Home";
import Login from "../components/pages/Login";

const router = [
  {
    element: <Home />,
    path: "/",
    children: [
      {
        element: <Home />,
        path: "test",
      },
      {
        element: <ErrorPage />,
        path: "*",
      },
    ],
  },
  {
    element: <Login />,
    path: "/login",
  },
  {
    element: <Dashboard />,
    path: "/dashboard",
  },
];

export default router;
