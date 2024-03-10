export default function Branding() {
  return (
    <div className="mt-48 grid gap-4 lg:grid-cols-2">
      <div
        id="what-we-do"
        className="neu flex w-full flex-col gap-4 bg-primary-light px-4 py-5 md:px-10"
      >
        <h3 className="text-center font-neue text-4xl">What We Do..?</h3>
        <div className="flex flex-col justify-center gap-3">
          {FEATURES.map((feature) => (
            <div className="flex gap-2" key={feature.name}>
              <p className="text-6xl text-yellow-600">*</p>
              <p>{feature.content}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="neu bg-secondary-dark lg:-translate-y-20">
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates
          beatae dicta provident? A, mollitia officia voluptatem eveniet maiores
          repellendus harum unde quasi nisi accusamus provident distinctio nemo
          labore quis minus facere asperiores omnis est ipsa accusantium saepe
          amet, voluptatibus hic.
        </p>
      </div>
    </div>
  );
}

const FEATURES = [
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
