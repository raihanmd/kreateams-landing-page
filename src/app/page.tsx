import About from "./_libs/components/About";
import Hero from "./_libs/components/Hero";
import Join from "./_libs/components/Join";
import Program from "./_libs/components/Program";

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <Program />
      <Join />
    </main>
  );
}
