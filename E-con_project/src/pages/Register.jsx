import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyShop } from "../context/MyContext";

const Register = () => {
  let { setToggleLoginPages, setRegisterUserIn, registerUserIn } =
    useContext(MyShop);
  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    let registerUserData = [...registerUserIn, data];
    setRegisterUserIn(registerUserData);
    reset();
    localStorage.setItem("register_user", JSON.stringify(registerUserData));
    setToggleLoginPages((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
        {/* Heading */}
        <div className="mb-7 text-center">
          <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
          <p className="text-sm text-gray-500 mt-2">
            Sign up to get started with us.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit(formSubmit)} className="space-y-4">
          <input
            {...register("name", {
              required: "Name is required",
              pattern: {
                value: /^\S.*$/,
                message: "Blank spaces is not allowed",
              },
            })}
            type="text"
            placeholder="Full Name"
            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
          {errors.name && (
            <p className="text-red-500 text-xs">{errors.name.message}</p>
          )}

          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Please enter valid email",
              },
            })}
            type="email"
            placeholder="Email Address"
            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
          {errors.email && (
            <p className="text-red-500 text-xs">{errors.email.message}</p>
          )}

          <input
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 4,
                message: "Password must be at least 6 character",
              },
            })}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />

          {errors.password && (
            <p className="text-red-500 text-xs">{errors.password.message}</p>
          )}

          <input
            {...register("confirmpassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === getValues("password") || "Password do not match",
            })}
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-3 text-sm border border-gray-200 rounded-lg outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 transition"
          />
          {errors.confirmpassword && (
            <p className="text-red-500 text-xs">
              {errors.confirmpassword.message}
            </p>
          )}

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg text-sm font-semibold transition">
            Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?
          <span
            onClick={() => setToggleLoginPages((prev) => !prev)}
            className="text-indigo-600 font-semibold ml-1 cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Register;
