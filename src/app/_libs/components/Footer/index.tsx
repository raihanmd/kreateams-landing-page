import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-blue-gray-50 mt-60 w-full border-t">
      <div className="flex w-full flex-row flex-wrap items-center justify-center gap-x-12 gap-y-6 py-6 text-center md:container md:justify-between">
        <p className="text-md">&copy; {new Date().getFullYear()} Kreateams</p>
        <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 font-bold">
          <li>
            <Link
              href="#about-us"
              color="blue-gray"
              className="text-md transition-colors hover:text-primary-darker focus:text-primary-darker"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="#our-programs"
              color="blue-gray"
              className="text-md transition-colors hover:text-primary-darker focus:text-primary-darker"
            >
              Programs
            </Link>
          </li>
          <li>
            <Link
              href="#sponsors"
              color="blue-gray"
              className="text-md transition-colors hover:text-primary-darker focus:text-primary-darker"
            >
              Sponsors
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}
