"use client";

import { useState } from "react";
import { useCart } from "./context/CartContext";
import Link from "next/link";
import CartDrawer from "./components/CartDrawer";

type Product = {
  name: string;
  price: number;
  stock: number;
  qty: number;
};

export default function Home() {
  const { addItem, items } = useCart();

  const [openCart, setOpenCart] = useState(false);

  const [products, setProducts] = useState<Product[]>([
    {
  name: "Organic Can",
  tag: "Blacksss",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "Black",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
    {
  name: "Organic Can",
  tag: "New Car Shine",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
    {
  name: "Organic Can",
  tag: "Bubble Gum",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},

{
  name: "Organic Can",
  tag: "Tropic Twist",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},

{
  name: "Organic Can",
  tag: "Pineapple Crush",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "Strawberry",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "Vanilla beach",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "Cran Burst",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "New Car Shine",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "New Car Shine",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "New Car Shine",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "New Car Shine",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "New Car Shine",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "New Car Shine",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "New Car Shine",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "New Car Shine",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},
{
  name: "Organic Can",
  tag: "New Car Shine",
  description: "...",
  price: 75,
  stock: 10,
  qty: 0
},

  ]);

  // ➕ / ➖ stock control
  const changeQty = (name: string, delta: number) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.name !== name) return p;

        const newQty = p.qty + delta;

        return {
          ...p,
          qty: Math.max(0, Math.min(p.stock, newQty)),
        };
      })
    );
  };

  // 🛒 add to cart
  const addToCart = (product: Product) => {
    if (product.qty <= 0) return;

    addItem({
      name: product.name,
      price: product.price,
      qty: product.qty,
    });

    setProducts((prev) =>
      prev.map((p) =>
        p.name === product.name ? { ...p, qty: 0 } : p
      )
    );
  };

  // 🛒 cart counter
  const cartTotal = items.reduce(
    (sum: number, i: any) => sum + i.qty,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">

        <h1 className="text-2xl font-bold">
          Aroma Store
        </h1>

        {/* NAV ACTIONS */}
        <div className="flex gap-3">

          {/* OPEN DRAWER */}
          <button
            onClick={() => setOpenCart(true)}
            className="bg-white text-black px-4 py-1 rounded font-semibold"
          >
            🛒 Drawer ({cartTotal})
          </button>

          {/* GO TO CART PAGE */}
          <Link
            href="/cart"
            className="bg-green-500 text-black px-4 py-1 rounded font-semibold"
          >
            Checkout
          </Link>

        </div>

      </div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {products.map((p) => {
          const subtotal = p.qty * p.price;
          const agotado = p.stock === 0;

          return (
            <div
              key={p.name}
              className="bg-zinc-900 p-4 rounded-lg space-y-3"
            >

              <div className="h-40 bg-zinc-800 rounded flex items-center justify-center">
                Imagen
              </div>

<h2 className="font-semibold text-lg flex items-center gap-3">
  <span>{p.name}</span>

  {p.tag && (
  <span className="bg-emerald-500/20 text-emerald-300 px-3 py-1 rounded-full text-sm font-semibold tracking-wide border border-emerald-500/40">
    {p.tag}
  </span>
)}
</h2>
              <p className="text-sm text-gray-400">
  {p.description}
</p>

              <p className="text-green-400">${p.price}</p>

              {agotado ? (
                <p className="text-red-500 font-bold">❌ Agotado</p>
              ) : (
                <p className="text-sm text-gray-400">
                  Stock: {p.stock}
                </p>
              )}

              {/* QTY */}
              <div className="flex items-center gap-3">

                <button
                  onClick={() => changeQty(p.name, -1)}
                  disabled={p.qty === 0}
                  className="w-8 h-8 bg-gray-800 rounded disabled:opacity-40"
                >
                  -
                </button>

                <span>{p.qty}</span>

                <button
                  onClick={() => changeQty(p.name, 1)}
                  disabled={p.qty >= p.stock}
                  className="w-8 h-8 bg-gray-800 rounded disabled:opacity-40"
                >
                  +
                </button>

              </div>

              <p className="text-blue-400 text-sm">
                Subtotal: ${subtotal}
              </p>

              <button
                onClick={() => addToCart(p)}
                disabled={p.qty <= 0 || agotado}
                className="w-full bg-white text-black py-2 rounded font-semibold disabled:opacity-40"
              >
                Agregar al carrito
              </button>

            </div>
          );
        })}

      </div>

      {/* DRAWER */}
      <CartDrawer
        open={openCart}
        onClose={() => setOpenCart(false)}
      />

    </main>
  );
}