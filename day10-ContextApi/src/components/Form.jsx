import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { MyShop } from "../context/MyWebsite";

const Form = () => {
  let { setIsLoggedIn, setUsers, users } = useContext(MyShop);
  let {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    setIsLoggedIn((prev) => !prev);
    let arr = [...users, { ...data }];
    console.log(arr);
    setUsers(arr);
  };

  return (
    <div className="test-white flex flex-col gap-3 justify-center items-center">
      <h1 className="tsxt-xl font-bold">Register</h1>
      <form
        onSubmit={handleSubmit(formSubmit)}
        className=" w-90 flex flex-col bg-black gap-3 p-3 rounded border border-white"
      >
        <input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^\S.*$/,
              message: "Blank spaces is not allowed",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Please enter valid email",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Email"
        />
        <input
          {...register("password", {
            required: "Password is required",
            pattern: {
              message: "Please enter password",
            },
          })}
          className="p-2 rounded outline-0 border border-white"
          type="text"
          placeholder="Password"
        />
        <button
          //   onClick={() => setIsLoggedIn((prev) => !prev)}
          className="text-white bg-blue-600 p-2 rounded-xl cursor-pointer"
        >
          Create Account
        </button>
      </form>
    </div>
  );
};

export default Form;
