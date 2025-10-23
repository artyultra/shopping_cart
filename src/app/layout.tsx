import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "@/styles/globals.css";
import LayoutClient from "@/components/LayoutClient";
import Navbar from "@/components/Navbar";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Odin Project Shopping Cart Assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  );
}
