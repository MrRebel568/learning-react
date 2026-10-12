import React from "react";

const Usercard = ({ user, onDelete }) => {
  // user aur onDelete parent App se props ke roop me aa rahe hain.
  return (
    <div className="flex flex-col gap-4 rounded-xl border border-gray-300 bg-white p-4 shadow-sm">
      <div className="h-48 overflow-hidden rounded">
        <img
          className="h-full w-full object-cover"
          src={user.image}
          alt={user.name}
        />
      </div>
      <div>
        <h1 className="text-lg font-semibold text-gray-800">{user.name}</h1>
        <p className="text-sm text-gray-500">{user.email}</p>
      </div>
      <button
        type="button"
        onClick={onDelete}
        className="rounded border border-red-300 p-2 text-red-600 transition hover:bg-red-50"
      >
        Delete
      </button>
    </div>
  );
};

export default Usercard;
