"use client";

import ProductCard from "@/components/ProductCard";
import { Product } from "@/types/Product";
import { useEffect, useState } from "react";

const Shop = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<null | string>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error("Failed to fetch products");
      }
      const data = await res.json();
      setProducts(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);
  if (error) {
    return <p>Error: {error}</p>;
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div className="m-20 grid grid-cols-1 md:grid-cols-5 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
