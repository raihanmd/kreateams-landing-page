import About from "./_libs/components/About";
import Footer from "./_libs/components/Footer";
import Hero from "./_libs/components/Hero";
import Join from "./_libs/components/Join";
import Program from "./_libs/components/Program";
import Sponsor from "./_libs/components/Sponsor";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Program />
      <Sponsor />
      <Join />
      <Footer />
    </main>
  );
}
