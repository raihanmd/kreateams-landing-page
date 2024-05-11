import Image from "next/image";

export default function Card() {
  return (
    <div className="grid w-full place-items-center xl:grid-cols-12">
      <div className="col-span-4 flex flex-col gap-5 font-bold">
        <p className="text-3xl">Workshops and Learning Sessions</p>
        <p className="text-7xl text-transparent [-webkit-text-stroke:_2px_#f4b100] [text-stroke:_2px_#f4b100]">
          02
        </p>
      </div>
      <div className="col-span-4">
        <p>
          Dive deep into a world of knowledge and skill enhancement through our
          diverse range of workshops and learning labs. Whether you're a novice
          or a seasoned pro, our programs cater to all levels, providing
          valuable insights and hands-on experience to fuel your creative
          journey.
        </p>
      </div>
      <div className="col-span-4">
        <Image
          src={"https://source.unsplash.com/daily?workshop"}
          alt="Workshop"
          width={300}
          height={300}
        />
      </div>
    </div>
  );
}
