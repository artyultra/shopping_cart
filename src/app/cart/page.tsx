"use client";

import CartItemCard from "@/components/CartItem";
import ProductCard from "@/components/ProductCard";
import { useCart } from "@/context/cart";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const { cart, getTotalItems, getTotalPrice } = useCart();
  if (cart.length <= 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <h1 className="text-3xl font-bold mb-4 text-text">
          Your Cart is Empty
        </h1>
        <p className="text-subtext1 mb-6">Add some products to get started!</p>
        <Link
          href="/shop"
          className="bg-blue hover:bg-mauve text-crust font-medium py-3 px-8 rounded transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="p-6">
        <h1 className="text-3xlnd font-bold mb-6 text-text">Your Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <CartItemCard key={item.id} product={item} />
          ))}
        </div>
      </div>
      <div className="p-6 w-[25%]">
        <div className="lg:col-span-1 mt-6">
          <div className="bg=surface0 border border-surface1 roundeed p-5 sticky top-4">
            <h2 className="tex-xl font-bold mb-4 text-text">Order Summary</h2>
            <div className="space-y-2 mb-4">
              <div className="flex justify-between text-sm tex-subtext1">
                <span>Items:</span>
                <span>{getTotalItems()}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t border-surface1 pt-2 text-text">
                <span>Total:</span>
                <span className="text-blue">${getTotalPrice().toFixed(2)}</span>
              </div>
            </div>
            <button className="w-full bg-blue hober:bg-mauve text-crust font-medium py-3 rounded transition-colors mb-3">
              Proceed to Checkout
            </button>
            <Link
              href="/shop"
              className="block text-center text-sm text-subtext1 hover:text-text"
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
