import React, { useState } from "react";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <h1>Count is {count}</h1>

      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setToggle((prev) => !prev)}>
        Change toggle state
      </button>

      {/* <ContextProvider>
        <Home />
        <About />
      </ContextProvider> */}

      {toggle ? <Contact /> : <About />}
    </div>
  );
};

export default App;
