import React from "react";
import Navbar from "./components/Navbar";
import Usercard from "./components/Usercard";
import From from "./components/From";
import { useState } from "react";

const App = () => {
  const [toggle, setToggle] = useState(true);
  const [users, setUsers] = useState(() => {
    return JSON.parse(localStorage.getItem("users")) || [];
  });

  const [updatedData, setUpdatedData] = useState(null);

  const deleteUser = (id) => {
    let filterUser = users.filter((val, index) => {
      return index !== id;
    });
    setUsers(filterUser);
    localStorage.setItem("users", JSON.stringify(filterUser));
  };

  return (
    <div className="p-3 h-screen bg-gray-900 flex flex-col gap-4">
      <Navbar setToggle={setToggle} />

      {toggle ? (
        <div className="flex flex-wrap gap-4">
          {users.map((elem) => {
            return (
              <Usercard
                key={elem.id}
                deleteUser={deleteUser}
                user={elem}
                setToggle={setToggle}
                setUpdatedData={setUpdatedData}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex justify-center h-[70%] items-center">
          <From
            updatedData={updatedData}
            users={users}
            setUsers={setUsers}
            setToggle={setToggle}
          />
        </div>
      )}
    </div>
  );
};

export default App;
