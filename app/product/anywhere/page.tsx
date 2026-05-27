"use client";

import { useState } from "react";

type Product = {
  name: string;
  stock: number;
  qty: number;
};

export default function ProductPage() {
  const [products, setProducts] = useState<Product[]>([
    { name: "Lavanda", stock: 10, qty: 0 },
    { name: "Vainilla", stock: 5, qty: 0 },
    { name: "Coco", stock: 0, qty: 0 },
    { name: "Citrus", stock: 8, qty: 0 },
  ]);

  const changeQty = (name: string, delta: number, stock: number, qty: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.name === name
          ? { ...p, qty: Math.max(0, Math.min(stock, qty + delta)) }
          : p
      )
    );
  };

  const totalItems = products.reduce((acc, p) => acc + p.qty, 0);

  return (
    <main className="min-h-screen bg-black text-white p-4 flex justify-start">
      <div className="max-w-xs space-y-3">

        <h1 className="text-4xl font-bold">
          Aromas Premium
        </h1>

        {products.map((p) => (
          <div
            key={p.name}
            className="bg-gray-900 border border-gray-800 rounded-md p-2 space-y-1"
          >
            <div className="flex justify-between">
              <span className="text-base font-semibold">{p.name}</span>
              <span className="text-green-400 text-sm">
                Stock: {p.stock}
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-400">Cantidad</span>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => changeQty(p.name, -1, p.stock, p.qty)}
                  className="w-7 h-7 bg-gray-800 rounded"
                >
                  -
                </button>

                <span className="w-6 text-center text-sm">
                  {p.qty > 0 ? p.qty : ""}
                </span>

                <button
                  onClick={() => changeQty(p.name, 1, p.stock, p.qty)}
                  className="w-7 h-7 bg-gray-800 rounded"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-gray-900 border border-gray-800 p-3 rounded-md">
          <div className="text-gray-400 text-sm">Total seleccionado</div>
          <div className="text-green-400 font-bold text-lg">
            {totalItems}
          </div>
        </div>

      </div>
    </main>
  );
}