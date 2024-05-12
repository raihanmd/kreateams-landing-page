import Image from "next/image";

import { ProgramCardProps } from "@/app/_libs/types";
import { cn } from "@/lib/utils";

export default function Card({ program, index }: ProgramCardProps) {
  return (
    <div className="grid w-full place-items-center gap-5 py-10 xl:grid-cols-12">
      <div className="col-span-3 flex flex-col font-bold">
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
      <div className="col-span-5 flex items-start justify-start">
        <p>{program.content}</p>
      </div>
      <div className="col-span-4">
        <Image
          src={program.img}
          alt="Workshop"
          width={400}
          height={400}
          className="h-[300px] w-full rounded-md object-cover"
        />
      </div>
    </div>
  );
}
