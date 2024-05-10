import Image from "next/image";

import { Button } from "@/components/ui/button";
import { GiSun } from "react-icons/gi";

export default function Hero() {
  return (
    <header className="relative z-[1] grid place-items-center gap-3 py-20 md:py-32">
      <Image
        draggable={false}
        className="absolute right-0 top-0 -z-10 mt-3 h-28 w-28 md:h-[180px] md:w-[180px]"
        src={"/icons/arrow.svg"}
        alt={"Arrow Icon"}
        width={100}
        height={100}
      />
      <Image
        draggable={false}
        src={"/images/collaborate.svg"}
        alt="Collaboration Image"
        height={300}
        width={300}
        className="absolute -bottom-24 left-0 -z-10 h-44 w-44 sm:h-52 sm:w-52 md:top-0 md:h-[300px] md:w-[300px]"
      />
      <Image
        draggable={false}
        src={"/images/design.svg"}
        alt="Design Image"
        height={300}
        width={300}
        className="absolute -bottom-28 right-0 -z-10 h-44 w-44 sm:h-52 sm:w-52 md:right-20 md:h-[300px] md:w-[300px]"
      />
      <Image
        draggable={false}
        src={"/images/creativity.svg"}
        alt="Creativity Image"
        height={300}
        width={300}
        className="absolute -bottom-52 left-1/2 -z-10 h-44 w-44 translate-x-[-50%] sm:h-52 sm:w-52 md:left-1/3 md:h-[300px] md:w-[300px]"
      />
      <div className="flex flex-col items-center gap-3 text-center">
        <h1 className="text-balance font-neue text-[clamp(2.7rem,_10vw,_10rem)] uppercase leading-[3.5rem] sm:leading-[4.5rem] md:leading-[5.5rem] lg:leading-[7rem] xl:leading-[9rem]">
          <span className="relative inline-block font-neue text-white before:absolute before:z-[-1] before:h-full before:w-full before:bg-black before:leading-[4rem]">
            Elevate
          </span>{" "}
          you
          <GiSun className="absolute z-[-1] inline -translate-y-8 text-yellow-400" />
          r skills, Collaborate across universe
        </h1>
        <p className="text-balance text-lg font-semibold sm:w-[80%] lg:text-xl xl:text-2xl">
          An Epic platform to help you connect with amazing tallents around the
          universe
        </p>
        <Button className="px-4 py-2 text-xl font-bold">Join Now</Button>
      </div>
    </header>
  );
}
