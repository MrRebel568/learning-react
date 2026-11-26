import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { Auth } from "../context/AuthContext";
import { useForm } from "react-hook-form";
import { ShieldExclamationPoint } from "lucide-react";

const LoginPage = () => {
  const navigate = useNavigate();
  let { registeredUsers, setLoggedInUser, isLogginError, setIsLogginError } =
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
    // const registerUser =
    //   JSON.parse(localStorage.getItem("registered_user")) || null;
    const isLoggedUser = registeredUsers.find((user) => {
      return user.email === data.email && user.password === data.password;
    });

    if (isLoggedUser) {
      setIsLogginError("");
      setLoggedInUser(isLoggedUser);
      localStorage.setItem("logged_users", JSON.stringify(isLoggedUser));
      navigate("/main");
    } else {
    //   setLoggedInUser(null);
      setIsLogginError("Invalid email and password");
    }

    reset();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-500 mb-8">Login to your account</p>

        <form onSubmit={handleSubmit(formSubmit)} className="space-y-5">
          {isLogginError && (
            <div
              role="alert"
              className="flex text-red-800 items-start gap-3 rounded-lg border  border-red-200 border-l-4 border-l-red-500 bg-red-50 px-4 py-3"
            >
              <ShieldExclamationPoint size={18} />
              <div>
                <p className="text-sm font-semibold text-red-800">
                  Login failed
                </p>
                <p className="text-sm text-red-700">{isLogginError}</p>
              </div>
            </div>
          )}
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
            Login
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/register")}
            className="text-blue-600 font-medium hover:underline"
          >
            Register here
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
