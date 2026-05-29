"use client";

import { useCart } from "../context/CartContext";

export default function CartDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const { items, updateQty, clearCart } = useCart();

  const total = items.reduce(
    (s, i) => s + i.qty * i.price,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-black text-white shadow-lg transform transition-transform duration-300 z-50 ${
        open ? "translate-x-0" : "translate-x-full"
      }`}
    >

      {/* HEADER */}
      <div className="flex justify-between items-center p-4 border-b border-zinc-800">
        <h2 className="text-lg font-bold">🛒 Carrito</h2>

        <button onClick={onClose} className="text-gray-400">
          ✕
        </button>
      </div>

      {/* ITEMS */}
      <div className="p-4 space-y-4 overflow-y-auto h-[70%]">

        {items.length === 0 ? (
          <p className="text-gray-500">Carrito vacío</p>
        ) : (
          items.map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900 p-3 rounded"
            >

              <p className="font-bold">{item.name} - {item.tag}</p>

              <p className="text-green-400">
                ${item.price * item.qty}
              </p>

              {/* QTY */}
              <div className="flex items-center gap-2 mt-2">

                <button
                  onClick={() => updateQty(item.id, -1)}
                  className="w-7 h-7 bg-gray-800 rounded"
                >
                  -
                </button>

                <span>{item.qty}</span>

                <button
                  onClick={() => updateQty(item.id, 1)}
                  className="w-7 h-7 bg-gray-800 rounded"
                >
                  +
                </button>

              </div>

            </div>
          ))
        )}

      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 w-full p-4 border-t border-zinc-800">

        <p className="mb-2 font-bold">
          Total: ${total}
        </p>

        <button
          onClick={clearCart}
          className="w-full bg-red-600 py-2 rounded mb-2"
        >
          Vaciar carrito
        </button>

        <button className="w-full bg-white text-black py-2 rounded font-bold">
          Checkout
        </button>

      </div>

    </div>
  );
}