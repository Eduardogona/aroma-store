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

  const updateQty = (name: string, value: number) => {
    setProducts((prev) =>
      prev.map((p) =>
        p.name === name ? { ...p, qty: value } : p
      )
    );
  };

  const totalItems = products.reduce((acc, p) => acc + p.qty, 0);

  return (
    <main className="min-h-screen bg-black text-white p-4">

      {/* CONTENEDOR */}
      <div className="space-y-4 max-w-xs">

        {/* HEADER */}
        <h1 className="text-3xl font-bold">
          Aromas Premium
        </h1>

        {/* LISTA */}
        <div className="space-y-2">

          {products.map((p) => (
            <div
              key={p.name}
              className="bg-gray-900 border border-gray-800 rounded-md p-3 space-y-2"
            >

              {/* NOMBRE + STOCK */}
              <div className="flex justify-between items-center">
                <span className="text-base font-semibold">
                  {p.name}
                </span>

                <span className="text-sm font-bold text-green-400">
                  Stock: {p.stock}
                </span>
              </div>

              {/* CANTIDAD */}
              <div className="flex items-center justify-between">

                <span className="text-sm text-gray-400">
                  Cantidad
                </span>

                <input
                  type="number"
                  min={0}
                  max={p.stock}
                  value={p.qty}
                  onChange={(e) =>
                    updateQty(p.name, Number(e.target.value))
                  }
                  className="w-14 h-8 text-center bg-gray-800 rounded text-sm"
                />

              </div>

            </div>
          ))}

        </div>

        {/* TOTAL */}
        <div className="bg-gray-900 border border-gray-800 p-3 rounded-md">
          <div className="text-gray-300 text-sm">
            Total seleccionado
          </div>

          <div className="text-green-400 font-bold text-base">
            {totalItems}
          </div>
        </div>

      </div>
    </main>
  );
}