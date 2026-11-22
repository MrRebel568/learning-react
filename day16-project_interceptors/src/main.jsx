import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AppRoutes from "./router/AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { MainContextProvider } from "./context/MainContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <MainContextProvider>
      <AppRoutes />
    </MainContextProvider>
  </AuthProvider>,
);
