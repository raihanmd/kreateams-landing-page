import Card from "./Card";

export default function Program() {
  return (
    <div className="mt-20 bg-slate-800 text-background" id="our-programs">
      <div className="container flex flex-col gap-5 py-20">
        <div className="flex flex-col gap-3 font-neue">
          <p className="text-3xl">Our Programs -</p>
          <h3 className="text-7xl">
            Ignite the Creative Journey: Dive into Our Vibrant Program Offerings
          </h3>
        </div>
        <Card />
      </div>
    </div>
  );
}
