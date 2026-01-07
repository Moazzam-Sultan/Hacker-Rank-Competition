import React from "react";

export default function PricingSection() {
  return (
    <div className="w-full text-white">

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        
        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#0b0b0b",
            backgroundImage: `
              radial-gradient(circle at center, rgba(255,255,255,0.08), transparent 60%),
              linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 60px 60px, 60px 60px",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl text-center">
          <span className="inline-block mb-6 rounded-full bg-red-600 px-5 py-2 text-sm font-semibold">
            Unlimited Business Library
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Discover done-for-you <br />
            digital products you can{" "}
            <span className="text-red-500">sell or use in any way</span>
          </h1>

          <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
            Imagine you have more than 1000 courses, books, templates, audios,
            and more. Your own digital library without limits.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 rounded-full bg-red-600 px-8 py-4 text-lg font-semibold hover:bg-red-700 transition">
            Learn about Master Library
          </button>
        </div>
      </section>

      {/* ===== IMAGE SECTION WITH SAME GRID BACKGROUND ===== */}
      <section className="relative py-28 px-6 overflow-hidden">
        
        {/* GRID BACKGROUND */}
        <div
          className="absolute inset-0"
          style={{
            backgroundColor: "#0b0b0b",
            backgroundImage: `
              radial-gradient(circle at center, rgba(255,255,255,0.06), transparent 60%),
              linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)
            `,
            backgroundSize: "100% 100%, 60px 60px, 60px 60px",
          }}
        />

        {/* IMAGE */}
        <div className="relative z-10 max-w-7xl mx-auto flex justify-center">
          <img
            src="https://framerusercontent.com/images/WHHBxNCjnjvNUWalCq4CwE7qhI.png?width=1839&height=1219"
            alt="Product Boxes"
            className="max-w-full h-auto"
          />
        </div>
      </section>
    </div>
  );
}
