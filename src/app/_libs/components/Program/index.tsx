import { TProgram } from "../../types";
import Card from "./Card";

export default function Program() {
  return (
    <div className="mt-20 bg-slate-800 text-background" id="our-programs">
      <div className="container flex flex-col gap-5 py-20">
        <div className="flex flex-col gap-3 font-neue">
          <p className="text-xl md:text-3xl">Our Programs -</p>
          <h3 className="text-5xl md:text-7xl">
            Ignite the Creative Journey: Dive into Our Vibrant Program Offerings
          </h3>
        </div>
        <div className="flex flex-col divide-y divide-primary-dark">
          {PROGRAMS.map((program, i) => (
            <Card key={program.title} program={program} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}

const PROGRAMS: TProgram[] = [
  {
    title: "Skill-Boosting Workshops and Learning Labs",
    content:
      "Dive deep into a world of knowledge and skill enhancement through our diverse range of workshops and learning labs. Whether you're a novice or a seasoned pro, our programs cater to all levels, providing valuable insights and hands-on experience to fuel your creative journey.",
    img: "https://images.unsplash.com/photo-1576595580361-90a855b84b20?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Creative Networking Soirées and Meetups",
    content:
      "Expand your professional network and connect with like-minded individuals at our vibrant networking events and meetups. These gatherings offer a platform to share ideas, collaborate on projects, and forge meaningful connections within the creative community.",
    img: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Real-world Project Based Learning Expeditions",
    content:
      "Put your skills into action and gain practical experience through our real-world project expeditions. Collaborate with peers, industry experts, and mentors to tackle real-world challenges, build your portfolio, and make a tangible impact in the digital realm.",
    img: "https://images.unsplash.com/photo-1634245482394-1bcf5ccffcc0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Awesome Tailored Mentorship Growth Odyssey",
    content:
      "Embark on a personalized mentorship journey tailored to your unique goals and aspirations. Paired with experienced professionals in your field of interest, you'll receive personalized guidance, feedback, and support to navigate your career path with confidence.",
    img: "https://images.unsplash.com/photo-1561346745-5db62ae43861?q=80&w=1966&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
