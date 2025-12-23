const features = [
  {
    title: "Fast Performance",
    desc: "Optimized and lightning-fast React architecture.",
  },
  {
    title: "Fully Responsive",
    desc: "Looks great on mobile, tablet, and desktop.",
  },
  {
    title: "Easy Customization",
    desc: "Modify content and styles with ease.",
  },
];

export default function Features() {
  return (
    <section id="features"
      className="bg-gray-50 px-8 py-20">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Why Choose Launchify?
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((item, index) => (
          <div
            key={index}
            className="rounded-xl border bg-white p-6 shadow-sm"
          >
            <h3 className="mb-3 text-xl font-semibold">{item.title}</h3>
            <p className="text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
