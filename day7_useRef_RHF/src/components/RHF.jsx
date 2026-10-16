// RHF - React Hook Form

import React, { useState } from "react";

import { useForm } from "react-hook-form";

const RHF = () => {
  const [product, setProduct] = useState([]);
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);
    setProduct((currentData) => [
      console.log(...currentData),
      { ...data, price: Number(data.price) },
    ]);
    reset();
  };

  return (
    <div className="w-80 h-screen">
      <form
        onSubmit={handleSubmit(formSubmit)}
        className="flex flex-col gap-4 p-6 rounded bg-white "
      >
        <input
          {...register("productName")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          {...register("price")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product Price"
        />
        <span>Select category:</span>
        <select
          {...register("category")}
          className="p-2 border border-gray-400 rounded"
        >
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          {...register("image")}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="image"
        />
        <button className="p-2 bg-blue-600 text-white rounded uppercase font-bold">
          create
        </button>
      </form>
      <pre className="p-6">{JSON.stringify(product,null,2)}</pre>
    </div>
  );
};

export default RHF;
