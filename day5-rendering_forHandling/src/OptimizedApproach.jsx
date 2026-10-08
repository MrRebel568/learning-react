import React, { useState } from "react";

const OptimizedApproach = () => {
  const [formData, setFormData] = useState({});

  console.log("formData -> ", formData);

  const handleChange = (e) => {
    let [name, value] = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="flex flex-col gap-5 w-68">
      <input
        onChange={handleChange}
        name="name"
        className="border-2"
        type="text"
        placeholder="Name"
      />
      <input
        onChange={handleChange}
        name="email"
        className="border-2"
        type="text"
        placeholder="Email"
      />
      <input
        onChange={handleChange}
        name="password"
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

export default OptimizedApproach;
