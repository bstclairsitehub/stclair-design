export default function About() {
  const stats = [
    { number: "50+", label: "Projects Delivered" },
    { number: "100%", label: "Custom Coded" },
    { number: "5★", label: "Client Reviews" },
    { number: "∞", label: "Obsessive Detail" },
  ];

  return (
    <section id="about" className="bg-sc-deep py-24 md:py-36 px-6 md:px-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 max-w-[1300px] mx-auto items-start">
        {/* Left: Text */}
        <div className="reveal">
          <div className="section-label-line text-[10px] font-medium tracking-[5px] uppercase text-sc-gold mb-5 flex items-center gap-4">
            The Studio
          </div>
          <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-sc-cream leading-[1.15] max-w-[700px] mb-10">
            Crafting digital <em className="italic text-sc-gold">masterpieces</em>{" "}
            that captivate
          </h2>
          <p className="about-first-letter text-base leading-[1.85] text-sc-text font-light mb-7">
            St. Clair Design is a luxury web design studio built on the belief
            that every pixel should earn its place. We don&apos;t build websites — we
            architect experiences that command attention and elevate brands beyond
            what they thought possible.
          </p>
          <p className="text-base leading-[1.85] text-sc-text font-light mb-7">
            Every project begins with strategy and ends with obsession. From
            custom-coded animations to pixel-perfect layouts, we craft sites that
            feel as refined as the brands they represent. Our approach blends
            cutting-edge development with a designer&apos;s intuition for what moves
            people.
          </p>
          <p className="text-base leading-[1.85] text-sc-text font-light">
            Founded by a multi-disciplinary creative with deep expertise in
            React, modern frameworks, and the psychology of digital experience —
            we understand not just how to build, but{" "}
            <em className="italic text-sc-gold">why</em> something works.
          </p>
        </div>

        {/* Right: Stats */}
        <div className="reveal mt-0 lg:mt-15">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {stats.map(({ number, label }) => (
              <div
                key={label}
                className="stat-card p-8 border border-sc-border bg-sc-card/50 hoverable"
              >
                <div className="font-serif text-[42px] font-light text-sc-gold leading-none mb-2.5">
                  {number}
                </div>
                <div className="text-[11px] tracking-[2px] uppercase text-sc-muted font-normal">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
