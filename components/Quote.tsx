export default function Quote() {
  return (
    <section className="bg-sc-black text-center py-32 md:py-40 px-6 md:px-12">
      <div className="reveal">
        <div className="font-serif text-[80px] text-sc-gold-dim leading-[0.5] mb-10 opacity-50">
          &ldquo;
        </div>
        <p className="font-serif text-[clamp(24px,3.5vw,44px)] font-light text-sc-cream leading-[1.4] max-w-[900px] mx-auto italic">
          The difference between good design and extraordinary design is the
          willingness to obsess over what most people never notice.
        </p>
        <p className="mt-9 text-xs tracking-[3px] uppercase text-sc-gold font-normal">
          — The St. Clair Philosophy
        </p>
      </div>
    </section>
  );
}
