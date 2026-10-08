import React, { useState } from "react";

const BetterApproach = () => {
  const [formData, setFormData] = useState({});

  console.log("formData -> ", formData);
  return (
    <div className="flex flex-col gap-5 w-68">
      <input
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border-2"
        type="text"
        placeholder="Email"
      />
      <input
        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
        className="border-2"
        type="text"
        placeholder="Password"
      />

      <h1>This is name - {formData.name}</h1>
      <h1>This is email - {formData.email}</h1>
      <h1>This is password - {formData.password}</h1>
    </div>
  );
};

export default BetterApproach;
