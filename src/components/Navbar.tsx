"use client";
import { useCart } from "@/context/cart";
import Link from "next/link";

const Navbar = () => {
  const { getTotalItems } = useCart();
  return (
    <>
      <nav className="flex items-center py-5 px-10">
        <h1 className="mr-auto">ShopHub</h1>
        <ul className="flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/shop">Shop</Link>
          </li>
          <li>
            <Link href="/cart">
              Cart{" "}
              <span className="text-text text-sm h-3 align-top ">
                {getTotalItems()}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-t border-gray-50 mx-6"></div>
    </>
  );
};

export default Navbar;
