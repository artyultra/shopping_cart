"use client";
import { useState, cloneElement, ReactElement } from "react";
import NavBar from "../NavBar/NavBar";
import { CartItem, Product } from "@/types/Product";

interface LayoutClientProps {
  children: React.ReactNode;
}

const LayoutClient = ({ children }: LayoutClientProps) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, quantity: number) => {
    if (quantity <= 0) return;

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const clearCart = () => {
    setCart([]);
  };

  const childrenWithProps = cloneElement(children as ReactElement, {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    getTotalItems,
    getTotalPrice,
    clearCart,
  });

  return (
    <div className="min-h-screen bg-base">
      <NavBar getTotalItems={getTotalItems} />
      <main className="container mx-auto">{childrenWithProps}</main>
    </div>
  );
};

export default LayoutClient;
