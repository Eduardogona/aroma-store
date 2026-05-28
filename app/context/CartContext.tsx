"use client";

import { createContext, useContext, useEffect, useState } from "react";

type Item = {
  id: string;
  name: string;
  price: number;
  qty: number;
};

type CartType = {
  items: Item[];
  addItem: (item: Item) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
  updateQty: (name: string, delta: number) => void;
};

const CartContext = createContext<CartType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  // 🔥 cargar desde localStorage
  useEffect(() => {
    const saved = localStorage.getItem("cart");
    if (saved) setItems(JSON.parse(saved));
  }, []);

  // 🔥 guardar cada cambio
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addItem = (item: Item) => {
    if (item.qty <= 0) return;

    setItems((prev) => {
      const exist = prev.find((p) => p.name === item.name);

      if (exist) {
        return prev.map((p) =>
          p.name === item.name
            ? { ...p, qty: p.qty + item.qty }
            : p
        );
      }

      return [...prev, item];
    });
  };

  const updateQty = (name: string, delta: number) => {
    setItems((prev) =>
      prev
        .map((p) =>
          p.name === name
            ? { ...p, qty: p.qty + delta }
            : p
        )
        .filter((p) => p.qty > 0) // si llega a 0 se elimina solo
    );
  };

  const removeItem = (name: string) => {
    setItems((prev) => prev.filter((p) => p.name !== name));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        clearCart,
        updateQty, // 👈 NUEVO
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("Cart not found");
  return ctx;
};