
import Hero from "./Component/figma/HeroSection/page";
import Navbar from "./Component/figma/Navbar/page";
import Footer from "./Component/footer/page";
import Sponsors from "./Component/Sponsors";
export default function Home() {
  return (
  <div>
    <Navbar />
    <Hero />
    <Sponsors />
    <Footer />
  </div>
  );
}
