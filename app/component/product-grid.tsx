"use client";

import Image from "next/image";
import { useState } from "react";

interface IProduct {
  id: number;
  product_name: string;
  image: string;
  price: number;
  stock_count: number;
}

const ProductCard = ({
  image,
  title,
  price,
}: {
  image: string;
  title: string;
  price: string;
}) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
    <Image
      src={image}
      alt={title}
      width={300}
      height={300}
      className="w-full object-cover aspect-square"
    />
    <div className="p-4">
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{price}</p>
    </div>
  </div>
);

const ProductGrid = ({ products }: { products: IProduct[] }) => {
  //show only 6 products
  //load later when user scrolls to bottom
  const [showAllProducts, setShowAllProducts] = useState(false);

  const productsToShow = showAllProducts ? products : products.slice(0, 6);

  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {productsToShow.map((product) => (
          <ProductCard
            key={product.id}
            image={product.image}
            title={product.product_name}
            price={`£${product.price}`}
          />
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAllProducts(true)}
          className="border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white"
        >
          Load More
        </button>
      </div>
    </section>
  );
};

export default ProductGrid;
