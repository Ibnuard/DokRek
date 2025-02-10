import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Loader from "../components/Loader";
import React, { useState } from "react";

// Pages
import Login from "../pages/Login";
import Home from "../pages/Home";
import AuthHandler from "./AuthHandler";
import Create from "../pages/Create";
import useUserStore from "../store/useUser";
import { IUser } from "../global";

const Routes = () => {
  const [token, setToken] = useState<string | undefined>(undefined);
  const { saveUser, removeUser } = useUserStore();

  React.useEffect(() => {
    const userData = localStorage.getItem("USER_SESSION");

    if (userData) {
      const parsedUser: IUser = JSON.parse(userData);

      setToken(parsedUser.id);
      saveUser(parsedUser);
    } else {
      removeUser();
      setToken("");
    }
  }, []);

  if (token == undefined) {
    return <Loader />;
  }

  // routes for authenticated user
  const authRoutes = [
    {
      path: "/",
      element: <AuthHandler />,
      children: [
        {
          path: "/",
          element: (
            <React.Suspense fallback={<Loader />}>
              <Home />
            </React.Suspense>
          ),
        },
        {
          path: "/create",
          element: (
            <React.Suspense fallback={<Loader />}>
              <Create />
            </React.Suspense>
          ),
        },
        {
          path: "*",
          element: <Navigate to="/" replace />,
        },
      ],
    },
  ];

  // routes for unauthenticated user
  const unauthRoutes = [
    {
      path: "/login",
      element: (
        <React.Suspense fallback={<Loader />}>
          <Login />
        </React.Suspense>
      ),
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ];

  const ROUTE_PATH = [...(!token ? unauthRoutes : []), ...authRoutes];
  const routes = createBrowserRouter(ROUTE_PATH);

  return <RouterProvider router={routes} />;
};

export default Routes;
