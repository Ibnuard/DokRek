import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Loader from "../components/Loader";
import React from "react";

// Pages
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthHandler from "./AuthHandler";

const Routes = () => {
  // define routes and path
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AuthHandler />,
      children: [
        {
          path: "/login",
          element: (
            <React.Suspense fallback={<Loader />}>
              <Login />
            </React.Suspense>
          ),
        },
        {
          path: "/",
          element: (
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          ),
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Routes;
