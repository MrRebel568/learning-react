import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import PublicProtected from "./PublicProtected";
import TodoListPage from "../pages/TodoListPage";
import DashboardPage from "../pages/DashboardPage";
import WeatherPage from "../pages/WeatherPage";
import PomodoroPage from "../pages/PomodoroPage";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "/",
              element: <LoginPage />,
            },
            {
              path: "/register",
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
              element: <DashboardPage />,
            },
            {
              path: "/main/todolist",
              element: <TodoListPage />,
            },
            {
              path: "/main/pomodoro",
              element: <PomodoroPage />,
            },
            {
              path: "/main/weather",
              element: <WeatherPage />,
            },
          ],
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRoutes;
