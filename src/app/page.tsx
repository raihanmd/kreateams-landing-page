import Branding from "./_libs/components/Branding";
import Hero from "./_libs/components/Hero";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-2">
      <Hero />
      <Branding />
    </main>
  );
}
