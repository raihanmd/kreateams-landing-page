import TextFitContainer from "@/components/ui/text-fit-container";
import { BrandingContent } from "../../types";
import BrandingCard from "./BrandingCard";

export default function Branding() {
  return (
    <div className="mt-52">
      <TextFitContainer content="About" />
      <div className="flex flex-col gap-16 pt-36">
        <BrandingCard
          title="Why Collaboration..?"
          content={COLLABORATION}
          img="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <BrandingCard
          title="What we do..?"
          content={WHAT_WE_DO}
          img="https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?q=80&w=2564&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          reverse
        />
      </div>
    </div>
  );
}

const WHAT_WE_DO: BrandingContent[] = [
  {
    content:
      "We cultivate a supportive and inclusive environment where members can connect, collaborate, and learn from each other.",
  },
  {
    content:
      "Our regular workshops cover a variety of topics ranging from design principles to coding techniques, providing opportunities for skill development and knowledge sharing.",
  },
  {
    content:
      "We host networking events and meetups to facilitate connections and foster collaboration among members.",
  },
  {
    content:
      "Members have the chance to collaborate on real-world projects, allowing them to apply their skills, gain experience, and build their portfolios.",
  },
  {
    content:
      "Access a wealth of resources including tutorials, templates, and tools to support your creative projects and professional development.",
  },
  {
    content:
      "Our mentorship program pairs experienced professionals with aspiring creatives, providing guidance, feedback, and support along their journey.",
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
