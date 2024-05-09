import TextFitContainer from "@/components/ui/text-fit-container";

export default function Branding() {
  return (
    <div className="mt-52">
      <TextFitContainer content="About" />
      <div className="flex pt-36">
        <div className="flex gap-2">
          <h2 className="text-3xl lg:text-5xl">What is Collaboration..?</h2>
          <div>p</div>
        </div>
      </div>
    </div>
  );
}

const WHAT_WE_DO = [
  {
    name: "Community Building",
    content:
      "We cultivate a supportive and inclusive environment where members can connect, collaborate, and learn from each other.",
  },
  {
    name: "Creative Workshops",
    content:
      "Our regular workshops cover a variety of topics ranging from design principles to coding techniques, providing opportunities for skill development and knowledge sharing.",
  },
  {
    name: "Networking Events",
    content:
      "We host networking events and meetups to facilitate connections and foster collaboration among members.",
  },
  {
    name: "Project Collaboration",
    content:
      "Members have the chance to collaborate on real-world projects, allowing them to apply their skills, gain experience, and build their portfolios.",
  },
  {
    name: "Resource Sharing",
    content:
      "Access a wealth of resources including tutorials, templates, and tools to support your creative projects and professional development.",
  },
  {
    name: "Mentorship Program",
    content:
      "Our mentorship program pairs experienced professionals with aspiring creatives, providing guidance, feedback, and support along their journey.",
  },
];

const COLLABORATION = [
  {
    name: "Synergy",
    content:
      "Collaboration allows us to leverage the unique strengths of each team member, resulting in synergistic outcomes that are more innovative and impactful than individual efforts.",
  },
  {
    name: "Cross-disciplinary Exchange",
    content:
      "We believe in the power of interdisciplinary collaboration, where individuals from different backgrounds come together to tackle complex challenges and explore new possibilities.",
  },
  {
    name: "Open Communication",
    content:
      "Effective collaboration relies on open and transparent communication. We encourage active listening, constructive feedback, and dialogue to ensure that everyone's voice is heard and valued.",
  },
  {
    name: "Shared Goals",
    content:
      "Collaborative projects are guided by shared goals and objectives. By aligning our efforts towards a common purpose, we can achieve collective success and drive positive change.",
  },
  {
    name: "Continuous Learning",
    content:
      "Collaboration is also a journey of continuous learning and growth. Through collaboration, we expand our horizons, acquire new skills, and gain valuable insights from our peers.",
  },
];
