"use client";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-start items-center relative overflow-hidden px-6 md:px-12 pt-20 md:pt-24 lg:pt-28 pb-16 md:pb-20">
      {/* Background gradients */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(ellipse 80% 50% at 50% 0%, rgba(201,169,110,0.04) 0%, transparent 60%),
            radial-gradient(ellipse 60% 80% at 20% 80%, rgba(201,169,110,0.02) 0%, transparent 50%),
            radial-gradient(ellipse 50% 60% at 80% 60%, rgba(176,141,87,0.02) 0%, transparent 50%)
          `,
        }}
      />

      {/* Floating lines - hidden on small screens */}
      <div className="hidden md:block hero-line" style={{ left: "15%", height: "40vh", top: "10%", animationDelay: "0s" }} />
      <div className="hidden md:block hero-line" style={{ left: "50%", height: "60vh", top: "5%", animationDelay: "2s" }} />
      <div className="hidden md:block hero-line" style={{ left: "85%", height: "35vh", top: "20%", animationDelay: "4s" }} />

      {/* Tag */}
      <div className="hero-tag-anim text-[9px] md:text-[11px] font-normal tracking-[4px] md:tracking-[5px] uppercase text-sc-gold mb-4 md:mb-6 relative flex items-center gap-3 md:gap-4">
        <span className="inline-block w-6 md:w-10 h-px bg-sc-gold-dim" />
        Luxury Web Design Studio
        <span className="inline-block w-6 md:w-10 h-px bg-sc-gold-dim" />
      </div>

      {/* Title */}
      <h1 className="font-serif text-[clamp(40px,8vw,120px)] font-light leading-[1.05] text-sc-cream text-center tracking-[-1px] max-w-[1100px]">
        <span className="block overflow-hidden">
          <span className="line-inner line-inner-1">We Design</span>
        </span>
        <span className="block overflow-hidden">
          <span className="line-inner line-inner-2">
            <em className="italic text-sc-gold font-normal">Extraordinary</em>
          </span>
        </span>
        <span className="block overflow-hidden">
          <span className="line-inner line-inner-3">Digital Experiences</span>
        </span>
      </h1>

      {/* Subtitle */}
      <p className="hero-sub-anim mt-5 md:mt-7 text-[13px] md:text-[15px] font-light text-sc-subtle tracking-[0.5px] leading-[1.7] text-center max-w-[520px]">
        Bespoke websites with sophisticated animations, seamless transitions,
        and an obsessive attention to detail — crafted for brands that refuse to
        blend in.
      </p>

      {/* CTAs */}
      <div className="hero-cta-anim mt-6 md:mt-8 flex flex-col md:flex-row gap-4 md:gap-6">
        <a
          href="#portfolio"
          onClick={(e) => { e.preventDefault(); scrollTo("#portfolio"); }}
          className="btn-primary hoverable px-8 md:px-10 py-3 md:py-4 border border-sc-gold text-sc-gold font-sans text-[10px] md:text-[11px] font-medium tracking-[2.5px] md:tracking-[3px] uppercase no-underline text-center"
        >
          View Work
        </a>
        <a
          href="#contact"
          onClick={(e) => { e.preventDefault(); scrollTo("#contact"); }}
          className="hoverable px-8 md:px-10 py-3 md:py-4 border border-sc-border text-sc-subtle font-sans text-[10px] md:text-[11px] font-medium tracking-[2.5px] md:tracking-[3px] uppercase no-underline text-center transition-all duration-500 hover:border-sc-subtle hover:text-sc-light"
        >
          Get in Touch
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator-anim absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-[8px] md:text-[9px] tracking-[3px] uppercase text-sc-muted">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-sc-gold-dim to-transparent animate-scroll-pulse" />
      </div>
    </section>
  );
}
