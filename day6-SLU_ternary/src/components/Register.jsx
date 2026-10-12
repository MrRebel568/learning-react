import React, { useState } from "react";

const Register = ({ setToggle, setUsers }) => {
  // Form ke saare inputs ka data ek hi object me store kar rahe hain.
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    image: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    // [name] dynamic key hai: name input me name, email input me email update hoga.
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    // Page reload rokta hai, isliye React app ka data reset nahi hota.
    e.preventDefault();
    // Previous users ko spread karke naya user end me add karte hain.
    setUsers((prev) => [...prev, formData]);
    // Submit ke baad inputs ko empty kar dete hain.
    setFormData({
      name: "",
      email: "",
      password: "",
      image: "",
    });
  };

  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-xl bg-white p-6 shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">Register</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          // value + onChange ke saath ye controlled input ban jata hai.
          required
          value={formData.name}
          name="name"
          onChange={handleChange}
          className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
          type="text"
          placeholder="Name"
        />
        <input
          required
          value={formData.email}
          name="email"
          onChange={handleChange}
          className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
          type="text"
          placeholder="Email"
        />
        <input
          required
          value={formData.password}
          name="password"
          onChange={handleChange}
          className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
          type="password"
          placeholder="Password"
        />
        <input
          required
          value={formData.image}
          name="image"
          onChange={handleChange}
          className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
          type="url"
          placeholder="Image URL"
        />
        <button className="rounded bg-blue-600 p-2 font-medium text-white transition hover:bg-blue-700">
          Register
        </button>
      </form>
      <p>
        Already have an Account?{" "}
        <span
          onClick={() => {
            // Previous toggle ko ulta karke Register/Login screen switch hoti hai.
            setToggle((prev) => !prev);
          }}
          className="cursor-pointer text-blue-600 hover:underline"
        >
          Login here
        </span>
      </p>
    </div>
  );
};

export default Register;
