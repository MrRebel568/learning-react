import React, { useContext } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/AuthContext";

const LoginPage = () => {
  let navigate = useNavigate();
  let { registeredUser, setLoggedInUser, isLogginError, setIsLogginError } =
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
    const registerUser =
      JSON.parse(localStorage.getItem("registered_users")) || [];
    const isLoggedUser = registerUser.find((user) => {
      return user.email === data.email && user.password === data.password;
    });

    if (isLoggedUser) {
      setIsLogginError("");
      setLoggedInUser(isLoggedUser);
      localStorage.setItem("logged_user", JSON.stringify(isLoggedUser));
      navigate("/main");
      reset();
    } else {
      setLoggedInUser(null);
      localStorage.removeItem("logged_user");
      setIsLogginError("Invalid email and password");
      reset();
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">
            Login to your account to continue
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {isLogginError && (
            <p className="text-red-500 text-sm text-center bg-red-50 py-2 rounded-lg">
              {isLogginError}
            </p>
          )}
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

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-sm font-medium text-gray-700 hover:text-black"
            >
              Forgot Password?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:bg-gray-800 transition duration-200"
          >
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-black font-semibold cursor-pointer"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
