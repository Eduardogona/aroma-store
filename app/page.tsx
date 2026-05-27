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
            <div className="h-56 bg-zinc-800 rounded-xl mb-4"></div>

            <h3 className="text-2xl font-semibold mb-2">
              Black Ice
            </h3>

            <p className="text-gray-400 mb-4">
              Aroma elegante y fresco.
            </p>

            <p className="text-2xl font-bold mb-4">
              $199 MXN
            </p>

            <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
              Comprar
            </button>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="h-56 bg-zinc-800 rounded-xl mb-4"></div>

            <h3 className="text-2xl font-semibold mb-2">
              Ocean Breeze
            </h3>

            <p className="text-gray-400 mb-4">
              Aroma limpio y relajante.
            </p>

            <p className="text-2xl font-bold mb-4">
              $249 MXN
            </p>

            <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
              Comprar
            </button>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-6">
            <div className="h-56 bg-zinc-800 rounded-xl mb-4"></div>

            <h3 className="text-2xl font-semibold mb-2">
              Luxury Wood
            </h3>

            <p className="text-gray-400 mb-4">
              Fragancia intensa y premium.
            </p>

            <p className="text-2xl font-bold mb-4">
              $299 MXN
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