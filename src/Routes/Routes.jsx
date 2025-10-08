import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import AppsDetails from "../Pages/AppsDetails";
import Install from "../Pages/Install";

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    hydrateFallbackElement: <p>Loading...</p>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/apps",
        element: <Apps />,
      },
      {
        path: "/install",
        element: <Install />,
      },
      {
        path: "/app/:id",
        element: <AppsDetails />,
      },
    ],
  },
]);

export default router;
