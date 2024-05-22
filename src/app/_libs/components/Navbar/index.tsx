"use client";

import Link from "next/link";
import { useRef } from "react";
import { useBoolean } from "usehooks-ts";
import { useOnClickOutside } from "usehooks-ts";

import { Button } from "@/app/_libs/components/ui/button";
import HamburgerButton from "./HamburgerButton";

export default function Navbar() {
  const { value: isOpen, toggle, setFalse } = useBoolean(false);
  const toggleRef = useRef(null);

  useOnClickOutside(toggleRef, () => setFalse());

  return (
    <nav
      ref={toggleRef}
      className="sticky top-0 z-[5] w-full border-b-2 bg-secondary-dark px-2"
    >
      <div className="mx-auto max-w-7xl justify-between md:flex">
        <div className="flex items-center justify-between bg-secondary-dark">
          <div className="inline-flex items-center gap-2 bg-black px-5 py-5 font-bold text-white md:px-8 md:py-7">
            <Link
              href={"/"}
              className="font-neue text-4xl text-[clamp(1.2rem,_4vw,_2rem)] tracking-widest underline"
            >
              Kreateams
            </Link>
          </div>
          <div className="md:hidden">
            <HamburgerButton isOpen={isOpen} toggle={toggle} />
          </div>
        </div>
        <div
          className={`text-md absolute ${isOpen ? "top-20 opacity-100" : "top-[-490px] opacity-0"} -z-[10] -ml-2 flex w-full flex-col justify-end gap-3 border-y-2 bg-secondary-dark px-4 py-4 pb-10 font-semibold transition-all duration-500 ease-in md:relative md:top-0 md:z-auto md:flex-row md:items-center md:gap-8 md:border-0 md:bg-transparent md:p-0 md:pr-2 md:opacity-100 md:transition-none`}
        >
          {NAV_ITEMS.map((item) => (
            <Link onClick={setFalse} key={item.name} href={item.href}>
              {item.name}
            </Link>
          ))}
          <Button className="text-md font-semibold">Sign In</Button>
        </div>
      </div>
    </nav>
  );
}

const NAV_ITEMS = [
  {
    name: "About Us",
    href: "#about-us",
  },
  {
    name: "Programs",
    href: "#our-programs",
  },
  {
    name: "Sponsors",
    href: "#sponsors",
  },
];
