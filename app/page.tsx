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
    {/*Aqui se cargan los pruductos*/}

    {/* PRODUCTO 1 */}
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
        Controla la intensidad del aroma con regulador integrado.
      </p>

      <p className="text-2xl font-bold mb-4">
        $80 MXN
      </p>

      <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
        Comprar
      </button>
    </div>

    {/* PRODUCTO 2 */}
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
        Fragancia intensa y envolvente.
      </p>

      <p className="text-2xl font-bold mb-4">
        $75 MXN
      </p>

      <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
        Comprar
      </button>
    </div>

    {/* PRODUCTO 3 */}
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
        Ambientador para auto con fragancia continua.
      </p>

      <p className="text-2xl font-bold mb-4">
        $100 MXN
      </p>

      <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
        Comprar
      </button>
    </div>
    {/* PRODUCTO 4 */}
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
{/* PRODUCTO 5 */}
<div className="bg-zinc-900 rounded-2xl p-6">
  <img
    src="/products/4.jpeg"
    alt="Spray PLATINUM"
    className="h-[580px] w-full object-contain rounded-xl mb-4 bg-zinc-900 p-2"
  />

  <h3 className="text-2xl font-semibold mb-2">
    Spray PLATINUM
  </h3>

  <p className="text-gray-400 mb-4">
    Aroma premium de alta intensidad para espacios cerrados.
  </p>

  <p className="text-2xl font-bold mb-4">
    $95 MXN
  </p>

  <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
    Comprar
  </button>
</div>
{/* PRODUCTO 6 */}
<div className="bg-zinc-900 rounded-2xl p-6">
  <img
    src="/products/4.jpeg"
    alt="SANYWHERE"
    className="h-[580px] w-full object-contain rounded-xl mb-4 bg-zinc-900 p-2"
  />

  <h3 className="text-2xl font-semibold mb-2">
    SANYWHERE
  </h3>

  <p className="text-gray-400 mb-4">
    Aroma premium de alta intensidad para espacios cerrados.
  </p>

  <p className="text-2xl font-bold mb-4">
    $130 MXN
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