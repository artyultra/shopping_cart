import { render, screen, fireEvent } from "@testing-library/react";
import ProductCard from "../ProductCard";
import { CartProvider } from "@/context/CartContext";
import { Product } from "@/types/Product";

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

const renderWithCart = (component: React.ReactElement) => {
  return render(<CartProvider>{component}</CartProvider>);
};

describe("ProductCard", () => {
  it("renders product information correctly", () => {
    renderWithCart(<ProductCard product={mockProduct} />);

    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByText("$29.99")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("increments quantity when + button is clicked", () => {
    renderWithCart(<ProductCard product={mockProduct} />);

    const incrementButton = screen.getByLabelText("Increase quantity");
    const quantityInput = screen.getByLabelText("Quantity") as HTMLInputElement;

    expect(quantityInput.value).toBe("1");

    fireEvent.click(incrementButton);
    expect(quantityInput.value).toBe("2");
  });

  it("decrements quantity when - button is clicked but not below 1", () => {
    renderWithCart(<ProductCard product={mockProduct} />);

    const decrementButton = screen.getByLabelText("Decrease quantity");
    const quantityInput = screen.getByLabelText("Quantity") as HTMLInputElement;

    expect(quantityInput.value).toBe("1");

    fireEvent.click(decrementButton);
    expect(quantityInput.value).toBe("1");
  });

  it("updates quantity when typing in input", () => {
    renderWithCart(<ProductCard product={mockProduct} />);

    const quantityInput = screen.getByLabelText("Quantity") as HTMLInputElement;

    fireEvent.change(quantityInput, { target: { value: "5" } });
    expect(quantityInput.value).toBe("5");
  });

  it("shows 'Added!' message when add to cart is clicked", () => {
    renderWithCart(<ProductCard product={mockProduct} />);

    const addButton = screen.getByText("Add to Cart");
    fireEvent.click(addButton);

    expect(screen.getByText("Added! ✓")).toBeInTheDocument();
  });
});
