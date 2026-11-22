import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import AuthProtected from "./AuthProtected";
import HomePage from "../pages/HomePage";
import UserPage from "../pages/UserPage";
import ProductsPage from "../pages/ProductsPage";
import CartPage from "../pages/CartPage";

const AppRoutes = () => {
  let router = createBrowserRouter([
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
              element: <UserPage />,
            },
            {
              path: "/main/products",
              element: <ProductsPage />,
            },
            {
              path: "/main/cart",
              element: <CartPage />,
            },
          ],
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default AppRoutes;
