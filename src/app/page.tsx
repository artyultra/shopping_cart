import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4 text-text">Welcome to ShopHub</h1>
      <p className="text-subtext1 mb-8 max-w-xl">
        Discover amazing products at unbeatable prices. Your one-stop shop for
        everything you need.
      </p>
      <Link
        href="/shop"
        className="bg-blue hover:bg-mauve text-crust font-medium py-3 px-8 rounded transition-colors"
      >
        Start Shopping
      </Link>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl">
        <div className="p-5 border border-surface1 rounded bg-surface0">
          <div className="text-3xl mb-3">🚚</div>
          <h3 className="text-lg font-semibold mb-2 text-text">Fast Delivery</h3>
          <p className="text-subtext0 text-sm">
            Get your products delivered quickly and safely
          </p>
        </div>
        <div className="p-5 border border-surface1 rounded bg-surface0">
          <div className="text-3xl mb-3">💳</div>
          <h3 className="text-lg font-semibold mb-2 text-text">Secure Payment</h3>
          <p className="text-subtext0 text-sm">
            Shop with confidence using our secure checkout
          </p>
        </div>
        <div className="p-5 border border-surface1 rounded bg-surface0">
          <div className="text-3xl mb-3">⭐</div>
          <h3 className="text-lg font-semibold mb-2 text-text">Quality Products</h3>
          <p className="text-subtext0 text-sm">
            Only the best products for our valued customers
          </p>
        </div>
      </div>
    </div>
  );
}
