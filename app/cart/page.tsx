"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, updateQty, clearCart } = useCart();

  const total = items.reduce(
    (s, i) => s + i.qty * i.price,
    0
  );

  const totalQty = items.reduce(
    (s, i) => s + i.qty,
    0
  );

  const sendWhatsApp = () => {
    if (items.length === 0) return;

    const name = prompt("Tu nombre:");
    const phone = prompt("Teléfono (opcional):");

    if (!name) return;

    const products = items
      .map(
        (i) =>
          `- ${i.name} x${i.qty} = $${i.qty * i.price}`
      )
      .join("\n");

    const message =
      `🛒 NUEVO PEDIDO\n\n` +
      `👤 Nombre: ${name}\n` +
      (phone ? `📞 Tel: ${phone}\n\n` : "\n") +
      `📦 Productos:\n${products}\n\n` +
      `💰 TOTAL: $${total}`;

    const whatsappNumber = "521XXXXXXXXXX"; // 👈 CAMBIA TU NUMERO

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-28">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">
        🛒 Carrito
      </h1>

      {/* RESUMEN */}
      <div className="bg-zinc-900 p-4 rounded mb-6">

        <p>Total productos: {totalQty}</p>

        <p className="text-green-400 font-bold text-lg">
          Total: ${total}
        </p>

        <button
          onClick={clearCart}
          className="mt-3 bg-red-600 px-3 py-1 rounded"
        >
          Vaciar carrito
        </button>

      </div>

      {/* LISTA */}
      {items.length === 0 ? (
        <p className="text-gray-400">
          No hay productos en el carrito
        </p>
      ) : (
        items.map((item, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-3 rounded mb-3 flex justify-between items-center"
          >

            {/* INFO */}
            <div>
              <p className="font-bold">{item.name}</p>

              <p className="text-green-400">
                ${item.price * item.qty}
              </p>

              <p className="text-sm text-gray-400">
                Cantidad: {item.qty}
              </p>
            </div>

            {/* CONTROLES */}
            <div className="flex items-center gap-2">

              <button
                onClick={() => updateQty(item.name, -1)}
                className="w-8 h-8 bg-gray-800 rounded"
              >
                -
              </button>

              <button
                onClick={() => updateQty(item.name, 1)}
                className="w-8 h-8 bg-gray-800 rounded"
              >
                +
              </button>

            </div>

          </div>
        ))
      )}

      {/* 🔥 BOTÓN WHATSAPP FIJO (IMPORTANTE) */}
      <div className="fixed bottom-0 left-0 right-0 bg-green-500 p-4">

        <button
          onClick={sendWhatsApp}
          disabled={items.length === 0}
          className="w-full text-black font-bold py-3 rounded disabled:opacity-40"
        >
          📲 Enviar pedido por WhatsApp
        </button>

      </div>

    </main>
  );
}