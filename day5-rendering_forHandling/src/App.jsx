import React from "react";
import BruteForce from "./BruteForce";
import BetterApproach from "./BetterApproach";
import OptimizedApproach from "./OptimizedApproach";

const App = () => {
  return (
    <div className="p-4">
      {/* <BruteForce /> */}
      {/* <BetterApproach /> */}
      <OptimizedApproach />
    </div>
  );
};

export default App;
