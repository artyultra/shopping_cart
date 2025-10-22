import { render, screen } from "@testing-library/react";
import NavBar from "../NavBar";
import { CartProvider } from "@/context/CartContext";

const renderWithCart = (component: React.ReactElement) => {
  return render(<CartProvider>{component}</CartProvider>);
};

describe("NavBar", () => {
  it("renders navigation links", () => {
    renderWithCart(<NavBar />);

    expect(screen.getByText("ShopHub")).toBeInTheDocument();
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Shop")).toBeInTheDocument();
    expect(screen.getByText("Cart")).toBeInTheDocument();
  });

  it("does not show cart badge when cart is empty", () => {
    renderWithCart(<NavBar />);

    const badge = screen.queryByText(/^\d+$/);
    expect(badge).not.toBeInTheDocument();
  });
});
