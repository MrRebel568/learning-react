import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { MyShopProvider } from "./context/MyContext.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <MyShopProvider>
      <App />
    </MyShopProvider>
  </BrowserRouter>,
);
