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
  /*image: string;*/
  
};

export default function Home() {
  const { addItem, items } = useCart();

  const [openCart, setOpenCart] = useState(false);
  
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
  image : "/products/organic-can-sin-cherry.jpeg"
 
},




{
  id: "organic-can-sin-black",
  name: "Organic Can sin tapa",
  tag: "Black",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0
},
    {
  id: "organic-can-sin-new-car-shine",
  name: "Organic Can sin tapa",
  tag: "New Car Shine",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0
},
    {
  id: "organic-can-sin-bubble-gum",
  name: "Organic Can sin tapa",
  tag: "Bubble Gum",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0
},

{
  id: "organic-can-sin-tropic-twist",
  name: "Organic Can sin tapa",
  tag: "Tropic Twist",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0
},

{
  id: "organic-can-sin-pineapple-crush",
  name: "Organic Can sin tapa",
  tag: "Pineapple Crush",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "organic-can-sin-strawberry",
  name: "Organic Can sin tapa",
  tag: "Strawberry",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "organic-can-sin-vanilla-beach",
  name: "Organic Can sin tapa",
  tag: "Vanilla beach",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "organic-can-sin-cran-burst",
  name: "Organic Can sin tapa",
  tag: "Cran Burst",
  description: "Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "organic-can-cherry-con-tapa",
  name: "Organic Can con tapa",
  tag: "Cherry",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "organic-can-black-con-tapa",
  name: "Organic Can con tapa",
  tag: "Black",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "organic-can-new-car-shine-con-tapa",
  name: "Organic Can con tapa",
  tag: "New Car Shine",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "organic-can-cran-burst-con-tapa",
  name: "Organic Can",
  tag: "Cran Burst",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "organic-can-tropic-twist-con-tapa",
  name: "Organic Can",
  tag: "Tropic twist",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "organic-can-pineapple-crush-con-tapa",
  name: "Organic Can",
  tag: "Pineapple crush",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "organic-can-bubble-gum-con-tapa",
  name: "Organic Can",
  tag: "Bubble Gum",
  description: "Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "Super-Organic-pure-sunshine",
  name: "Super Organic",
  tag: "Pure Sunshine",
  description: "Ambientador de alta intensidad. Coloca la almohadilla bajo el asiento o en cualquier espacio para un aroma fresco y duradero.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "Little-joe-ocean-spash",
  name: "Little Joe",
  tag: "Ocean-spash",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "Little-joe-flower",
  name: "Little joe",
  tag: "Flower",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "Little-joe-black",
  name: "Little joe",
  tag: "Black",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "Little-Duck-happy-splash",
  name: "Little Duck",
  tag: "Happy Splash",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "Little-Dog-fresh-mint",
  name: "Little Dog",
  tag: "Fresh Mint",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "Little-joe-fruit",
  name: "Little joe",
  tag: "Fruit ",
  description: "Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "Spray-Platinum",
  name: "Spray Platinum",
  tag: "Cherry,Black,New car,Tropic Twist,Blue Lava",
  description: "Spray concentrado a base de aceite. Elimina malos olores y refresca al instante. Con pocas pulverizaciones, el aroma dura todo el día. También puede aplicarse en Organic Can y Super Organic para prolongar su fragancia. Ideal para usar en algodón y colocarlo en cualquier espacio.",
  price: 75,
  stock: 10,
  qty: 0
},
{
  id: "Anywhare-Spray",
  name: "Anywhare Spray",
  tag: "Cherry,Black,Lemon Lavender",
  description: "Elimina olores y refresca cualquier espacio con la tecnología PARA+ de eliminación de olores.",
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
  id: product.id,
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
              key={p.id}
              className="bg-zinc-900 p-4 rounded-lg space-y-3"
            >

              <div className="h-56 w-70 mx-auto bg-zinc-800 rounded-lg overflow-hidden">
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