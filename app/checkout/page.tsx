"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutPage() {
  const { items } = useCart();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const total = items.reduce(
    (s, i) => s + i.qty * i.price,
    0
  );

  const generateMessage = () => {
    const products = items
      .map(
        (i) =>
          `- ${i.name} x${i.qty} = $${i.qty * i.price}`
      )
      .join("%0A");

    return `Hola, quiero hacer un pedido:%0A%0A` +
      `Nombre: ${name}%0A` +
      `Teléfono: ${phone}%0A%0A` +
      `Productos:%0A${products}%0A%0A` +
      `TOTAL: $${total}`;
  };

  const sendWhatsApp = () => {
    if (!name || !phone || items.length === 0) return;

    const message = generateMessage();

    const whatsappNumber = "521XXXXXXXXXX"; // 👈 TU NUMERO AQUÍ

    const url = `https://wa.me/${whatsappNumber}?text=${message}`;

    window.open(url, "_blank");
  };

  return (
    <main className="min-h-screen bg-black text-white p-6">

      <h1 className="text-2xl font-bold mb-6">
        Checkout
      </h1>

      {/* FORM */}
      <div className="space-y-4 mb-6">

        <input
          placeholder="Nombre"
          className="w-full p-2 bg-zinc-900 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Teléfono"
          className="w-full p-2 bg-zinc-900 rounded"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

      </div>

      {/* RESUMEN */}
      <div className="bg-zinc-900 p-4 rounded mb-6">

        <h2 className="font-bold mb-2">
          Resumen de compra
        </h2>

        {items.map((i, idx) => (
          <p key={idx}>
            {i.name} x{i.qty} = ${i.qty * i.price}
          </p>
        ))}

        <p className="text-green-400 font-bold mt-3">
          Total: ${total}
        </p>

      </div>

      {/* BOTÓN WHATSAPP */}
      <button
        onClick={sendWhatsApp}
        className="w-full bg-green-500 text-black font-bold py-3 rounded"
      >
        Enviar pedido por WhatsApp
      </button>

    </main>
  );
}