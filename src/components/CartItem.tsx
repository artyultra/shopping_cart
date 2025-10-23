"use client";

import { useCart } from "@/context/cart";
import { CartItem } from "@/types/Product";
import Image from "next/image";

interface CartItemProps {
  product: CartItem;
}

const CartItemCard = ({ product }: CartItemProps) => {
  const { updateQuantity, removeFromCart } = useCart();
  return (
    <div
      key={product.id}
      className="bg-surface0 border border-surface1 rounded p-4 flex flex-col md:flex-row gap-4"
    >
      <div className="relative w-full md:w-24 h-24 bg-mantle rounded shrink-0">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain p-2"
          sizes="96px"
        />
      </div>
      <div className="grow">
        <h3 className="font-semibold text-text mb-2">{product.title}</h3>
        <p className="text-subtext0 text-sm mb-2">
          ${product.price.toFixed(2)} each
        </p>
        <div className="flex items-center gap-4 mt-3">
          <div className="flex items-center gap-2">
            <button
              onClick={() => updateQuantity(product, product.quantity - 1)}
              className="bg-surface1 hover:bg-surface2 text-text px-2 py-1 rounded text-sm transition-colors"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="w-10 text-center font-medium text-text text-sm">
              {product.quantity}
            </span>
            <button
              onClick={() => updateQuantity(product, product.quantity + 1)}
              className="bg-surface1 hover:bg-surface2 text-text px-2 py-1 rounded text-sm transition-colors"
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(product)}
            className="text-red hover:text-maroon font-medium text-sm transition-colors"
          >
            Remove
          </button>
        </div>
      </div>
      <div className="text-right md:text-left">
        <p className="font-bold text-blue">
          ${(product.price * product.quantity).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default CartItemCard;
