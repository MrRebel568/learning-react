import React from "react";

const ProductsCard = ({ products,del }) => {
//   console.log(products);

  return (
    <div className="p-4 border-2 flex flex-col gap-4 rounded">
      <div className="w-60">
        <img src={products.image} alt="" />
      </div>
      <div>
        <h2 className="font-semibold text-2xl">{products.title.substring(0,20)}</h2>
        <p className="text-s">{products.category}</p>
        <p className="text-green-500">{products.price}</p>
      </div>
      <button onClick={()=>{del(products.id)}} className="p-2 bg-red-500">Delete</button>
    </div>
  );
};

export default ProductsCard;
