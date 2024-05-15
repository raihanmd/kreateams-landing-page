import Image from "next/image";

import { ProgramCardProps } from "@/app/_libs/types";
import { cn } from "@/lib/utils";

export default function Card({ program, index }: ProgramCardProps) {
  return (
    <div className="grid w-full place-items-center gap-5 px-5 py-10 md:px-20 lg:grid-cols-12 lg:place-items-start 2xl:px-0">
      <div className="grid gap-5 lg:col-span-6 xl:col-span-8 xl:grid-cols-5">
        <div className="relative mb-20 flex justify-between gap-5 font-bold lg:mb-0 lg:flex-col xl:col-span-2">
          <p className="z-[2] text-3xl">{program.title}</p>
          <p
            className={cn(
              "absolute right-0 top-12 z-[1] text-[6rem] text-transparent [-webkit-text-stroke:_2px_#f4b100] [text-stroke:_2px_#f4b100] sm:top-6 md:static md:right-auto md:top-auto lg:text-[5rem]",
              {
                "text-primary [-webkit-text-stroke:_0px] [text-stroke:_0px]":
                  index % 2 !== 0,
              },
            )}
          >
            0{index + 1}
          </p>
        </div>
        <div className="flex items-start justify-start xl:col-span-3">
          <p>{program.content}</p>
        </div>
      </div>
      <div className="flex flex-col items-end place-self-center [filter:_url(#flt_tag)] lg:col-span-6 xl:col-span-4">
        <Image
          draggable={false}
          src={program.img}
          alt="Workshop"
          width={450}
          height={300}
          className={cn(
            "h-[250px] w-[800px] rounded-md object-cover sm:h-[320px] md:h-[400px] lg:h-[300px] lg:w-[450px]",
            {
              "[clip-path:_polygon(0%_0%,_75%_0%,_100%_50%,_75%_100%,_0%_100%)]":
                index % 2 !== 0,
              "[clip-path:_polygon(25%_0%,_100%_0%,_100%_100%,_25%_100%,_0%_50%)]":
                index % 2 === 0,
            },
          )}
        />
        <svg
          className="absolute hidden size-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <filter id="flt_tag">
              <feGaussianBlur
                in="SourceGraphic"
                stdDeviation="8"
                result="blur"
              />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="flt_tag"
              />
              <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
