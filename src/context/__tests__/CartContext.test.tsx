import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "../CartContext";
import { Product } from "@/types/Product";
import { ReactNode } from "react";

const mockProduct: Product = {
  id: 1,
  title: "Test Product",
  price: 29.99,
  description: "Test description",
  category: "electronics",
  image: "https://fakestoreapi.com/img/test.jpg",
  rating: {
    rate: 4.5,
    count: 100,
  },
};

const wrapper = ({ children }: { children: ReactNode }) => (
  <CartProvider>{children}</CartProvider>
);

describe("CartContext", () => {
  it("adds items to cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct, 2);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(2);
    expect(result.current.getTotalItems()).toBe(2);
  });

  it("updates quantity of existing item", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct, 1);
      result.current.addToCart(mockProduct, 2);
    });

    expect(result.current.cart).toHaveLength(1);
    expect(result.current.cart[0].quantity).toBe(3);
  });

  it("removes items from cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct, 2);
      result.current.removeFromCart(mockProduct.id);
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it("updates item quantity", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct, 2);
      result.current.updateQuantity(mockProduct.id, 5);
    });

    expect(result.current.cart[0].quantity).toBe(5);
  });

  it("removes item when quantity updated to 0", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct, 2);
      result.current.updateQuantity(mockProduct.id, 0);
    });

    expect(result.current.cart).toHaveLength(0);
  });

  it("calculates total price correctly", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct, 2);
    });

    expect(result.current.getTotalPrice()).toBe(59.98);
  });

  it("clears the cart", () => {
    const { result } = renderHook(() => useCart(), { wrapper });

    act(() => {
      result.current.addToCart(mockProduct, 2);
      result.current.clearCart();
    });

    expect(result.current.cart).toHaveLength(0);
  });
});
