import FadeIn from './FadeIn';
import ContactButton from './ContactButton';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Contact', href: '#contact' },
];

export default function HeroSection() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-between overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-32 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-purple-600/20 blur-[140px]" />
        <div className="absolute bottom-20 right-20 h-[250px] w-[250px] rounded-full bg-orange-500/10 blur-[120px]" />
      </div>

      {/* Navbar */}
      <FadeIn
        delay={0}
        y={-20}
        as="nav"
        className="flex justify-between px-6 pt-6 md:px-10 md:pt-8"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium uppercase tracking-wider text-[#D7E2EA] transition hover:opacity-70 md:text-lg"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      {/* Hero Content */}
      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col items-center justify-center px-6 text-center">
        <FadeIn delay={0.15} y={40}>
          <p className="mb-6 text-sm uppercase tracking-[0.5em] text-purple-400">
            Graphic Designer • Social Media Manager • Marketing
          </p>
        </FadeIn>

        <FadeIn delay={0.25} y={40}>
          <h1 className="hero-heading text-6xl font-black uppercase leading-none sm:text-7xl md:text-8xl lg:text-[9rem]">
            Gaurav
            <br />
            Chavan
          </h1>
        </FadeIn>

        <FadeIn delay={0.4} y={30}>
          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#D7E2EA]/80 md:text-xl">
            I craft visually compelling brands, social media campaigns, and
            modern digital experiences that help businesses stand out and grow.
          </p>
        </FadeIn>

        <FadeIn delay={0.55} y={20}>
          <div className="mt-12">
            <ContactButton />
          </div>
        </FadeIn>
      </div>

      {/* Bottom */}
      <FadeIn delay={0.7} y={20}>
        <div className="flex justify-center px-6 pb-8 text-sm uppercase tracking-[0.3em] text-[#D7E2EA]/50">
          Scroll Down ↓
        </div>
      </FadeIn>
    </section>
  );
}