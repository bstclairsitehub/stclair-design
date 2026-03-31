const expertiseItems = [
  {
    number: "01",
    name: "Bespoke Design",
    desc: "Every design is born from strategy, never a template. Custom layouts, typography systems, and visual identities that are unmistakably yours.",
  },
  {
    number: "02",
    name: "Custom Animation",
    desc: "Cinematic transitions, scroll-driven narratives, and micro-interactions that transform static pages into living experiences.",
  },
  {
    number: "03",
    name: "React & Modern Stack",
    desc: "Built on React, Next.js, and Tailwind CSS for performance that matches the polish. Every site is fast, accessible, and future-proof.",
  },
  {
    number: "04",
    name: "Brand Strategy",
    desc: (
      <>
        Informed by psychology and perception — we build digital presences that
        don&apos;t just look premium, they{" "}
        <em className="italic text-sc-gold">feel</em> premium on an instinctive
        level.
      </>
    ),
  },
  {
    number: "05",
    name: "E-Commerce",
    desc: "Luxury shopping experiences on Shopify, custom platforms, and headless CMS. Conversion-focused design that never sacrifices beauty.",
  },
  {
    number: "06",
    name: "Ongoing Partnership",
    desc: "Beyond launch — analytics, iteration, and continuous refinement. Your site evolves as your brand grows.",
  },
];

export default function Expertise() {
  return (
    <section id="expertise" className="bg-sc-deep py-20 md:py-24 lg:py-36 px-6 md:px-12 overflow-hidden">
      <div className="max-w-[1300px] mx-auto">
        <div className="section-label-line reveal text-[9px] md:text-[10px] font-medium tracking-[4px] md:tracking-[5px] uppercase text-sc-gold mb-4 md:mb-5 flex items-center gap-3 md:gap-4">
          Capabilities
        </div>
        <h2 className="reveal font-serif text-[clamp(32px,5vw,64px)] font-light text-sc-cream leading-[1.15] max-w-[700px] mb-8 md:mb-10 lg:mb-15">
          Where craft meets <em className="italic text-sc-gold">obsession</em>
        </h2>

        <div className="reveal grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-px bg-sc-border mt-12 md:mt-15">
          {expertiseItems.map(({ number, name, desc }) => (
            <div
              key={number}
              className="expertise-item hoverable bg-sc-deep p-8 md:p-10 lg:p-12"
            >
              <div className="font-serif text-xs md:text-sm text-sc-gold-dim mb-4 md:mb-5 font-normal">
                {number}
              </div>
              <div className="font-serif text-[22px] md:text-[26px] font-normal text-sc-cream mb-3">
                {name}
              </div>
              <div className="text-[12px] md:text-[13px] text-sc-muted leading-[1.7] font-light">
                {desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
