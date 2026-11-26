import { ShieldExclamationPoint } from "lucide-react";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { data, useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";

const RegisterPage = () => {
  const navigate = useNavigate();

  let { registeredUsers, setRegisteredUsers, loggedInUser, setLoggedInUser } =
    useContext(Auth);

  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    console.log(data);
    let registeredInUser = [...registeredUsers, data];
    setRegisteredUsers(registeredInUser);
    setLoggedInUser(data);
    localStorage.setItem("registered_user", JSON.stringify(registeredInUser));
    localStorage.setItem("logged_users", JSON.stringify(data));
    navigate("/main")
    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Create Account
        </h2>
        <p className="text-center text-gray-500 mb-8">
          Register to get started
        </p>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name
            </label>
            <input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^\S.*$/,
                  message: "Black spaces is not allowed ",
                },
              })}
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.name && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                <ShieldExclamationPoint size={17} />
                {errors.name.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Please enter valid email",
                },
              })}
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.email && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                <ShieldExclamationPoint size={17} />
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 character is required",
                },
              })}
              type="password"
              id="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            {errors.password && (
              <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
                <ShieldExclamationPoint size={17} />
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg transition duration-200"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-blue-600 font-medium hover:underline"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
