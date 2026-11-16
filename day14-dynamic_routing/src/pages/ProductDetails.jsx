import axios from "axios";
import React, { useContext, useEffect } from "react";
import { useParams } from "react-router";
import { MyShop } from "../context/MyContext";
import {
  ArrowLeft,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingCart,
  Star,
  Truck,
} from "lucide-react";

const ProductDetails = () => {
  let { singleProductData, setSingleProductData } = useContext(MyShop);
  let { id } = useParams();
  useEffect(() => {
    const getSingleProductData = async () => {
      try {
        let res = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setSingleProductData(res.data);
      } catch (error) {
        console.log("Details api error", error);
      }
    };
    getSingleProductData();
    console.log(singleProductData);
  }, [setSingleProductData]);
  return (
    <div className="min-h-screen bg-gray-50 px-5 py-10">
      <div className="mx-auto">
        {/* Back Button */}

        <div className="bg-white rounded-2xl border border-gray-200 p-6 md:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {/* Product Image */}
            <div className="bg-gray-50 rounded-xl flex items-center justify-center p-8 min-h-[400px]">
              <img
                src={singleProductData.image}
                alt={singleProductData.title}
                className="w-full h-[350px] object-contain"
              />
            </div>

            {/* Product Information */}
            <div className="flex flex-col">
              {/* Category */}
              <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">
                {singleProductData.category}
              </p>

              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3 leading-snug">
                {singleProductData.title}
              </h1>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-4">
                <div className="flex items-center gap-1 text-yellow-500">
                  <Star size={18} fill="currentColor" />
                  <span className="font-semibold text-gray-800">
                    {singleProductData.rating?.rate}
                  </span>
                </div>

                <span className="text-sm text-gray-400">
                  ({singleProductData.rating?.count} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="mt-7">
                <h2 className="text-3xl font-bold text-gray-900">
                  ${singleProductData.price}
                </h2>
                <p className="text-sm text-green-600 mt-1">
                  Inclusive of all taxes
                </p>
              </div>

              {/* Description */}
              <div className="mt-7">
                <h3 className="text-base font-semibold text-gray-900 mb-2">
                  Product Description
                </h3>

                <p className="text-sm text-gray-500 leading-7">
                  {singleProductData.description}
                </p>
              </div>

              {/* Stock Status */}
              <div className="mt-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                <span className="text-sm text-green-600 font-medium">
                  Available for purchase
                </span>
              </div>

              {/* Quantity and Cart */}
              <div className="flex flex-col sm:flex-row gap-4 mt-7">
                <div className="flex w-fit p-2 rounded-xl border-2 border-gray-200 items-center justify-center gap-5">
                  <button className="text-gray-600 hover:text-indigo-600">
                    <Minus size={17} />
                  </button>

                  <span className="min-w-6 text-center font-semibold text-gray-900">
                    1
                  </span>

                  <button className="text-gray-600 hover:text-indigo-600">
                    <Plus size={17} />
                  </button>
                </div>

                <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-5 rounded-xl font-semibold text-sm transition">
                  <ShoppingCart size={19} />
                  Add to Cart
                </button>
              </div>

              {/* Extra Information */}
              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 mt-8 pt-6">
                <div className="flex items-center gap-2 text-gray-500">
                  <Truck size={20} />
                  <span className="text-xs">Fast Delivery</span>
                </div>

                <div className="flex items-center gap-2 text-gray-500">
                  <ShieldCheck size={20} />
                  <span className="text-xs">Secure Shopping</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
