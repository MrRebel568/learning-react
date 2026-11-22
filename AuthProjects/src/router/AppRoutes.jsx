import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/HomePage";
import UsersPage from "../pages/UsersPage";
import ProductsPage from "../pages/ProductsPage";
import CartPages from "../pages/CartPages";
import AuthProtected from "./AuthProtected";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <AuthProtected />,
      children: [
        {
          path: "/",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <MainLayout />,
          children: [
            {
              path: "/main",
              element: <HomePage />,
            },
            {
              path: "/main/user",
              element: <UsersPage />,
            },
            {
              path: "/main/products",
              element: <ProductsPage />,
            },
            {
              path: "/main/cart",
              element: <CartPages />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
