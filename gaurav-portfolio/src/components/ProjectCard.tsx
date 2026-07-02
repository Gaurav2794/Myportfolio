import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import LiveProjectButton from "./LiveProjectButton";

export interface ProjectImage {
  src: string;
  description: string;
}

export interface Project {
  number: string;
  category: string;
  name: string;
  images: ProjectImage[];
  href?: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

export default function ProjectCard({
  project,
  index,
  totalCards,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % project.images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [project.images.length]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  const active = project.images[currentImage];

  return (
    <div
      ref={ref}
      className="sticky top-24 h-[85vh] md:top-32"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full rounded-[45px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 md:p-8"
      >
        <div className="flex h-full flex-col">
          {/* Header */}
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span
                className="font-black text-[#D7E2EA]"
                style={{ fontSize: "clamp(3rem,8vw,100px)" }}
              >
                {project.number}
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/50">
                  {project.category}
                </p>
                <h2 className="mt-2 text-2xl font-bold uppercase text-white md:text-5xl">
                  {project.name}
                </h2>
              </div>
            </div>
            <LiveProjectButton href={project.href} />
          </div>

          {/* Large Image */}
          <div className="relative flex-1 overflow-hidden rounded-[35px] bg-[#111]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7 }}
                className="absolute inset-0"
              >
                {/* Blurred Background */}
                <img
                  src={active.src}
                  className="absolute inset-0 h-full w-full object-cover blur-3xl scale-110 opacity-30"
                />
                {/* Actual Image */}
                <img
                  src={active.src}
                  className="relative z-10 h-full w-full object-contain"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Description */}
          <div className="mt-5 min-h-[2.5rem] text-center">
            <AnimatePresence mode="wait">
              <motion.p
                key={currentImage}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
                className="text-sm text-white/60 md:text-base"
              >
                {active.description}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="mt-4 flex justify-center gap-3">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className={`transition-all duration-300 ${
                  currentImage === i
                    ? "h-3 w-10 rounded-full bg-white"
                    : "h-3 w-3 rounded-full bg-white/30"
                }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}