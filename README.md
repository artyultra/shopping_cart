# ShopHub - Shopping Cart Application

A modern e-commerce shopping cart application built with Next.js 15, TypeScript, and Tailwind CSS. This project demonstrates a complete shopping experience with product browsing, cart management, and real-time updates.

## Features

- **Home Page**: Welcome page with feature highlights
- **Shop Page**: Browse products fetched from FakeStore API
- **Shopping Cart**: Full cart management with add/remove/update functionality
- **Real-time Cart Badge**: Navigation shows live item count
- **Responsive Design**: Works on desktop and mobile devices
- **TypeScript**: Full type safety throughout the application
- **Testing**: Comprehensive test suite using React Testing Library
- **Dark Mode Support**: Automatic theme detection

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **State Management**: React Context API
- **Testing**: Jest + React Testing Library
- **API**: FakeStore API
- **Image Optimization**: Next.js Image component

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── page.tsx           # Home page
│   ├── shop/              # Shop page
│   ├── cart/              # Cart page
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── NavBar/           # Navigation component
│   ├── ProductCard/      # Product display card
│   └── LayoutClient/     # Client wrapper component
├── context/              # React Context
│   └── CartContext.tsx   # Shopping cart state management
├── types/                # TypeScript types
│   └── Product.ts        # Product and CartItem interfaces
└── styles/               # Global styles
    └── globals.css       # Tailwind and global CSS
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run test:watch` - Run tests in watch mode

## Features in Detail

### Product Browsing
- Fetches real product data from FakeStore API
- Displays product images, titles, descriptions, prices, and ratings
- Grid layout responsive to different screen sizes

### Cart Management
- Add products with custom quantities
- Increment/decrement quantity with buttons or manual input
- Update quantities from cart page
- Remove items from cart
- Real-time total price calculation
- Empty cart state with redirect to shop

### State Management
- Centralized cart state using React Context
- Persistent cart across page navigation
- Type-safe operations with TypeScript

### Testing
- Unit tests for cart context logic
- Component tests for ProductCard and NavBar
- Integration tests for cart operations
- All tests follow React Testing Library best practices

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms

This Next.js app can be deployed to any platform that supports Node.js:

- **Netlify**: Use the Next.js build plugin
- **Railway**: Deploy directly from GitHub
- **AWS Amplify**: Connect your repository
- **Docker**: Build a container with `next build` and `next start`

### Build for Production

```bash
npm run build
npm start
```

## Environment Variables

No environment variables are required for basic functionality. The app uses the public FakeStore API.

## Future Enhancements

- User authentication
- Persistent cart storage (localStorage/database)
- Product search and filtering
- Checkout and payment processing
- Order history
- Product reviews and ratings

## Testing

Run the test suite:

```bash
npm test
```

Tests cover:
- Cart state management
- Product card interactions
- Navigation component
- Adding/removing/updating cart items

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT

## Acknowledgments

- [FakeStore API](https://fakestoreapi.com/) for product data
- [Next.js](https://nextjs.org/) for the framework
- [Tailwind CSS](https://tailwindcss.com/) for styling
