import React from "react";
import "./product.css";



const products = [

  {
    id: 1,
    title: "Scale Your Business with Smart Chatbot",
    image:
      "https://framerusercontent.com/images/EtEtDGxUG0Ad77Wr3z1FpahYmU.jpg",
  },
  {
    id: 2,
    title: "Preparing SOPs for Teams",
    image:
      "https://framerusercontent.com/images/PKJnAETGFhA4OrB9NDOesfMM54.jpg",
  },
  {
    id: 3,
    title: "AI Lesson Planning Guide",
    image:
      "https://framerusercontent.com/images/2UF3tLs2wFv0F8uLeMKNFehz8.jpg",
  },
  {
    id: 4,
    title: "Scale Your Business with Smart Chatbot",
    image:
      "https://framerusercontent.com/images/TYDu2MMuRepQ3GdnlMY73sc9s.jpg",
  },
  {
    id: 5,
    title: "Preparing SOPs for Teams",
    image:
      "https://framerusercontent.com/images/2HHSNbG5GaMa3yZLb2pjCWW3t0.jpg",
  },
  {
    id: 6,
    title: "AI Lesson Planning Guide",
    image:
      "https://framerusercontent.com/images/lT3jjUoN1cmNQCQqjUVhoX77g.jpg",
  },
  {
    id: 7,
    title: "Scale Your Business with Smart Chatbot",
    image:
      "https://framerusercontent.com/images/1rUySdCzb5lS3VAyEAZE7qLh3o.jpg",
  },
  {
    id: 8,
    title: "Preparing SOPs for Teams",
    image:
      "https://framerusercontent.com/images/Wr9HhCx7vrn01b4JOl7Ufykzoc.jpg",
  },
  {
    id: 9,
    title: "AI Lesson Planning Guide",
    image:
      "https://framerusercontent.com/images/sc5oXA52MCOst5FvLnTG83lUxJM.jpg",
  },
  {
    id: 10,
    title: "Scale Your Business with Smart Chatbot",
    image:
      "https://framerusercontent.com/images/iwLGjYqgjnXddCk79sA50BvXy48.jpg",
  },
  {
    id: 11,
    title: "Preparing SOPs for Teams",
    image:
      "https://framerusercontent.com/images/89dT58TDysdKQZu6QrvDXRTiTYM.jpg",
  },
  {
    id: 12,
    title: "AI Lesson Planning Guide",
    image:
      "https://framerusercontent.com/images/FiXcY4ebcdsEBU5LLEhw5t313M.jpg",
  },
  {
    id: 13,
    title: "Scale Your Business with Smart Chatbot",
    image:
      "https://framerusercontent.com/images/7vjWHHpfNznU13kWKalbY3FtZs.jpg",
  },
  {
    id: 14,
    title: "Scale Your Business with Smart Chatbot",
    image:
      "https://framerusercontent.com/images/7vjWHHpfNznU13kWKalbY3FtZs.jpg",
  },
  {
    id: 15,
    title: "Scale Your Business with Smart Chatbot",
    image:
      "https://framerusercontent.com/images/7vjWHHpfNznU13kWKalbY3FtZs.jpg",
  },
];




export default function Product() {
  return (
    <div className="product-wrapper">
      {/* HERO */}
      <section className="hero">
        <span className="badge">Be market ready today</span>
        <h1>
          Explore PLR products <br />
          <span>from the library</span>
        </h1>
        <p>Find your next winning digital products</p>
      </section>

      {/* PRODUCTS */}
      <section className="products-section">
        <div className="products-grid">
          {products.map((p) => (
            <div key={p.id} className="product-card fade-up">
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
