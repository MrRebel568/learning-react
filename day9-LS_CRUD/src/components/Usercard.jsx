import React from "react";

const Usercard = ({ user, setUpdatedData, setToggle, deleteUser, }) => {
  return (
    <div className="p-4 border border-white bg-black rounded text-white flex flex-col gap-2">
      <div className="h-60 w-50">
        <img
          className="object-cover h-full w-full rounded-xl"
          src={user.image}
          alt=""
        />
      </div>
      <div className="flex flex-col gap-1">
        <h1>{user.name}</h1>
        <p className="text-sm">{user.email}</p>
        <p className="text-sm">{user.pnumber}</p>
      </div>
      <div className="flex w-full gap-4 justify-between">
        <button
          onClick={() => {
            setUpdatedData(user);
            setToggle((prev) => !prev);
          }}
          className="bg-yellow-600 text-shite py-2 px-3 rounded"
        >
          Update
        </button>
        <button
          onClick={() => deleteUser(user.id)}
          className="bg-red-600 text-shite py-2 px-3 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default Usercard;
