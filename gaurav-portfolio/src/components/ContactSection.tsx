import FadeIn from "./FadeIn";

export default function ContactSection() {
  const copyEmail = async () => {
    await navigator.clipboard.writeText("gaurav274chavan@gmail.com");
    alert("Email copied successfully!");
  };

  return (
    <section
      id="contact"
      className="bg-[#0C0C0C] px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}

        <FadeIn>
          <h2 className="hero-heading text-center text-6xl font-black uppercase text-[#D7E2EA] md:text-8xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg text-[#D7E2EA]/60">
            I'm always open to freelance projects, internships,
            collaborations and full-time opportunities.
            Let's create something amazing together.
          </p>
        </FadeIn>

        {/* Contact Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">

          {/* Email */}

          <FadeIn delay={0.1}>
            <div className="group rounded-[35px] border border-white/10 bg-[#171717] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#7621B0] hover:shadow-[0_0_35px_rgba(118,33,176,0.25)]">

              <p className="text-sm uppercase tracking-[0.2em] text-[#D7E2EA]/50">
                EMAIL
              </p>

              <h3 className="mt-4 break-all text-3xl font-bold text-[#D7E2EA]">
                gaurav274chavan@gmail.com
              </h3>

              <div className="mt-8 flex flex-wrap gap-4">

                <button
                  onClick={copyEmail}
                  className="rounded-full border border-white/15 px-6 py-3 text-[#D7E2EA] transition-all duration-300 hover:border-[#7621B0] hover:bg-[#7621B0]"
                >
                  Copy Email
                </button>

                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=gaurav274chavan@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#7621B0] px-6 py-3 text-white transition-all duration-300 hover:bg-[#8d3ae2]"
                >
                  Open Gmail
                </a>

              </div>

            </div>
          </FadeIn>

          {/* Instagram */}

          <FadeIn delay={0.2}>
            <div className="group rounded-[35px] border border-white/10 bg-[#171717] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#7621B0] hover:shadow-[0_0_35px_rgba(118,33,176,0.25)]">

              <p className="text-sm uppercase tracking-[0.2em] text-[#D7E2EA]/50">
                INSTAGRAM
              </p>

              <h3 className="mt-4 text-3xl font-bold text-[#D7E2EA]">
                @gaurav_027_
              </h3>

              <a
                href="https://instagram.com/gaurav_027_"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#7621B0] px-6 py-3 text-white transition-all duration-300 hover:bg-[#8d3ae2]"
              >
                View Profile →
              </a>

            </div>
          </FadeIn>

          {/* LinkedIn */}

          <FadeIn delay={0.3}>
            <div className="group rounded-[35px] border border-white/10 bg-[#171717] p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[#7621B0] hover:shadow-[0_0_35px_rgba(118,33,176,0.25)]">

              <p className="text-sm uppercase tracking-[0.2em] text-[#D7E2EA]/50">
                LINKEDIN
              </p>

              <h3 className="mt-4 text-3xl font-bold text-[#D7E2EA]">
                Gaurav Chavan
              </h3>

              <a
                href="https://www.linkedin.com/in/gaurav-chavan-1823211b9/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex rounded-full bg-[#7621B0] px-6 py-3 text-white transition-all duration-300 hover:bg-[#8d3ae2]"
              >
                View Profile →
              </a>

            </div>
          </FadeIn>

          

        </div>

        {/* Footer */}

        <FadeIn delay={0.5}>
          <div className="mt-24 border-t border-white/10 pt-8 text-center">

            <p className="text-[#D7E2EA]/40">
              © {new Date().getFullYear()} Gaurav Chavan
            </p>

          </div>
        </FadeIn>

      </div>
    </section>
  );
}