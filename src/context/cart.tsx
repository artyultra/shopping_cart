"use client";

import { CartItem, Product } from "@/types/Product";
import { createContext, useContext, useState } from "react";

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (product: Product) => void;
  updateQuantity: (product: Product, quantity: number) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    if (quantity <= 0) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + quantity,
              }
            : item,
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (product: Product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };

  const updateQuantity = (product: Product, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(product);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === product.id ? { ...item, quantity } : item,
      ),
    );
  };

  const getTotalItems = () => {
    return cart.reduce((acc, item) => acc + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => acc + item.quantity * item.price, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        getTotalItems,
        getTotalPrice,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
