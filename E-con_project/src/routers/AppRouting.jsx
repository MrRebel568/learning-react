import { Route, Routes } from "react-router";
import About from "../pages/About";
import Home from "../pages/Home";

const AppRouting = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};

export default AppRouting;
