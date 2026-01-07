import React from "react";

const framerImages = [
  "https://framerusercontent.com/images/SOfvcAOlzgfeTZml7rwTp84O9E.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/NeUwISmjPW4tIdBonFY3ltlgdM.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/ZOYr2xJx3EqJfT9HdpPoW2DDTA.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/hF12zY12PMtZD11xgvMh8ez3I4.jpeg?width=816&height=1156",
  "https://framerusercontent.com/images/SgZEAshIR8SgiX2sCNjtXkgNNNA.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/vXwg8VpYf1pMLVQmE8NbjEYipmk.jpeg?width=816&height=1169",
  "https://framerusercontent.com/images/22W09KHdo1QeaEyMvMsqgFciKU.jpeg?width=816&height=1166",
  "https://framerusercontent.com/images/ViYKAbSyrY13JlLpQJ1u594xlI.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/1EL3JrCHX1KpKsslf8i8syhI.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/t1aCHCw36kL8TtQSWKCWXE8V8.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/pX3BLff8NWhSllGRgrIiIM2exE.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/iPBxmmH3n1p1akKkP9PRogQWjA.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/OgqwX98DwyKg9hkQiMR1WMWxy0.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/ikk7TJCpTFY4OMr43oTQtFKxfkU.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/fFcfRq5ReDnP6JcPd5pRECcNWQ.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/UZgvJOl7LloDdmg0PVsVpdwby8.jpeg?width=816&height=1169",
  "https://framerusercontent.com/images/547Vblcrhjnad86yKZsIU8TkTs.jpeg?width=800&height=1169",
  "https://framerusercontent.com/images/Fx20IPHRUB04aBQIkkN8fq6h0Oc.jpeg?width=816&height=1169",
];

function ImageMarquee() {
  return (
    <section className="relative bg-black overflow-hidden pt-0 pb-0 -mt-32 group w-screen">

      {/* LEFT SIDE BLUR - Black fade */}
      <div className="pointer-events-none absolute left-0 top-0 z-30 h-full w-80 bg-gradient-to-r from-black via-black/95 to-transparent backdrop-blur-[3px]" />
      
      {/* RIGHT SIDE BLUR - Same as left side */}
      <div className="pointer-events-none absolute right-0 top-0 z-30 h-full w-80 bg-gradient-to-l from-black via-black/95 to-transparent backdrop-blur-[3px]" />

      {/* 3D CONTAINER */}
      <div 
        className="w-full overflow-hidden"
        style={{
          transform: "perspective(1200px) scale(0.65) rotateX(25deg)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* MARQUEE CONTAINER - FIXED: Calculate based on total width */}
        <div className="flex w-max animate-marquee group-hover:animation-paused">
          {/* First set */}
          {framerImages.map((img, index) => (
            <div 
              key={`set1-${index}`}
              className="flex-shrink-0 mx-8"
              style={{ width: "320px", height: "480px" }}
            >
              <img
                src={img}
                alt={`Book ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300"
              />
            </div>
          ))}
          
          {/* Second set - EXACT DUPLICATE */}
          {framerImages.map((img, index) => (
            <div 
              key={`set2-${index}`}
              className="flex-shrink-0 mx-8"
              style={{ width: "320px", height: "480px" }}
            >
              <img
                src={img}
                alt={`Book ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300"
              />
            </div>
          ))}
          
          {/* Third set - EXACT DUPLICATE */}
          {framerImages.map((img, index) => (
            <div 
              key={`set3-${index}`}
              className="flex-shrink-0 mx-8"
              style={{ width: "320px", height: "480px" }}
            >
              <img
                src={img}
                alt={`Book ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300"
              />
            </div>
          ))}
          
          {/* Fourth set - For better seamless loop */}
          {framerImages.map((img, index) => (
            <div 
              key={`set4-${index}`}
              className="flex-shrink-0 mx-8"
              style={{ width: "320px", height: "480px" }}
            >
              <img
                src={img}
                alt={`Book ${index + 1}`}
                className="w-full h-full object-cover rounded-xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Corrected animation */}
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-320px * ${framerImages.length} - 8px * ${framerImages.length * 2}));
          }
        }
        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animation-paused {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}

export default ImageMarquee;