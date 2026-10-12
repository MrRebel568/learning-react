import React, { useState } from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Usercard from "./components/Usercard";

const App = () => {
  // useState se value store hoti hai; value change hone par component re-render hota hai.
  // Example: toggle false = Register screen, toggle true = Login screen.
  const [toggle, setToggle] = useState(false);
  const [users, setUsers] = useState([]);

  // Child Usercard se delete request aati hai, phir matching index wala user remove hota hai.
  const handleDelete = (indexToDelete) => {
    setUsers((prevUsers) =>
      prevUsers.filter((_, index) => index !== indexToDelete)
    );
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6">
      {toggle ? (
        <div className="flex min-h-[calc(100vh-3rem)] items-center justify-center">
          <Login setToggle={setToggle} />
        </div>
      ) : (
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-6">
          {/* Props ke through parent ka setUsers function Register ko diya gaya hai. */}
          <Register setUsers={setUsers} setToggle={setToggle} />
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {/* map array ke har user ke liye ek Usercard banata hai. */}
            {users.map((user, index) => (
              <Usercard
                key={`${user.email}-${index}`}
                user={user}
                onDelete={() => handleDelete(index)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
