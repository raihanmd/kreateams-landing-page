import Image from "next/image";

import { ProgramCardProps } from "@/app/_libs/types";
import { cn } from "@/lib/utils";

export default function Card({ program, index }: ProgramCardProps) {
  return (
    <div className="grid w-full place-items-center gap-5 px-5 py-10 lg:grid-cols-12 lg:place-items-start 2xl:px-0">
      <div className="grid gap-5 lg:col-span-6 xl:col-span-8 xl:grid-cols-5">
        <div className="flex flex-col font-bold xl:col-span-2">
          <p className="text-3xl">{program.title}</p>
          <p
            className={cn(
              "text-[5rem] text-transparent [-webkit-text-stroke:_2px_#f4b100] [text-stroke:_2px_#f4b100]",
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
      <div className="place-self-center lg:col-span-6 xl:col-span-4">
        <Image
          draggable={false}
          src={program.img}
          alt="Workshop"
          width={450}
          height={300}
          className="h-[300px] w-[450px] rounded-md object-cover"
        />
      </div>
    </div>
  );
}
