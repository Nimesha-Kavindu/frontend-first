import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <div className="p-6">
      <div className="flex flex-wrap">
        {products.map((product, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 lg:w-1/4 p-2"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}
