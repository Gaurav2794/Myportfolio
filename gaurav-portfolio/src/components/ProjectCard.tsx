import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LiveProjectButton from "./LiveProjectButton";

export interface ProjectImage {
  src: string;
  title: string;
  description: string;
  link?: string;
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

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1,
    );
  };

  useEffect(() => {
    const timer = setInterval(nextImage, 4000);

    return () => clearInterval(timer);
  }, [currentImage]);

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
      className="sticky top-24 h-[90vh] md:top-32"
      style={{ top: `${index * 28}px` }}
    >
      <motion.div
        style={{ scale }}
        className="h-full overflow-hidden rounded-[45px] border border-white/10 bg-[#0C0C0C] p-6 backdrop-blur-xl md:p-8"
      >
        <div className="flex h-full flex-col">
          {/* ================= Header ================= */}

          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-6">
              <span
                className="hero-heading font-black"
                style={{
                  fontSize: "clamp(3rem,8vw,100px)",
                }}
              >
                {project.number}
              </span>

              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-white/40">
                  {project.category}
                </p>

                <h2 className="mt-2 text-2xl font-bold uppercase text-white md:text-5xl">
                  {project.name}
                </h2>
              </div>
            </div>

            <LiveProjectButton href={project.href} />
          </div>

          {/* ================= Image ================= */}

          <div className="group relative flex-1 overflow-hidden rounded-[35px] bg-[#111]">
            {/* Background Blur */}

            <AnimatePresence mode="wait">
              <motion.img
                key={`bg-${currentImage}`}
                src={active.src}
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                transition={{
                  duration: 0.7,
                }}
                className="absolute inset-0 h-full w-full scale-110 object-cover blur-3xl opacity-20"
              />
            </AnimatePresence>

            {/* Main Image */}

            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={active.src}
                initial={{
                  opacity: 0,
                  scale: 1.08,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.96,
                }}
                transition={{
                  duration: 0.65,
                }}
                className="absolute inset-0 h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
              />
            </AnimatePresence>

            {/* Left */}

            <button
              onClick={prevImage}
              className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-4 backdrop-blur-xl transition hover:border-[#7621B0] hover:bg-[#7621B0]"
            >
              <ChevronLeft size={22} color="white" />
            </button>

            {/* Right */}

            <button
              onClick={nextImage}
              className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-4 backdrop-blur-xl transition hover:border-[#7621B0] hover:bg-[#7621B0]"
            >
              <ChevronRight size={22} color="white" />
            </button>

            {/* Image Counter */}

            <div className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-xl">
              {currentImage + 1} / {project.images.length}
            </div>
          </div>
          {/* ================= Project Details ================= */}

          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.45,
                }}
                className="text-center"
              >
                <h3 className="text-2xl font-semibold text-white">
                  {active.title}
                </h3>

                <p className="mx-auto mt-3 max-w-3xl text-base leading-relaxed text-white/60">
                  {active.description}
                </p>

                {active.link && (
                  <motion.a
                    href={active.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{
                      scale: 1.05,
                    }}
                    whileTap={{
                      scale: 0.96,
                    }}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#7621B0] bg-[#7621B0]/10 px-6 py-3 text-sm font-semibold text-[#B66CFF] transition-all duration-300 hover:bg-[#7621B0] hover:text-white"
                  >
                    View Design →
                  </motion.a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= Progress Bar ================= */}

          <div className="mt-8 flex items-center justify-center gap-3">
            {project.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentImage(i)}
                className="group"
              >
                <div
                  className={`h-1 rounded-full transition-all duration-500 ${
                    currentImage === i
                      ? "w-14 bg-[#7621B0]"
                      : "w-5 bg-white/20 group-hover:bg-white/40"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
