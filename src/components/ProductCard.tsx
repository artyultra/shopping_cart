import { useCart } from "@/context/cart";
import { Product } from "@/types/Product";
import Image from "next/image";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addToCart } = useCart();

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    } else if (e.target.value === "") {
      setQuantity(1);
    }
  };

  const handleAddToCart = (product: Product, quantity: number) => {
    addToCart(product, quantity);
    isAdded ? setIsAdded(false) : setIsAdded(true);
  };

  return (
    <div className="bg-surface0 rounded border border-surface1 overflow-hidden flex flex-col h-full hover:border-surface2 transition-colors">
      <div className="relative h-48 bg-mantle p-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-4 flex flex-col grow">
        <h3 className="font-semibold text-text mb-2 line-clamp-2 text-sm">
          {product.title}
        </h3>
        <p className="text-subtext0 text-xs mb-3 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center gap-2 mb-3 text-xs">
          <span className="text-yellow">★</span>
          <span className="text-subtext1">{product.rating.rate}</span>
          <span className="text-overlay0">({product.rating.count})</span>
        </div>
        <div className="mt-auto">
          <p className="text-xl font-bold text-blue mb-3">
            ${product.price.toFixed(2)}
          </p>
          <div className="flex items-center gap-2 mb-2">
            <button
              onClick={handleDecrement}
              className="bg-surface1 hover:bg-surface2 text-text px-2 py-1 rounded text-sm transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              className="w-5 text-center bg-mantle text-text text-sm [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              min="1"
              aria-label="Quantity"
            />
            <button
              onClick={handleIncrement}
              className="bg-surface1 hover:bg-surface2 text-text px-2 py-1 rounded text-sm transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>

          <button
            onClick={() => handleAddToCart(product, quantity)}
            className={`w-full py-2 rounded text-sm font-medium transition-colors ${
              isAdded
                ? "bg-green text-crust"
                : "bg-blue hover:bg-mauve text-crust"
            }`}
          >
            {isAdded ? "Added" : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
