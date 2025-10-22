"use client";

import Link from "next/link";

interface NavBarProps {
  getTotalItems: () => number;
}

const NavBar = ({ getTotalItems }: NavBarProps) => {
  const totalItems = getTotalItems();

  return (
    <nav className="bg-mantle border-b border-surface0">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-14">
          <Link
            href="/"
            className="text-lg font-semibold text-blue hover:text-mauve transition-colors"
          >
            ShopHub
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className="text-sm text-subtext1 hover:text-text transition-colors"
            >
              Home
            </Link>
            <Link
              href="/shop"
              className="text-sm text-subtext1 hover:text-text transition-colors"
            >
              Shop
            </Link>
            <Link
              href="/cart"
              className="relative text-sm text-subtext1 hover:text-text transition-colors"
            >
              Cart
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-4 bg-red text-crust text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
