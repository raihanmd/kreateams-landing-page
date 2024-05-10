import Branding from "./_libs/components/Branding";
import Hero from "./_libs/components/Hero";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden px-2 lg:overflow-visible">
      <Hero />
      <Branding />
    </main>
  );
}
