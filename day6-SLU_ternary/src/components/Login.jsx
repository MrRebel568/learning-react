import React from "react";

const Login = ({ setToggle }) => {
  // setToggle parent App se prop ke roop me mila hai.
  return (
    <div className="flex w-full max-w-sm flex-col gap-4 rounded-xl bg-white p-6 shadow-md">
      <h1 className="text-2xl font-semibold text-gray-800">Login</h1>
      <form className="flex flex-col gap-4">
        <input
          className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
          type="text"
          placeholder="Email"
        />
        <input
          className="rounded border border-gray-300 p-2 outline-none focus:border-blue-500"
          type="text"
          placeholder="Password"
        />
        <button className="rounded bg-blue-600 p-2 font-medium text-white transition hover:bg-blue-700">
          Login
        </button>
      </form>
      <p>
        Didn't have an Account?{" "}
        <span
          onClick={() => {
            // Login screen se Register screen par wapas jaate hain.
            setToggle(prev => !prev);
          }}
          className="cursor-pointer text-blue-600 hover:underline"
        >
          Register here
        </span>
      </p>
    </div>
  );
};

export default Login;
