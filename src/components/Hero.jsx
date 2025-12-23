export default function Hero() {
  return (
    <section className="px-6 py-28 text-center">
      
      <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight">
        Launch Your Product <br className="hidden sm:block" />
        <span className="text-gray-500">Faster & Smarter</span>
      </h1>

      <p className="mx-auto mb-10 max-w-xl text-gray-600">
        A clean, responsive landing page designed to convert users and showcase
        modern frontend skills.
      </p>

      <div className="flex justify-center gap-4">
        <button className="rounded-lg bg-black px-8 py-3 text-white rounded-lg bg-black px-8 py-3 text-white
    transition-all duration-200
    hover:-translate-y-1 hover:shadow-lg x">
          Get Started
        </button>

        <button
          onClick={() =>
            document
              .getElementById("features")
              .scrollIntoView({ behavior: "smooth" })
          }
          className="rounded-lg border px-8 py-3 rounded-lg px-8 py-3 transition-all duration-200
    hover:-translate-y-1 hover:shadow-lg x"
        >
          View Features
        </button>
      </div>
    </section>
  );
}
