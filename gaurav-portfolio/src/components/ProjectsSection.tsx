import FadeIn from "./FadeIn";
import ProjectCard, { type Project } from "./ProjectCard";

import clientWork1 from "../assets/projects/clientWork/1.png";
import clientWork2 from "../assets/projects/clientWork/2.png";
import clientWork3 from "../assets/projects/clientWork/3.png";
import clientWork4 from "../assets/projects/clientWork/4.png";

import csi1 from "../assets/projects/CSI/1.png";
import csi2 from "../assets/projects/CSI/2.png";
import csi3 from "../assets/projects/CSI/3.png";

import dyp1 from "../assets/projects/DYPDPUengineering/1.png";
import dyp2 from "../assets/projects/DYPDPUengineering/2.png";
import dyp3 from "../assets/projects/DYPDPUengineering/3.png";
import dyp4 from "../assets/projects/DYPDPUengineering/4.png";
import dyp5 from "../assets/projects/DYPDPUengineering/5.png";
import dyp6 from "../assets/projects/DYPDPUengineering/6.png";
import dyp7 from "../assets/projects/DYPDPUengineering/7.png";
import dyp8 from "../assets/projects/DYPDPUengineering/8.png";
import dyp9 from "../assets/projects/DYPDPUengineering/9.png";
import dyp10 from "../assets/projects/DYPDPUengineering/10.png";
import dyp11 from "../assets/projects/DYPDPUengineering/11.png";
import dyp12 from "../assets/projects/DYPDPUengineering/12.png";
import dyp13 from "../assets/projects/DYPDPUengineering/13.png";

import p1 from "../assets/projects/personalWork/1.png";
import p2 from "../assets/projects/personalWork/2.png";
import p3 from "../assets/projects/personalWork/3.png";
import p4 from "../assets/projects/personalWork/4.png";

const PROJECTS: Project[] = [
  {
    number: "01",
    category: "Product Publication",
    name: "Everskin Aesthetics & The Momos Hub Pune",
    href: "#", // TODO: replace with real link
    images: [
      { src: clientWork1, description: "Everskin Aesthetics" },
      { src: clientWork2, description: "Everskin Aesthetics" },
      { src: clientWork3, description: "The Momos Hub Pune." },
      { src: clientWork4, description: "The Momos Hub Pune" },
    ],
  },
  {
    number: "02",
    category: "Event Management & Branding",
    name: "CSI DYPDPU",
    href: "https://www.instagram.com/csidit/", // TODO: replace with real link
    images: [
      {
        src: csi1,
        description: "Event branding and stage setup design for CSI DYPDPU.",
      },
      {
        src: csi2,
        description: "On-ground event production and coordination visuals.",
      },
      {
        src: csi3,
        description: "Post-event highlight and social recap creative.",
      },
    ],
  },
  {
    number: "03",
    category: "Social Media Campaign",
    name: "DYPDPU Engineering",
    href: "https://www.instagram.com/dypdpu.engineering/", // TODO: replace with real link
    images: [
      {
        src: dyp1,
        description: "Campaign kickoff creative for DYPDPU Engineering.",
      },
      { src: dyp2, description: "Departmental highlight post design." },
      { src: dyp3, description: "Student achievement feature graphic." },
      { src: dyp4, description: "Event announcement creative." },
      { src: dyp5, description: "Recruitment drive social post." },
      { src: dyp6, description: "Workshop promotional design." },
      { src: dyp7, description: "Faculty spotlight creative." },
      { src: dyp8, description: "Campus activity recap post." },
      { src: dyp9, description: "Technical fest announcement graphic." },
      { src: dyp10, description: "Alumni feature design." },
      { src: dyp11, description: "Placement drive highlight post." },
      { src: dyp12, description: "Engineering week celebration creative." },
      { src: dyp13, description: "Year-end wrap-up campaign visual." },
    ],
  },
  {
    number: "04",
    category: "Personal Creative work and social media",
    name: "Personal Projects",
    href: "https://www.instagram.com/gaurav_027_/", // TODO: replace with real link
    images: [
      {
        src: p1,
        description: "coursoul post for Sanskriti 2025",
      },
      { src: p2, description: "coursoul post for Sanskriti 2025" },
      { src: p3, description: "coursoul post for Acunetix 2026" },
      { src: p4, description: "coursoul post for Acunetix 2026" },
    ],
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="work"
      className="relative z-10 -mt-10 rounded-t-[40px] bg-[#0C0C0C] px-5 pb-32 pt-20 sm:-mt-12 sm:rounded-t-[50px] sm:px-8 md:-mt-14 md:rounded-t-[60px] md:px-10"
    >
      <FadeIn>
        <h2
          className="hero-heading mb-16 text-center font-black uppercase leading-none tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem,12vw,160px)" }}
        >
          Projects
        </h2>
      </FadeIn>
      <div className="mx-auto flex max-w-7xl flex-col gap-10">
        {PROJECTS.map((project, index) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={index}
            totalCards={PROJECTS.length}
          />
        ))}
      </div>
    </section>
  );
}
