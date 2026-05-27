export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          Aroma Store
        </h1>

        <p className="text-gray-300 text-lg md:text-2xl max-w-2xl mb-8">
          Aromas premium para auto, hogar y oficina.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition">
          Ver Productos
        </button>
      </section>

      {/* PRODUCTOS */}
      <section className="px-8 pb-20">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Productos Destacados
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-zinc-900 rounded-2xl p-6">
            <img
  src="/products/1.jpeg"
  alt="Organic Can Con tapa"
  className="h-[580px] w-full object-contain rounded-xl mb-4 bg-zinc-900 p-2"
/>

            <h3 className="text-2xl font-semibold mb-2">
              Organic Can Con tapa
            </h3>

            <p className="text-gray-400 mb-4">
              Controla la intensidad del aroma con el regulador integrado en la tapa, desde una fragancia suave hasta más intensa.
            </p>

            <p className="text-2xl font-bold mb-4">
              $80,00 MXN
            </p>

            <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
              Comprar
            </button>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <img
  src="/products/2.jpeg"
  alt="Organic Can sin tapa"
  className="h-[580px] w-full object-contain rounded-xl mb-4 bg-zinc-900 p-2"
/>

            <h3 className="text-2xl font-semibold mb-2">
              Organic Can sin tapa
            </h3>

            <p className="text-gray-400 mb-4">
              Fragancia intensa y envolvente con almohadillas aromáticas y diseño abierto sin regulador de aroma.
            </p>

            <p className="text-2xl font-bold mb-4">
              $75 MXN
            </p>

            <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
              Comprar
            </button>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <img
  src="/products/3.jpeg"
  alt="LITTLE"
  className="h-[580px] w-full object-contain rounded-xl mb-4 bg-zinc-900 p-2"
/>

            <h3 className="text-2xl font-semibold mb-2">
              LITTLE
            </h3>

            <p className="text-gray-400 mb-4">
              Ambientador para auto. Colócalo en las rejillas de ventilación para disfrutar de una fragancia fresca y continua.
            </p>

            <p className="text-2xl font-bold mb-4">
              $$100 MXN
            </p>

            <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
              Comprar
            </button>
          </div>

<div className="bg-zinc-900 rounded-2xl p-6">
  <img
    src="/products/4.jpeg"
    alt="Super Organic"
    className="h-[580px] w-full object-contain rounded-xl mb-4 bg-zinc-900 p-2"
  />

  <h3 className="text-2xl font-semibold mb-2">
    Super Organic
  </h3>

  <p className="text-gray-400 mb-4">
    Ambientador de alta intensidad. Colócalo bajo el asiento o en cualquier espacio para disfrutar de un aroma fresco y duradero.
  </p>

  <p className="text-2xl font-bold mb-4">
    $80 MXN
  </p>

  <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
    Comprar
  </button>
</div>

<div className="bg-zinc-900 rounded-2xl p-6">
  <img
    src="/products/3.jpeg"
    alt="Spray PLATINUM"
    className="h-[580px] w-full object-contain rounded-xl mb-4 bg-zinc-900 p-2"
  />

  <h3 className="text-2xl font-semibold mb-2">
    Spray PLATINUM
  </h3>

  <p className="text-gray-400 mb-4">
    Spray concentrado a base de aceite. Elimina malos olores y refresca al instante. Con pocas pulverizaciones, el aroma dura todo el día. También puede aplicarse en Organic Can y Super Organic para prolongar su fragancia. Ideal para usar en algodón y colocarlo en cualquier espacio.
  </p>

  <p className="text-2xl font-bold mb-4">
    $95 MXN
  </p>

  <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
    Comprar
  </button>
</div>
<div className="bg-zinc-900 rounded-2xl p-6">
  <img
    src="/products/6.jpeg"
    alt="ANYWHERE"
    className="h-[580px] w-full object-contain rounded-xl mb-4 bg-zinc-900 p-2"
  />

  <h3 className="text-2xl font-semibold mb-2">
    ANYWHERE
  </h3>

  <p className="text-gray-400 mb-4">
    Elimina olores y refresca cualquier espacio con la tecnología PARA+ de eliminación de olores.
  </p>

  <p className="text-2xl font-bold mb-4">
    $140 MXN
  </p>

  <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
    Comprar
  </button>
</div>
  </div>
      </section>
    </main>
  );
}