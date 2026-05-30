"use client";

import { useState, useEffect } from "react";
import { useCart } from "./context/CartContext";
import Link from "next/link";
import CartDrawer from "./components/CartDrawer";

type Product = {
  id: string;
  name: string;
  tag?: string;
  description?: string;
  price: number;
  stock: number;
  qty: number;
  image: string;
  
};

export default function Home() {
  const { addItem, items } = useCart();

  const [openCart, setOpenCart] = useState(false);
  const [filter, setFilter] = useState("Todos");
  
  const [showTop, setShowTop] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const fullHeight = document.documentElement.offsetHeight;

    const reachedBottom =
      scrollTop + windowHeight >= fullHeight - 10;

    setShowTop(reachedBottom);
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const [products, setProducts] = useState<Product[]>([
  {
  id: "organic-can-sin-cherry",
  name: "Organic Can sin tapa",
  tag: "cherry",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0,
 image: "/products/organic-can-sin-cherrys.jpeg"
 
},
{
  id: "organic-can-sin-black",
  name: "Organic Can sin tapa",
  tag: "Black",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-sin-black.jpeg"
},
    {
  id: "organic-can-sin-new-car-shine",
  name: "Organic Can sin tapa",
  tag: "New Car Shine",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-sin-new-car-shine.jpeg"
},
    {
  id: "organic-can-sin-bubble-gum",
  name: "Organic Can sin tapa",
  tag: "Bubble Gum",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-sin-bubble-gum.jpeg"
},

{
  id: "organic-can-sin-tropic-twist",
  name: "Organic Can sin tapa",
  tag: "Tropic Twist",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-sin-tropic-twist.jpeg"
},

{
  id: "organic-can-sin-pineapple-crush",
  name: "Organic Can sin tapa",
  tag: "Pineapple Crush",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-sin-pineapple-crush.jpeg"
},
{
  id: "organic-can-sin-strawberry",
  name: "Organic Can sin tapa",
  tag: "Strawberry",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-sin-strawberry.jpeg"
},
{
  id: "organic-can-sin-vanilla-beach",
  name: "Organic Can sin tapa",
  tag: "Vanilla beach",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-sin-vanilla-beach.jpeg"
},
{
  id: "organic-can-sin-cran-burst",
  name: "Organic Can sin tapa",
  tag: "Cran Burst",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-sin-cran-burst.jpeg"
},
{
  id: "organic-can-cherry-con-tapa",
  name: "Organic Can con tapa",
  tag: "Cherry",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 80,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-cherry-con-tapa.jpeg"
},
{
  id: "organic-can-black-con-tapa",
  name: "Organic Can con tapa",
  tag: "Black",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 80,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-black-con-tapa.jpeg"
},
{
  id: "organic-can-new-car-shine-con-tapa",
  name: "Organic Can con tapa",
  tag: "New Car Shine",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 75,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-new-car-shine-con-tapa.jpeg"
},
{
  id: "organic-can-cran-burst-con-tapa",
  name: "Organic Can con tapa",
  tag: "Cran Burst",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 75,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-cran-burst-con-tapa.jpeg"
},
{
  id: "organic-can-pineapple-crush-con-tapa",
  name: "Organic Can con tapa",
  tag: "Pineapple crush",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 80,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-pineapple-crush-con-tapa.jpeg"
},
{
  id: "organic-can-bubble-gum-con-tapa",
  name: "Organic Can con tapa",
  tag: "Bubble Gum",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 80,
  stock: 10,
  qty: 0,
  image:"/products/organic-can-bubble-gum-con-tapa.jpeg"
},
{
  id: "Super-Organic-blue-lava",
  name: "Super Organic",
  tag: "Blue Lava",
  description: "Ambientador de alta intensidad. Coloca la almohadilla bajo el asiento o en cualquier espacio para un aroma fresco y duradero.",
  price: 80,
  stock: 10,
  qty: 0,
  image:"/products/Super-Organic-blue-lava.jpeg"
},
{
  id: "Super-Organic-black",
  name: "Super Organic",
  tag: "Black",
  description: "Ambientador de alta intensidad. Coloca la almohadilla bajo el asiento o en cualquier espacio para un aroma fresco y duradero.",
  price: 80,
  stock: 10,
  qty: 0,
  image:"/products/Super-Organic-black.jpeg"
},
{
  id: "Super-Organic-tropic-twist",
  name: "Super Organic",
  tag: "Tropic Twist",
  description: "Ambientador de alta intensidad. Coloca la almohadilla bajo el asiento o en cualquier espacio para un aroma fresco y duradero.",
  price: 80,
  stock: 10,
  qty: 0,
  image:"/products/Super-Organic-tropic-twist.jpeg"
},
{
  id: "Super-Organic-pure-sunshine",
  name: "Super Organic",
  tag: "Pure Sunshine",
  description: "Ambientador de alta intensidad. Coloca la almohadilla bajo el asiento o en cualquier espacio para un aroma fresco y duradero.",
  price: 80,
  stock: 10,
  qty: 0,
  image:"/products/Super-Organic-pure-sunshine.jpeg"
},
{
  id: "Super-Organic-cherry",
  name: "Super Organic",
  tag: "Cherry",
  description: "Ambientador de alta intensidad. Coloca la almohadilla bajo el asiento o en cualquier espacio para un aroma fresco y duradero.",
  price: 80,
  stock: 10,
  qty: 0,
  image:"/products/Super-Organic-cherry.jpeg"
},
{
  id: "Little-joe-cherry",
  name: "Little joe",
  tag: "Cherry",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 90,
  stock: 10,
  qty: 0,
  image:"/products/Little-joe-cherry.jpeg"
},
{
  id: "Little-joe-Strawberry",
  name: "Little Joe",
  tag: "Strawberry",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 90,
  stock: 10,
  qty: 0,
  image:"/products/Little-joe-Strawberry.jpeg"
},
{
  id: "Little-joe-flower",
  name: "Little joe",
  tag: "Flower",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 90,
  stock: 10,
  qty: 0,
  image:"/products/Little-joe-flower.jpeg"
},
{
  id: "Little-joe-black",
  name: "Little joe",
  tag: "Black",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 90,
  stock: 10,
  qty: 0,
  image:"/products/Little-joe-black.jpeg"
},
{
  id: "Little-Duck-happy-splash",
  name: "Little Duck",
  tag: "Happy Splash",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 90,
  stock: 10,
  qty: 0,
  image:"/products/Little-Duck-happy-splash.jpeg"
},
{
  id: "Little-dog-fruit",
  name: "Little dog",
  tag: "Fruit ",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 90,
  stock: 10,
  qty: 0,
  image:"/products/Little-dog-fruit.jpeg"
},
{
  id: "Little-Dog-fresh-mint",
  name: "Little Dog",
  tag: "Fresh Mint",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 90,
  stock: 10,
  qty: 0,
  image:"/products/Little-Dog-fresh-mint.jpeg"
},
{
  id: "Little-Dog-passion",
  name: "Little Dog",
  tag: "Passion",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 90,
  stock: 10,
  qty: 0,
  image:"/products/Little-Dog-passion.jpeg"
},
{
  id: "Spray-platinum-cherry",
  name: "Spray Platinum",
  tag: "Cherry",
  description: "Spray concentrado a base de aceite. Elimina malos olores y refresca al instante. Con pocas pulverizaciones, el aroma dura todo el día. También puede aplicarse en Organic Can y Super Organic para prolongar su fragancia. Ideal para usar en algodón y colocarlo en cualquier espacio.",
  price: 95,
  stock: 10,
  qty: 0,
  image:"/products/Spray-platinum-cherry.jpeg"
},
{
  id: "Spray-platinum-tropic-twist",
  name: "Spray Platinum",
  tag: "Tropic Twist",
  description: "Spray concentrado a base de aceite. Elimina malos olores y refresca al instante. Con pocas pulverizaciones, el aroma dura todo el día. También puede aplicarse en Organic Can y Super Organic para prolongar su fragancia. Ideal para usar en algodón y colocarlo en cualquier espacio.",
  price: 95,
  stock: 10,
  qty: 0,
  image:"/products/Spray-platinum-tropic-twist.jpeg"
},
{
  id: "Spray-platinum-black",
  name: "Spray Platinum",
  tag: "Black",
  description: "Spray concentrado a base de aceite. Elimina malos olores y refresca al instante. Con pocas pulverizaciones, el aroma dura todo el día. También puede aplicarse en Organic Can y Super Organic para prolongar su fragancia. Ideal para usar en algodón y colocarlo en cualquier espacio.",
  price: 95,
  stock: 10,
  qty: 0,
  image:"/products/Spray-platinum-black.jpeg"
},
{
  id: "Spray-Platinum-new-car-shine",
  name: "Spray Platinum",
  tag: "New car shine",
  description: "Spray concentrado a base de aceite. Elimina malos olores y refresca al instante. Con pocas pulverizaciones, el aroma dura todo el día. También puede aplicarse en Organic Can y Super Organic para prolongar su fragancia. Ideal para usar en algodón y colocarlo en cualquier espacio.",
  price: 95,
  stock: 10,
  qty: 0,
  image:"/products/Spray-Platinum-new-car-shine.jpeg"
},
{
  id: "Spray-Platinum-blue-lava",
  name: "Spray Platinum",
  tag: "Blue Lava",
  description: "Spray concentrado a base de aceite. Elimina malos olores y refresca al instante. Con pocas pulverizaciones, el aroma dura todo el día. También puede aplicarse en Organic Can y Super Organic para prolongar su fragancia. Ideal para usar en algodón y colocarlo en cualquier espacio.",
  price: 95,
  stock: 10,
  qty: 0,
  image:"/products/Spray-Platinum-blue-lava.jpeg"
},
{
  id: "Anywhare-Spray-cherry",
  name: "Anywhare Spray",
  tag: "Cherry",
  description: "Elimina olores y refresca cualquier espacio con la tecnología PARA+ de eliminación de olores.",
  price: 130,
  stock: 10,
  qty: 0,
  image:"/products/Anywhare-Spray-cherry.jpeg"
},
{
  id: "Anywhare-Spray-black",
  name: "Anywhare Spray",
  tag: "Black",
  description: "Elimina olores y refresca cualquier espacio con la tecnología PARA+ de eliminación de olores.",
  price: 130,
  stock: 10,
  qty: 0,
  image:"/products/Anywhare-Spray-black.jpeg"
},
{
  id: "Anywhare-Spray-lemon-lavender",
  name: "Anywhare Spray",
  tag: "Lemon Lavender",
  description: "Elimina olores y refresca cualquier espacio con la tecnología PARA+ de eliminación de olores.",
  price: 130,
  stock: 10,
  qty: 0,
  image:"/products/Anywhare-Spray-lemon-lavender.jpeg"
},





  ]);

  // ➕ / ➖ stock control
  const changeQty = (id: string, delta: number) => {
    setProducts((prev) =>
      prev.map((p) => {
        if (p.id !== id) return p;

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
    id: product.id,
    name: product.name,
    tag: product.tag,
    price: product.price,
    qty: product.qty,
  });

  setProducts((prev) =>
    prev.map((p) =>
      p.id === product.id ? { ...p, qty: 0 } : p
    )
  );
};

const filteredProducts =
  filter === "Todos"
    ? products
    : products.filter((p) => {
        if (filter === "Little") {
          return p.name.startsWith("Little");
        }

        return p.name === filter;
      });

const cartTotal = items.reduce(
    (sum: number, i: any) => sum + i.qty,
    0
  );

  return (
    <main className="min-h-screen bg-black text-white p-6 pb-40">

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
            🛒 Carrito ({cartTotal})
          </button>

          {/* GO TO CART PAGE */}
          <Link
            href="/cart"
            className="bg-green-500 text-black px-4 py-1 rounded font-semibold"
          >
            Pedir por WhatsApp
          </Link>

        </div>

      </div>

      <div className="mb-6">
  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="w-full bg-zinc-900 border border-zinc-700 p-3 rounded-lg"
  >
    <option>Todos</option>
    <option>Organic Can sin tapa</option>
    <option>Organic Can con tapa</option>
    <option>Super Organic</option>
    <option>Little</option>
    <option>Anywhare Spray</option>
    <option>Spray Platinum</option>
  </select>
</div>

      {/* PRODUCTS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

        {filteredProducts.map((p) => {
          const subtotal = p.qty * p.price;
          const agotado = p.stock === 0;

          return (
            <div
              key={p.id}
              className="bg-zinc-900 p-4 rounded-lg space-y-3"
            >

              <div className="h-70 w-70 mx-auto bg-zinc-800 rounded-lg overflow-hidden">
  <img
    src={p.image}
    alt={p.name}
    className="w-full h-full object-cover"
  />
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
                 onClick={() => changeQty(p.id, -1)}
                  disabled={p.qty === 0}
                  className="w-8 h-8 bg-gray-800 rounded disabled:opacity-40"
                >
                  -
                </button>

                <span>{p.qty}</span>

                <button
                  onClick={() => changeQty(p.id, 1)}
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

      
{showTop && (
  <button
    onClick={() =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
    className="fixed bottom-32 right-4 bg-white text-black px-4 py-3 rounded-full shadow-lg z-50 transition-all duration-300 opacity-100 hover:scale-110 active:scale-95"
  >
    ⬆️
  </button>
)}
    </main>
    
    
    
  );
}