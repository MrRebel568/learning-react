import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// const root = document.querySelector("#root");

// createRoot(root).render(<App />);

// let newElem = createElement("h1", null, "Im here");

// createRoot(root).render(newElem);

createRoot(document.getElementById("root")).render(<App />);
