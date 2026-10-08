const ProductCard = ({ product, onAddToCart }) => {
  const { id, title, price, category, image, stock } = product;
  const isInStock = stock > 0;

  return (
    <article className="overflow-hidden rounded-lg border border-gray-200">
      <img src={image} alt={title} className="h-40 w-full object-cover" />

      <div className="p-3">
        <h3 className="font-semibold">{title}</h3>
        <p className="text-sm text-gray-500">{category}</p>
        <p className="mt-1 font-bold">₹{price.toLocaleString("en-IN")}</p>

        <p
          className={
            isInStock ? "text-sm text-green-600" : "text-sm text-red-600"
          }
        >
          {isInStock ? `In Stock (${stock})` : "Out of Stock"}
        </p>

        <button
          type="button"
          onClick={() => onAddToCart(id)}
          disabled={!isInStock}
          className="mt-3 w-full rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-300"
        >
          {isInStock ? "Add to Cart" : "Unavailable"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;