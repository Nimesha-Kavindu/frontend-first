export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 w-full sm:w-1/2 lg:w-1/4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <h2 className="text-lg font-semibold mb-1">{product.name}</h2>
      <p className="text-gray-600 text-sm mb-2">{product.description}</p>
      <span className="text-blue-600 font-bold text-md block mb-4">
        ${product.price.toFixed(2)}
      </span>
      <button className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-2 px-4 rounded mb-2">
        Add to Cart
      </button>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded">
        Buy Now
      </button>
    </div>
  );
}
