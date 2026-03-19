export default function ServicesMarquee() {
  const items = [
    "Custom Animations",
    "Luxury Branding",
    "Interactive Experiences",
    "React Development",
    "Bespoke Design",
    "Motion Design",
    "UI/UX Strategy",
    "Tailwind CSS",
  ];

  // Duplicate for seamless loop
  const allItems = [...items, ...items];

  return (
    <div className="py-12 bg-sc-black overflow-hidden border-t border-b border-sc-border">
      <div className="flex gap-[60px] animate-marquee w-max">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="marquee-item font-serif text-2xl font-light text-sc-muted whitespace-nowrap flex items-center"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
