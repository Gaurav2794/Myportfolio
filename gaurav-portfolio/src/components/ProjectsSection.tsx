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
    href: "#",
    images: [
      {
        src: clientWork1,
        title: "Laser Hair Removal",
        description:
          "Premium Instagram campaign designed for Everskin Aesthetics.",
      },
      {
        src: clientWork2,
        title: "Hydra Facial",
        description: "Luxury skincare promotional creative for Everskin.",
      },
      {
        src: clientWork3,
        title: "The Momos Hub",
        description: "Social media food advertisement for The Momos Hub Pune.",
      },
      {
        src: clientWork4,
        title: "Special Combo",
        description:
          "Restaurant promotional design highlighting signature meals.",
      },
    ],
  },

  {
    number: "02",
    category: "Event Management & Branding",
    name: "CSI DYPDPU",
    href: "https://www.instagram.com/csidit/",
    images: [
      {
        src: csi1,
        title: "Event Branding",
        description: "Brand identity and promotional creatives for CSI DYPDPU.",
      },
      {
        src: csi2,
        title: "Event Production",
        description: "On-ground event execution and coordination visuals.",
      },
      {
        src: csi3,
        title: "Event Highlights",
        description: "Social media recap and post-event campaign design.",
      },
    ],
  },

  {
    number: "03",
    category: "Social Media Campaign",
    name: "DYPDPU Engineering",
    href: "https://www.instagram.com/dypdpu.engineering/",
    images: [
      {
        src: dyp1,
        title: "Campaign Launch",
        description: "Opening campaign creative for DYPDPU Engineering.",
      },
      {
        src: dyp2,
        title: "Department Highlight",
        description: "Department promotional social media design.",
      },
      {
        src: dyp3,
        title: "Student Achievement",
        description: "Creative celebrating outstanding student achievements.",
      },
      {
        src: dyp4,
        title: "Event Announcement",
        description: "Promotional design for engineering events.",
      },
      {
        src: dyp5,
        title: "Admissions Campaign",
        description: "Creative supporting admissions and recruitment.",
      },
      {
        src: dyp6,
        title: "Workshop Promotion",
        description: "Workshop promotional poster for students.",
      },
      {
        src: dyp7,
        title: "Faculty Spotlight",
        description: "Social media post introducing faculty members.",
      },
      {
        src: dyp8,
        title: "Campus Activities",
        description: "Highlights from campus activities and events.",
      },
      {
        src: dyp9,
        title: "Technical Fest",
        description: "Technical festival announcement campaign.",
      },
      {
        src: dyp10,
        title: "Alumni Feature",
        description: "Creative highlighting successful alumni.",
      },
      {
        src: dyp11,
        title: "Placement Drive",
        description: "Placement campaign for final-year students.",
      },
      {
        src: dyp12,
        title: "Engineering Week",
        description: "Special creative celebrating Engineering Week.",
      },
      {
        src: dyp13,
        title: "Year in Review",
        description: "Year-end social media wrap-up campaign.",
      },
    ],
  },

  {
    number: "04",
    category: "Personal Creative Work",
    name: "Personal Projects",
    href: "https://www.instagram.com/gaurav_027_/",
    images: [
      {
        src: p1,
        title: "Sanskriti 2025",
        description: "Carousel post designed for Sanskriti 2025.",
      },
      {
        src: p2,
        title: "Sanskriti Promotion",
        description: "Festival branding and social media carousel.",
      },
      {
        src: p3,
        title: "Acunetix 2026",
        description: "Creative campaign for Acunetix 2026.",
      },
      {
        src: p4,
        title: "Brand Promotion",
        description: "Instagram campaign designed for Acunetix.",
      },
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
