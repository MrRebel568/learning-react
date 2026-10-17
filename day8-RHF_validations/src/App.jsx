import React from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import From from "./components/From";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  return (
    <div className="p-3 h-screen bg-gray-900 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex gap-4">
          {users.map((elem) => {
            return <Usercard user={elem} setToggle={setToggle} />;
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <From setUsers={setUsers} setToggle={setToggle} />
        </div>
      )}
    </div>
  );
};

export default App;
