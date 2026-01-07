import React from "react";

export default function Hero() {
  const avatars = [
    "https://i.pravatar.cc/100?img=12",
    "https://i.pravatar.cc/100?img=32",
    "https://i.pravatar.cc/100?img=45",
    "https://i.pravatar.cc/100?img=56",
    "https://i.pravatar.cc/100?img=68",
  ];

  return (
    <section className="relative w-full min-h-[90vh] bg-black flex items-center justify-center overflow-hidden">
      {/* Background grid + gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:80px_80px]" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Social proof */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <div className="flex -space-x-2">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="creator"
                className="w-8 h-8 rounded-full object-cover border border-black"
              />
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="flex text-yellow-400 text-sm">★★★★★</div>
            <span className="text-white text-sm">20 000+ creators</span>
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-white text-5xl md:text-6xl font-bold leading-tight">
          Done-for-You Infoproducts
        </h1>
        <h2 className="text-[#e63946] text-5xl md:text-6xl font-bold mt-4">
          to Grow Your Business
        </h2>

        {/* Subtitle */}
        <p className="mt-6 max-w-3xl mx-auto text-[#9ca3af] text-lg leading-relaxed">
          You can instantly have your own ebooks, courses, and more to sell or
          plug into your offers. Without high investments or months of creation.
        </p>

        {/* Features */}
        <div className="flex items-center justify-center gap-10 mt-10">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#e63946] text-white flex items-center justify-center text-sm">✓</div>
            <span className="text-white">Pre-Made Products</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 rounded-full bg-[#e63946] text-white flex items-center justify-center text-sm">✓</div>
            <span className="text-white">Fully Custom Creation</span>
          </div>
        </div>

        {/* Search */}
        <div className="mt-14 flex justify-center">
          <div className="relative w-full max-w-xl">
            <input
              type="text"
              placeholder="Find your next winning products"
              className="w-full h-14 rounded-full pl-6 pr-16 text-white placeholder-gray-400 bg-white/10 backdrop-blur outline-none"
            />
            <button className="absolute right-2 top-2 w-10 h-10 rounded-full bg-[#e63946] flex items-center justify-center text-white">
              🔍
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
