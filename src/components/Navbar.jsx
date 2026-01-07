import React from "react";

function MegaDropdown({ title, left, right }) {
  return (
    <li className="relative group cursor-pointer">
      <span className="hover:text-red-500">{title} ▾</span>

      <div className="absolute left-1/2 top-full mt-6 -translate-x-1/2 w-[900px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
        <div className="bg-black rounded-2xl p-8 grid grid-cols-2 gap-8 shadow-2xl border border-zinc-800">
          {left}
          {right}
        </div>
      </div>
    </li>
  );
}

export default function Navbar() {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-red-600 text-white text-sm py-2 flex justify-center gap-4">
        <span className="bg-black px-4 py-1 rounded-full font-semibold">
          Kickstart 2026 🔥
        </span>
        <span>Save 70% on All Products</span>
      </div>

      {/* Navbar */}
      <nav className="bg-black text-white px-10 py-5 relative z-50">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-red-600 w-8 h-8 flex items-center justify-center rounded font-bold">
              E
            </div>
            <span className="font-semibold">ENTREPEDIA</span>
          </div>

          {/* Menu */}
          <ul className="hidden md:flex items-center gap-8 bg-zinc-900 px-8 py-3 rounded-full">
            <li className="hover:text-red-500 cursor-pointer">Home</li>

            {/* PRODUCTS */}
            <MegaDropdown
              title="Products"
              left={
                <div className="bg-gradient-to-br from-black to-zinc-900 rounded-xl p-8 relative">
                  <span className="absolute top-6 right-6 bg-red-600 text-xs px-3 py-1 rounded-full">
                    Save 70%
                  </span>
                  <div className="mb-6 text-3xl">📘</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Master Library
                  </h3>
                  <p className="text-zinc-400 mb-6">
                    1000+ PLR products to resell, rebrand, or customize.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>Learn More →</div>
                    <div>Explore Products →</div>
                    <div>Start For Free →</div>
                    <div>Pricing →</div>
                  </div>
                </div>
              }
              right={
                <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl p-8">
                  <div className="mb-6 text-3xl">⚙️</div>
                  <h3 className="text-2xl font-semibold mb-4">Tools</h3>
                  <ul className="space-y-4 text-sm">
                    <li>Product Ideator</li>
                    <li>Description Writer</li>
                    <li>Book Title Generator</li>
                    <li>PDF Rebrander</li>
                  </ul>
                </div>
              }
            />

            {/* SERVICES */}
            <MegaDropdown
              title="Services"
              left={
                <div className="bg-gradient-to-br from-black to-zinc-900 rounded-xl p-8">
                  <div className="mb-6 text-3xl">🛠️</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Done-For-You
                  </h3>
                  <p className="text-zinc-400 mb-6">
                    We build and launch digital products for you.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>Custom Ebooks</div>
                    <div>Course Creation</div>
                    <div>Branding & Design</div>
                  </div>
                </div>
              }
              right={
                <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl p-8">
                  <div className="mb-6 text-3xl">🤝</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Consulting
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li>Product Strategy</li>
                    <li>Offer Optimization</li>
                    <li>Launch Planning</li>
                    <li>Growth Consulting</li>
                  </ul>
                </div>
              }
            />

            {/* RESOURCES */}
            <MegaDropdown
              title="Resources"
              left={
                <div className="bg-gradient-to-br from-black to-zinc-900 rounded-xl p-8">
                  <div className="mb-6 text-3xl">🎁</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Free Resources
                  </h3>
                  <p className="text-zinc-400 mb-6">
                    Learn & grow with free tools and downloads.
                  </p>
                  <div className="space-y-3 text-sm">
                    <div>Free PLR Samples</div>
                    <div>Templates</div>
                    <div>Checklists</div>
                  </div>
                </div>
              }
              right={
                <div className="bg-gradient-to-br from-zinc-900 to-black rounded-xl p-8">
                  <div className="mb-6 text-3xl">📚</div>
                  <h3 className="text-2xl font-semibold mb-4">
                    Learning Hub
                  </h3>
                  <ul className="space-y-4 text-sm">
                    <li>Guides & Tutorials</li>
                    <li>Case Studies</li>
                    <li>Community</li>
                    <li>Blog</li>
                  </ul>
                </div>
              }
            />

            <li className="hover:text-red-500 cursor-pointer">About</li>
          </ul>

          {/* Auth */}
          <button className="bg-zinc-900 px-6 py-2 rounded-full hover:bg-zinc-800">
            Sign in
          </button>
        </div>
      </nav>
    </>
  );
}
