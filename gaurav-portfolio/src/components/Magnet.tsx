import { useRef, useState, type ReactNode, type MouseEvent as ReactMouseEvent } from 'react';

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export default function Magnet({
  children,
  padding = 150,
  strength = 3,
  activeTransition = 'transform 0.3s ease-out',
  inactiveTransition = 'transform 0.6s ease-in-out',
  className = '',
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState({ x: 0, y: 0 });
  const [isActive, setIsActive] = useState(false);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const withinX =
      e.clientX > rect.left - padding && e.clientX < rect.right + padding;
    const withinY =
      e.clientY > rect.top - padding && e.clientY < rect.bottom + padding;

    if (withinX && withinY) {
      const dx = (e.clientX - centerX) / strength;
      const dy = (e.clientY - centerY) / strength;
      setTransform({ x: dx, y: dy });
      setIsActive(true);
    } else {
      setTransform({ x: 0, y: 0 });
      setIsActive(false);
    }
  };

  const handleMouseLeave = () => {
    setTransform({ x: 0, y: 0 });
    setIsActive(false);
  };

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
        transition: isActive ? activeTransition : inactiveTransition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
}
