import { BrandingCardProps } from "@/app/_libs/types";
import Image from "next/image";

export default function BrandingCard({
  title,
  content,
  img,
  reverse,
}: BrandingCardProps) {
  return (
    <div
      className={`flex flex-col-reverse items-center justify-center gap-10 lg:flex-row lg:gap-5 ${reverse && "flex-col lg:flex-row-reverse"}`}
    >
      <div className="flex flex-col gap-3 px-10 lg:pr-0">
        <h2 className="text-5xl lg:text-5xl">{title}</h2>
        <ul className="flex list-disc flex-col gap-3 pl-3 font-grotesk">
          {content.map((item) => (
            <li key={item.content}>{item.content}</li>
          ))}
        </ul>
      </div>
      <div
        className={`floating-border-card relative -right-20 h-auto w-full max-w-[800px] object-cover before:bottom-[-30px] before:left-[-30px] sm:-right-32 lg:right-auto lg:mr-3 lg:h-auto lg:w-[500px] lg:rounded-md xl:mr-5 xl:before:bottom-auto xl:before:left-auto xl:before:right-[-25px] xl:before:top-[-25px] ${reverse && "before:bottom-auto before:left-auto before:right-[-30px] before:top-[-30px] xl:before:bottom-[-25px] xl:before:left-[-25px] xl:before:right-auto xl:before:top-auto"}`}
      >
        <Image
          src={img}
          alt="Collaboration"
          width={500}
          height={500}
          draggable={false}
          className="relative h-[350px] w-[500px] max-w-[800px] rounded-md object-cover lg:w-[500px]"
        />
      </div>
    </div>
  );
}
