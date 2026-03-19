export default function Contact() {
  return (
    <section id="contact" className="bg-sc-deep text-center py-32 md:py-40 px-6 md:px-12">
      <div className="reveal max-w-[700px] mx-auto">
        <div className="text-[10px] font-medium tracking-[5px] uppercase text-sc-gold mb-5 flex items-center justify-center gap-4">
          Let&apos;s Create
        </div>
        <h2 className="font-serif text-[clamp(36px,5vw,64px)] font-light text-sc-cream leading-[1.15] max-w-[700px] mx-auto mb-6 text-center">
          Ready to build something{" "}
          <em className="italic text-sc-gold">remarkable</em>?
        </h2>
        <p className="text-[15px] text-sc-subtle leading-[1.7] font-light mb-12">
          We take on a select number of projects each quarter to ensure every
          client receives our full creative attention. If you&apos;re ready to
          elevate your digital presence, let&apos;s talk.
        </p>
        <a
          href="mailto:hello@stclairdesign.com"
          className="contact-email-link hoverable font-serif text-[clamp(28px,4vw,52px)] font-light text-sc-gold no-underline relative inline-block transition-colors duration-400"
        >
          hello@stclairdesign.com
        </a>
        <div className="mt-15 flex flex-col md:flex-row justify-center gap-5 md:gap-10">
          {["Instagram", "Dribbble", "TikTok", "LinkedIn"].map((link) => (
            <a
              key={link}
              href="#"
              className="hoverable text-[11px] tracking-[2.5px] uppercase text-sc-muted no-underline transition-colors duration-400 hover:text-sc-gold"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
