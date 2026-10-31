import { Route, Routes } from "react-router";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="h-screen p-2">
      <nav className="flex items-cneter justify-between mb-4">
        <h1>Logo</h1>
        <div className="flex items-cneter justify-between gap-10">
          <p>Home</p>
          <p>About</p>
          <p>Contact</p>
        </div>
        <button>Login</button>
      </nav>
      <Routes>
        <Route />
      </Routes>
    </div>
  );
};

export default App;
