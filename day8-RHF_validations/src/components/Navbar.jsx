import React from "react";

const Navbar = ({ setToggle }) => {
  return (
    <div className="p-4 rounded-xl flex bg-black text-white items-center justify-between">
      <img
        width={35}
        className="rounded-full"
        src="https://images.unsplash.com/photo-1745517105098-8a00ded18bf6?q=80&w=361&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        alt=""
      />
      <div className="flex gap-6 font-semibold">
        <p>Home</p>
        <p>About</p>
        <p>Contect</p>
      </div>
      <button
        onClick={() => setToggle((prev) => !prev)}
        className="p-3 font-semibold bg-blue-600 text-white cursor-pointer rounded-xl"
      >
        Create user
      </button>
    </div>
  );
};

export default Navbar;
