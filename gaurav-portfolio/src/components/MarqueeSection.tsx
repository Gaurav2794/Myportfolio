import { useEffect, useRef, useState } from 'react';

const ROW_1 = [
  { label: 'Brand Identity', gradient: 'linear-gradient(135deg, #18011F 0%, #7621B0 100%)' },
  { label: 'Social Media', gradient: 'linear-gradient(135deg, #2d1b3d 0%, #B600A8 100%)' },
  { label: 'Content Strategy', gradient: 'linear-gradient(135deg, #1a1a1f 0%, #BE4C00 100%)' },
  { label: 'Campaign Design', gradient: 'linear-gradient(135deg, #18011F 0%, #B600A8 60%, #BE4C00 100%)' },
  { label: 'Reels & Motion', gradient: 'linear-gradient(135deg, #0c0c0c 0%, #646973 100%)' },
  { label: 'Graphic Design', gradient: 'linear-gradient(135deg, #7621B0 0%, #18011F 100%)' },
];

const ROW_2 = [
  { label: 'Community Growth', gradient: 'linear-gradient(135deg, #BE4C00 0%, #18011F 100%)' },
  { label: 'Event Branding', gradient: 'linear-gradient(135deg, #B600A8 0%, #1a1a1f 100%)' },
  { label: 'UI / UX Design', gradient: 'linear-gradient(135deg, #646973 0%, #0c0c0c 100%)' },
  { label: 'Ad Creatives', gradient: 'linear-gradient(135deg, #7621B0 0%, #BE4C00 100%)' },
  { label: 'Analytics & Insight', gradient: 'linear-gradient(135deg, #18011F 0%, #646973 100%)' },
];

function Tile({ label, gradient }: { label: string; gradient: string }) {
  return (
    <div
      className="flex h-[270px] w-[420px] flex-shrink-0 items-center justify-center rounded-2xl"
      style={{ background: gradient }}
    >
      <span className="hero-heading px-6 text-center text-2xl font-bold uppercase tracking-wide">
        {label}
      </span>
    </div>
  );
}

export default function MarqueeSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = sectionRef.current;
      if (!el) return;
      const sectionTop = el.getBoundingClientRect().top + window.scrollY;
      const value = (window.scrollY - sectionTop + window.innerHeight) * 0.3;
      setOffset(value);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const row1Tripled = [...ROW_1, ...ROW_1, ...ROW_1];
  const row2Tripled = [...ROW_2, ...ROW_2, ...ROW_2];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0C0C0C] pb-10 pt-24 sm:pt-32 md:pt-40"
      style={{ overflowX: 'clip' }}
    >
      <div className="flex flex-col gap-3">
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${offset - 200}px)`, willChange: 'transform' }}
        >
          {row1Tripled.map((item, i) => (
            <Tile key={`r1-${i}`} label={item.label} gradient={item.gradient} />
          ))}
        </div>
        <div
          className="flex gap-3"
          style={{ transform: `translateX(${-(offset - 200)}px)`, willChange: 'transform' }}
        >
          {row2Tripled.map((item, i) => (
            <Tile key={`r2-${i}`} label={item.label} gradient={item.gradient} />
          ))}
        </div>
      </div>
    </section>
  );
}
