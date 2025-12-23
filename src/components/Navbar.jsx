export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b bg-white px-8 py-4">
      <h1 className="text-xl font-bold tracking-tight">Launchify</h1>
      <button className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:opacity-90 x">
        Get Started
      </button>
    </nav>
  );
}
