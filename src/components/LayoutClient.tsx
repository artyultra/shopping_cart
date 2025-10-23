"use client";

import Navbar from "./Navbar";
import { CartProvider } from "@/context/cart";

interface LayoutClientProps {
  children: React.ReactNode;
}

const LayoutClient = ({ children }: LayoutClientProps) => {
  console.log("mounted");
  return (
    <CartProvider>
      <div className="min-h-screen bg-base">
        <Navbar />
        <main className="container mx-auto">{children}</main>
      </div>
    </CartProvider>
  );
};

export default LayoutClient;
