import React from "react";
import { useRef } from "react";

const Form = () => {
  const formRef = useRef({});

  console.log(formRef);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formRef.current.productName.value)
    console.log(formRef.current.price.value)
    console.log(formRef.current.category.value)
    console.log(formRef.current.image.value)
  };

  return (
    <div className="w-80 h-screen">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-6 rounded bg-white "
      >
        <input
          ref={(e) => (formRef.current.productName = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product Name"
        />
        <input
          ref={(e) => (formRef.current.price = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Product Price"
        />
        <span>Select category:</span>
        <select
          ref={(e) => (formRef.current.category = e)}
          className="p-2 border border-gray-400 rounded"
        >
          <option value="MENS">Mens</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
        <input
          ref={(e) => (formRef.current.image = e)}
          className="p-2 border border-gray-400 rounded"
          type="text"
          placeholder="Image"
        />
        <button className="p-2 bg-blue-600 text-white rounded uppercase font-bold">
          create
        </button>
      </form>
    </div>
  );
};

export default Form;
