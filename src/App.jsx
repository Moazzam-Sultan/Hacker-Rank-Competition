import Navbar from "../src/components/Navbar.jsx";
import Hero from "../src/components/Hero.jsx";
import ImageMarquee from "../src/components/ImageMarquee.jsx";
import Features from "../src/components/Features.jsx";
import Reviews from "./components/Reviews.jsx";
import CommunitySection from "../src/components/CommunitySection.jsx";
import Products from "../src/components/Products.jsx";
import Pricing from "../src/components/Pricing.jsx";
import Footer from "../src/components/Footer.jsx";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <ImageMarquee />
      <Features />
      <Reviews />
      <CommunitySection />
      <Products />
      <Pricing />
      <Footer />
    </>
  );
}
