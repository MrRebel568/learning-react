import React, { useState } from "react";

const BruteForce = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="flex flex-col gap-5 w-68">
      <input
        onChange={(e) => setName(e.target.value)}
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => setEmail(e.target.value)}
        className="border-2"
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        className="border-2"
        type="text"
        placeholder="Password"
      />

      <h1>This is name - {name}</h1>
      <h1>This is email - {email}</h1>
      <h1>This is password - {password}</h1>
    </div>
  );
};

export default BruteForce;
