import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "../../ui/button";

export default function Mission() {
  return (
    <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 px-4 py-10 lg:grid-cols-12">
      <h2 className="col-span-1 text-3xl font-bold lg:col-span-2">
        Our Mission
      </h2>
      <div className="col-span-1 text-justify lg:col-span-10">
        <p className="mb-4 text-xl text-neutral-600 xl:text-2xl">
          We are dedicated to empowering individuals from diverse backgrounds to
          unleash their creative potential. Through the inclusive community we
          cultivate, we foster collaboration, innovation, and lifelong learning.
          With a focus on diversity, excellence, and positive impact, we lead
          the way towards a brighter and sustainable future.
        </p>
        <p className="mb-8 text-xl text-neutral-600 xl:text-2xl">
          Become part of our dynamic and rapidly growing community. Join now to
          access educational resources, collaboration opportunities, and the
          support you need to succeed in the creative world. Together, we can
          make meaningful change and inspire the generations to come.
        </p>
        <Button className="px-9 py-4 text-xl">
          Join Now! <FiArrowUpRight className="inline" />
        </Button>
      </div>
    </div>
  );
}
