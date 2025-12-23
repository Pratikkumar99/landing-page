const steps = [
  "Sign up for free",
  "Customize your page",
  "Launch and grow",
];

export default function HowItWorks() {
  return (
    <section className="px-8 py-20">
      <h2 className="mb-12 text-center text-3xl font-bold">
        How It Works
      </h2>
      <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-3">
        {steps.map((step, i) => (
          <div
            key={i}
            className="rounded-lg border p-6 text-center"
          >
            <span className="mb-4 inline-block text-2xl font-bold">
              {i + 1}
            </span>
            <p className="text-gray-600">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
