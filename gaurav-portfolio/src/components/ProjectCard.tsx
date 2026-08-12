import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
  useReducedMotion,
  type PanInfo,
} from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LiveProjectButton from "./LiveProjectButton";

// Apple's signature "easeOutExpo"-ish curve — used across apple.com product
// pages for anything that isn't spring-driven.
const APPLE_EASE = [0.16, 1, 0.3, 1] as const;
const SPRING = { stiffness: 260, damping: 32, mass: 0.4 };
const TAP_SPRING = { type: "spring" as const, stiffness: 400, damping: 17 };

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
  tags?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
  totalCards: number;
}

const AUTOPLAY_MS = 4500;
const SWIPE_THRESHOLD = 60;

export default function ProjectCard({
  project,
  index,
  totalCards,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [currentImage, setCurrentImage] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const imageCount = project.images.length;

  const nextImage = () => setCurrentImage((prev) => (prev + 1) % imageCount);
  const prevImage = () =>
    setCurrentImage((prev) => (prev === 0 ? imageCount - 1 : prev - 1));

  useEffect(() => {
    if (isPaused || imageCount <= 1) return;
    const timer = setInterval(nextImage, AUTOPLAY_MS);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImage, isPaused, imageCount]);

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x > SWIPE_THRESHOLD) prevImage();
    else if (info.offset.x < -SWIPE_THRESHOLD) nextImage();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  };

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  // How many cards will end up stacked in front of this one — deeper cards
  // recede further: smaller, dimmer, lifted back, tilted slightly away.
  const depth = shouldReduceMotion ? 0 : totalCards - 1 - index;

  const rawScale = useTransform(scrollYProgress, [0, 1], [1, 1 - depth * 0.04]);
  const rawLift = useTransform(scrollYProgress, [0, 1], [0, -depth * 16]);
  const rawTilt = useTransform(scrollYProgress, [0, 1], [0, depth * 2.2]);
  const rawDim = useTransform(
    scrollYProgress,
    [0, 1],
    [1, Math.max(0.55, 1 - depth * 0.12)],
  );

  const scale = useSpring(rawScale, SPRING);
  const y = useSpring(rawLift, SPRING);
  const rotateX = useSpring(rawTilt, SPRING);
  const dim = useSpring(rawDim, SPRING);
  const filter = useMotionTemplate`brightness(${dim})`;

  const active = project.images[currentImage];

  return (
    <div
      ref={ref}
      className="sticky top-24 h-[90vh] md:top-32"
      style={{ top: `${index * 28}px`, perspective: 1600 }}
    >
      <motion.div
        style={{ scale, y, rotateX, filter, transformStyle: "preserve-3d" }}
        className="h-full overflow-hidden rounded-[45px] border border-white/10 bg-[#0C0C0C] p-6 shadow-[0_40px_90px_-25px_rgba(0,0,0,0.7)] backdrop-blur-xl md:p-8"
      >
        <div className="flex h-full flex-col">
          {/* ================= Header ================= */}

          <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
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

          {project.tags && project.tags.length > 0 && (
            <div className="mb-6 flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-wide text-white/60"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* ================= Image ================= */}

          <div
            className="group relative flex-1 overflow-hidden rounded-[35px] bg-[#111]"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            onKeyDown={handleKeyDown}
            role="group"
            aria-roledescription="carousel"
            aria-label={`${project.name} images`}
            tabIndex={0}
          >
            {/* Background Blur */}

            <AnimatePresence mode="wait">
              <motion.img
                key={`bg-${currentImage}`}
                src={active.src}
                alt=""
                aria-hidden="true"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, ease: APPLE_EASE }}
                className="absolute inset-0 h-full w-full scale-110 object-cover opacity-20 blur-3xl"
              />
            </AnimatePresence>

            {/* Main Image */}

            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={active.src}
                alt={active.title}
                loading={index === 0 ? "eager" : "lazy"}
                drag={imageCount > 1 ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={handleDragEnd}
                initial={{ opacity: 0, scale: 1.09 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.85, ease: APPLE_EASE }}
                className="absolute inset-0 h-full w-full cursor-grab object-contain transition-transform duration-500 ease-out active:cursor-grabbing group-hover:scale-[1.03]"
              />
            </AnimatePresence>

            {imageCount > 1 && (
              <>
                <button
                  onClick={prevImage}
                  aria-label="Previous image"
                  className="absolute left-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-4 backdrop-blur-xl transition hover:border-[#7621B0] hover:bg-[#7621B0]"
                >
                  <ChevronLeft size={22} color="white" />
                </button>

                <button
                  onClick={nextImage}
                  aria-label="Next image"
                  className="absolute right-5 top-1/2 z-20 -translate-y-1/2 rounded-full border border-white/10 bg-black/30 p-4 backdrop-blur-xl transition hover:border-[#7621B0] hover:bg-[#7621B0]"
                >
                  <ChevronRight size={22} color="white" />
                </button>

                <div
                  className="absolute bottom-6 right-6 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-sm text-white backdrop-blur-xl"
                  aria-live="polite"
                >
                  {currentImage + 1} / {imageCount}
                </div>
              </>
            )}
          </div>
          {/* ================= Project Details ================= */}

          <div className="mt-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.55, ease: APPLE_EASE }}
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
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    transition={TAP_SPRING}
                    className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#7621B0] bg-[#7621B0]/10 px-6 py-3 text-sm font-semibold text-[#B66CFF] transition-colors duration-300 hover:bg-[#7621B0] hover:text-white"
                  >
                    View Design →
                  </motion.a>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* ================= Progress Bar ================= */}

          {imageCount > 1 && (
            <div className="mt-8 flex items-center justify-center gap-3">
              {project.images.map((img, i) => (
                <button
                  key={img.src}
                  onClick={() => setCurrentImage(i)}
                  aria-label={`Go to image ${i + 1}: ${img.title}`}
                  aria-current={currentImage === i}
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
          )}
        </div>
      </motion.div>
    </div>
  );
}
