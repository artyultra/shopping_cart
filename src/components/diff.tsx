"use client";

import Image from "next/image";
import Link from "next/link";
import { CartItem } from "@/types/Product";

interface CartPageProps {
  cart?: CartItem[];
  updateQuantity?: (productId: number, quantity: number) => void;
  removeFromCart?: (productId: number) => void;
  getTotalPrice?: () => number;
}

const Cart: React.FC<CartPageProps> = ({
  cart = [],
  updateQuantity = () => {},
  removeFromCart = () => {},
  getTotalPrice = () => 0,
}) => {
  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity > 0) {
      updateQuantity(productId, newQuantity);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4 text-text">
          Your Cart is Empty
        </h1>
        <p className="text-subtext1 mb-6">Add some products to get started</p>
        <Link
          href="/shop"
          className="bg-blue hover:bg-mauve text-crust font-medium py-3 px-6 rounded transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 text-text">Shopping Cart</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-3">
          {cart.map((item) => (
            <div
              key={item.id}
              className="bg-surface0 border border-surface1 rounded p-4 flex flex-col md:flex-row gap-4"
            >
              <div className="relative w-full md:w-24 h-24 bg-mantle rounded flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-contain p-2"
                  sizes="96px"
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-semibold text-text mb-2">{item.title}</h3>
                <p className="text-subtext0 text-sm mb-2">
                  ${item.price.toFixed(2)} each
                </p>
                <div className="flex items-center gap-4 mt-3">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity - 1)
                      }
                      className="bg-surface1 hover:bg-surface2 text-text px-2 py-1 rounded text-sm transition-colors"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="w-10 text-center font-medium text-text text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        handleQuantityChange(item.id, item.quantity + 1)
                      }
                      className="bg-surface1 hover:bg-surface2 text-text px-2 py-1 rounded text-sm transition-colors"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red hover:text-maroon font-medium text-sm transition-colors"
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="text-right md:text-left">
                <p className="font-bold text-blue">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:col-span-1">
          <div className="bg-surface0 border border-surface1 rounded p-5 sticky top-4">
            <h2 className="text-xl font-bold mb-4 text-text">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm text-subtext1">
                <span>Items:</span>
                <span>
                  {cart.reduce((sum, item) => sum + item.quantity, 0)}
                </span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-surface1 pt-2 text-text">
                <span>Total:</span>
                <span className="text-blue">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-blue hover:bg-mauve text-crust font-medium py-3 rounded transition-colors mb-3">
              Proceed to Checkout
            </button>
            <Link
              href="/shop"
              className="block text-center text-sm text-subtext1 hover:text-text transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
