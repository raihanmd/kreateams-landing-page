import { AboutCardProps } from "@/app/_libs/types";
import Image from "next/image";

export default function Card({ title, content, img, reverse }: AboutCardProps) {
  return (
    <>
      <div
        className={`flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-5 ${reverse && "flex-col lg:flex-row-reverse"}`}
      >
        <div className="flex flex-col gap-3 px-3 sm:px-10 lg:pr-0">
          <h2 className="text-4xl md:text-5xl">{title}</h2>
          <ul className="flex list-disc flex-col gap-1 pl-3 font-grotesk text-xl text-neutral-600 md:gap-3 xl:text-2xl">
            {content.map((item) => (
              <li key={item.content}>{item.content}</li>
            ))}
          </ul>
        </div>
        <div
          className={`floating-border-card relative -right-20 h-auto w-full max-w-[800px] object-cover before:bottom-[-30px] before:left-[-30px] sm:-right-32 lg:right-auto lg:mr-3 lg:h-auto lg:w-[500px] lg:rounded-md lg:before:left-auto lg:before:right-[-20px] lg:before:top-[-20px] xl:mr-5 xl:before:bottom-auto ${reverse && "-left-20 right-auto before:bottom-auto before:left-auto before:right-[-30px] before:top-[-30px] lg:left-auto"}`}
        >
          <Image
            src={img}
            alt="Collaboration"
            width={500}
            height={500}
            draggable={false}
            className="relative h-[250px] w-full max-w-[800px] rounded-md object-cover md:h-[350px] lg:w-[500px]"
          />
        </div>
      </div>
    </>
  );
}
