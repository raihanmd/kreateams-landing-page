import TextFitContainer from "@/app/_libs/components/ui/text-fit-container";
import { BrandingContent } from "../../types";
import Card from "./Card";
import Mission from "./Mission";

export default function About() {
  return (
    <div className="overflow container mt-52" id="about-us">
      <div>
        <TextFitContainer content="About" />
        <div className="flex flex-col gap-16 pt-36">
          <Card
            title="What we do..?"
            content={WHAT_WE_DO}
            img="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Mission />
          <Card
            title="Why Collaboration..?"
            content={COLLABORATION}
            img="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            reverse
          />
        </div>
      </div>
    </div>
  );
}

const WHAT_WE_DO: BrandingContent[] = [
  {
    content:
      "We foster a supportive, inclusive environment for collaboration and learning.",
  },
  {
    content:
      "Regular workshops cover design principles, coding techniques, and more.",
  },
  {
    content:
      "Networking events and meetups facilitate connections and collaboration.",
  },
  {
    content:
      "Members collaborate on real-world projects to gain experience and build portfolios.",
  },
];

const COLLABORATION: BrandingContent[] = [
  {
    content:
      "Collaboration allows us to leverage the unique strengths of each team member.",
  },
  {
    content:
      "We believe in the power of interdisciplinary collaboration where individuals from different backgrounds come together.",
  },
  {
    content:
      "Effective collaboration relies on open and transparent communication.",
  },
  {
    content:
      "Collaborative projects are guided by shared goals and objectives.",
  },
  {
    content:
      "Collaboration is also a journey of continuous learning and growth through collaboration.",
  },
];
