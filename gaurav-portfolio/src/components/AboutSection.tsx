import FadeIn from './FadeIn';
import AnimatedText from './AnimatedText';
import ContactButton from './ContactButton';

function DecorShape({ gradient, className }: { gradient: string; className?: string }) {
  return (
    <div
      className={`absolute rounded-full blur-sm ${className}`}
      style={{ background: gradient }}
    />
  );
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen flex-col items-center justify-center gap-10 overflow-hidden px-5 py-20 sm:gap-14 sm:px-8 md:gap-16 md:px-10"
    >
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
        <DecorShape
          gradient="radial-gradient(circle at 30% 30%, #646973, #0c0c0c)"
          className="absolute left-[1%] top-[4%] h-[120px] w-[120px] sm:left-[2%] sm:h-[160px] sm:w-[160px] md:left-[4%] md:h-[210px] md:w-[210px]"
        />
      </FadeIn>
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
        <DecorShape
          gradient="linear-gradient(135deg, #7621B0, #18011F)"
          className="absolute bottom-[8%] left-[3%] h-[100px] w-[100px] rounded-3xl sm:left-[6%] sm:h-[140px] sm:w-[140px] md:left-[10%] md:h-[180px] md:w-[180px]"
        />
      </FadeIn>
      <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
        <DecorShape
          gradient="linear-gradient(135deg, #BE4C00, #B600A8)"
          className="absolute right-[1%] top-[4%] h-[120px] w-[120px] rounded-2xl sm:right-[2%] sm:h-[160px] sm:w-[160px] md:right-[4%] md:h-[210px] md:w-[210px]"
        />
      </FadeIn>
      <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
        <DecorShape
          gradient="radial-gradient(circle at 70% 30%, #B600A8, #0c0c0c)"
          className="absolute bottom-[8%] right-[3%] h-[130px] w-[130px] sm:right-[6%] sm:h-[170px] sm:w-[170px] md:right-[10%] md:h-[220px] md:w-[220px]"
        />
      </FadeIn>

      <FadeIn delay={0} y={40}>
        <h2
          className="hero-heading text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          About me
        </h2>
      </FadeIn>

      <AnimatedText
        text="I design brands, grow audiences, and create campaigns that leave an impact. Pre-final year engineering student with leadership experience at TEDx, Acunetix, CSI, and multiple client projects. Let's build something incredible"
        className="max-w-[560px] text-center font-medium leading-relaxed text-[#D7E2EA]"
        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)' }}
      />

      <FadeIn delay={0.2}>
        <ContactButton />
      </FadeIn>
    </section>
  );
}
