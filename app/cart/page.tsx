"use client";

import { useCart } from "../context/CartContext";

export default function CartPage() {
  const { items, updateQty, clearCart } = useCart();

  // 💰 TOTAL
  const total = items.reduce(
    (s, i) => s + i.qty * i.price,
    0
  );

  // 🛒 TOTAL PRODUCTOS
  const totalQty = items.reduce(
    (s, i) => s + i.qty,
    0
  );

  // 📲 ENVIAR WHATSAPP
  const sendWhatsApp = () => {
    if (items.length === 0) return;

    // 👤 DATOS CLIENTE
    const name = prompt("Tu nombre:");
    const phone = prompt("Tu teléfono:");
    const zone = prompt("¿En qué zona te localizas para coordinar la entrega de tu pedido?");
    const schedule = prompt("Horario de entrega de tu preferencia (ej. 3:00 pm a 6:00 pm)");

    if (!name) return;

    // 📦 PRODUCTOS
    const products = items
      .map(
        (i) =>
          `• ${i.name} x${i.qty} = $${i.qty * i.price}`
      )
      .join("\n");

    // 📝 MENSAJE
    const message =
   
      `🛒 NUEVO PEDIDO\n\n` +
      `👤 Nombre: ${name}\n` +
      `📞 Teléfono: ${phone}\n\n` +
      `📍 Zona de Entrega: ${zone}\n` +
      `⏰ Horario de Entrega: ${schedule}\n\n` +
      `📦 Productos:\n${products}\n\n` +
      `🧾 Total productos: ${totalQty}\n` +
      `💰 TOTAL: $${total}\n`+
      `🙂 Gracias por tu pedido.En breve te contactaremos.\n\n` ;
      

    // 📲 LINK WHATSAPP
    const url =
      `https://api.whatsapp.com/send?phone=525527305917&text=${encodeURIComponent(
        message
      )}`;

    // 🚀 ABRIR
    window.location.href = url;
  };

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-28">

      {/* HEADER */}
      <h1 className="text-2xl font-bold mb-6">
        🛒 Carrito
      </h1>

      {/* RESUMEN */}
      <div className="bg-zinc-900 p-4 rounded mb-6">

        <p className="text-lg">
          Total productos: {totalQty}
        </p>

        <p className="text-green-400 font-bold text-2xl mt-2">
          Total: ${total}
        </p>

        <button
          onClick={clearCart}
          className="mt-4 bg-red-600 px-4 py-2 rounded"
        >
          Vaciar carrito
        </button>

      </div>

      {/* PRODUCTOS */}
      {items.length === 0 ? (
        <p className="text-gray-400">
          No hay productos en el carrito
        </p>
      ) : (
        items.map((item, i) => (
          <div
            key={i}
            className="bg-zinc-900 p-4 rounded mb-3 flex justify-between items-center"
          >

            {/* INFO */}
            <div>

              <p className="font-bold text-lg">
                {item.name}
              </p>

              <p className="text-sm text-gray-400">
                Cantidad: {item.qty}
              </p>

              <p className="text-green-400 font-bold">
                ${item.price * item.qty}
              </p>

            </div>

            {/* BOTONES */}
            <div className="flex items-center gap-2">

              <button
                onClick={() => updateQty(item.name, -1)}
                className="w-9 h-9 bg-gray-800 rounded text-lg"
              >
                -
              </button>

              <button
                onClick={() => updateQty(item.name, 1)}
                className="w-9 h-9 bg-gray-800 rounded text-lg"
              >
                +
              </button>

            </div>

          </div>
        ))
      )}

      {/* BOTÓN WHATSAPP */}
      <div className="fixed bottom-4 left-0 right-0 max-w-xs mx-auto z-50">

        <button
          onClick={sendWhatsApp}
          disabled={items.length === 0}
          className="max-w-xs bg-white text-black font-bold py-4 rounded text-lg disabled:opacity-40"
        >
          📲 Enviar pedido por WhatsApp
        </button>

      </div>

    </main>
  );
}