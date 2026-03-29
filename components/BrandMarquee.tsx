"use client";

const BRANDS = [
  "Odyssey",
  "Craftd",
  "Power Bank",
  "Friday",
  "Numera Lighting",
  "Fused",
];

/* Duplicate the list so the second copy seamlessly follows the first */
const ITEMS = [...BRANDS, ...BRANDS];

export default function BrandMarquee() {
  return (
    <div className="relative py-10 overflow-hidden border-y border-[#3c0000] bg-[#100000]">
      {/* Left fade */}
      <div className="absolute left-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, #100000, transparent)" }} />
      {/* Right fade */}
      <div className="absolute right-0 top-0 h-full w-24 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, #100000, transparent)" }} />

      <div
        className="flex gap-0 w-max"
        style={{
          animation: "marquee 22s linear infinite",
          willChange: "transform",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.animationPlayState = "paused")}
        onMouseLeave={(e) => (e.currentTarget.style.animationPlayState = "running")}
      >
        {ITEMS.map((brand, i) => (
          <div key={i} className="flex items-center">
            <span className="text-sm font-semibold tracking-[0.25em] uppercase text-[#A48888]/50 hover:text-[#E87878] transition-colors duration-300 cursor-default whitespace-nowrap px-8">
              {brand}
            </span>
            <span className="w-1 h-1 rounded-full bg-[#3c0000] flex-shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
}
