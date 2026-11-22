import React, { useContext } from "react";
import { User, Mail, Lock } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";

const RegisterPage = () => {
  let navigate = useNavigate();
  let { setRegisteredUser, registeredUser, setLoggedInUser } =
    useContext(Auth);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode:"onChange"
  });

  const formSubmit = (data) => {
    let registerUser = [...registeredUser, data];
    setRegisteredUser(registerUser);
    setLoggedInUser(registerUser);
    localStorage.setItem("registered_users", JSON.stringify(registerUser));
    localStorage.setItem("logged_user", JSON.stringify(registerUser));
    reset();
    navigate("/main");
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">Register to get started</p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Full Name
            </label>
            <div className="relative">
              <User
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={19}
              />
              <input
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^\S.*$/,
                    message: "Blank spaces is not allowed",
                  },
                })}
                type="text"
                placeholder="Enter your name"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
              />
            </div>
            {errors.name && (
              <p className="text-red-600 text-xs">{errors.name.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={19}
              />
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                    message: "Please enter valid email",
                  },
                })}
                type="email"
                placeholder="Enter your email"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
              />
            </div>
            {errors.email && (
              <p className="text-red-600 text-xs">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                size={19}
              />
              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 character is required",
                  },
                })}
                type="password"
                placeholder="Create a password"
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-gray-200 transition"
              />
            </div>
            {errors.password && (
              <p className="text-red-600 text-xs">{errors.password.message}</p>
            )}
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200"
          >
            Create Account
          </button>
        </form>

        {/* Login Link */}

        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-black font-semibold cursor-pointer"
          >
            Login here
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
