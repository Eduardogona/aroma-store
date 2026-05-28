import type { Metadata } from "next";
import "./globals.css";

import { CartProvider } from "./context/CartContext";

export const metadata: Metadata = {
  title: "Aroma Store",
  description: "Tienda de aromas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}