import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const x = useSpring(mouseX, {
    stiffness: 250,
    damping: 30,
  });

  const y = useSpring(mouseY, {
    stiffness: 250,
    damping: 30,
  });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouseX.set(e.clientX - 125);
      mouseY.set(e.clientY - 125);
    };

    window.addEventListener("mousemove", move);

    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x,
        y,
      }}
      className="pointer-events-none fixed left-0 top-0 z-[9999] h-[250px] w-[250px] rounded-full"
    >
      <div
        className="h-full w-full rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(118,33,176,0.28) 0%, rgba(118,33,176,0.18) 35%, rgba(118,33,176,0.08) 60%, transparent 80%)",
          filter: "blur(40px)",
        }}
      />
    </motion.div>
  );
}
