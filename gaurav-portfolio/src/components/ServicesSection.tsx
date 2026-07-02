import FadeIn from './FadeIn';

const SERVICES = [
  {
    number: '01',
    name: 'Brand Design',
    description:
      'Logos, visual systems, and identity kits that give a business a look people recognize at a glance.',
  },
  {
    number: '02',
    name: 'Social Media Management',
    description:
      'End-to-end handling of content calendars, posting, and community replies across Instagram, LinkedIn, and X.',
  },
  {
    number: '03',
    name: 'Content & Campaign Strategy',
    description:
      'Planning campaigns around a clear message, then breaking that message into posts, reels, and creatives that land.',
  },
  {
    number: '04',
    name: 'Graphic & UI Design',
    description:
      'Posters, decks, and interface design for web and product, with attention to layout, type, and hierarchy.',
  },
  {
    number: '05',
    name: 'Event & Community Marketing',
    description:
      'Promotion, production, and on-ground coordination for events, drawn from hands-on experience running TEDx.',
  },
];

export default function ServicesSection() {
  return (
    <section
      id="services"
      className="rounded-t-[40px] bg-white px-5 py-20 sm:rounded-t-[50px] sm:px-8 sm:py-24 md:rounded-t-[60px] md:px-10 md:py-32"
    >
      <FadeIn>
        <h2
          className="mb-16 text-center font-black uppercase text-[#0C0C0C] sm:mb-20 md:mb-28"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="mx-auto max-w-5xl">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.number} delay={i * 0.1}>
            <div
              className="flex items-start gap-6 border-t py-8 last:border-b sm:gap-10 sm:py-10 md:py-12"
              style={{ borderColor: 'rgba(12, 12, 12, 0.15)' }}
            >
              <span
                className="flex-shrink-0 font-black text-[#0C0C0C]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {service.number}
              </span>
              <div className="flex flex-col justify-center gap-2">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {service.name}
                </h3>
                <p
                  className="max-w-2xl font-light leading-relaxed text-[#0C0C0C] opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
