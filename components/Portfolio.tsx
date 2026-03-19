"use client";

import { useState, useRef, useEffect, useCallback } from "react";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" className="w-4 h-4">
    <path d="M7 17L17 7M17 7H7M17 7V17" />
  </svg>
);

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ChevronLeft = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
    <path d="M9 18l6-6-6-6" />
  </svg>
);

interface Project {
  slug: string;
  title: string;
  client: string;
  type: string;
  description: string;
  specs: string[];
  demoUrl: string;
  thumbnail: string;
  gradient: string;
  accentColor: string;
  year: string;
  logoText: string;
  logoAccent?: string;
}

const projects: Project[] = [
  {
    slug: "stclair-design",
    title: "St Clair Design",
    client: "St Clair Design",
    type: "Luxury Web Design Agency",
    description:
      "A bespoke portfolio site for a luxury web design studio. Features a cinematic loading sequence, custom gold cursor, staggered 5-column curtain page transitions, scroll-triggered reveals with multiple animation styles, and an auto-rotating testimonial slider. Built as a single-page experience with six full sections.",
    specs: ["HTML / CSS / JavaScript", "Custom Scroll Animations", "Column Curtain Transitions", "Responsive Design", "Auto-Rotating Slider"],
    demoUrl: "/stclair-design-portfolio/index.html",
    thumbnail: "/thumbnails/stclair-design.jpg",
    gradient: "from-[#0a0a0a] via-[#1a1510] to-[#0a0a0a]",
    accentColor: "#c8a96e",
    year: "2026",
    logoText: "St Clair",
    logoAccent: "Design",
  },
  {
    slug: "noir-ember",
    title: "Noir & Ember",
    client: "Noir & Ember",
    type: "Fine Dining Restaurant",
    description:
      "A moody, fire-inspired digital experience for a Michelin-starred restaurant. Features horizontal parallax scrolling through signature dishes, a flame-animated loader, ember-colored horizontal strip wipe transitions, and an interactive reservation system with hours display.",
    specs: ["HTML / CSS / JavaScript", "Horizontal Parallax Scroll", "Strip Wipe Transitions", "Interactive Reservation Form", "Animated Menu Grid"],
    demoUrl: "/noir-ember-portfolio/index.html",
    thumbnail: "/thumbnails/noir-ember.jpg",
    gradient: "from-[#0d0906] via-[#1c1610] to-[#0d0906]",
    accentColor: "#d4a054",
    year: "2026",
    logoText: "Noir",
    logoAccent: "& Ember",
  },
  {
    slug: "vanguard-estates",
    title: "Vanguard Estates",
    client: "Vanguard Estates",
    type: "Luxury Real Estate",
    description:
      "An elegant, light-themed property showcase for a high-end real estate firm. Features a split-door loading animation, split-screen vertical wipe page transitions, property cards with tags and pricing, and a sophisticated marble-and-gold design system on a light background.",
    specs: ["HTML / CSS / JavaScript", "Split-Screen Wipe Transitions", "Light Marble Aesthetic", "Property Card Grid", "Testimonial Slider"],
    demoUrl: "/vanguard-estates-portfolio/index.html",
    thumbnail: "/thumbnails/vanguard-estates.jpg",
    gradient: "from-[#f5f0ea] via-[#e8e4dc] to-[#faf8f5]",
    accentColor: "#a68b5b",
    year: "2026",
    logoText: "Vanguard",
    logoAccent: "Estates",
  },
  {
    slug: "maison-elan",
    title: "Maison Élan",
    client: "Maison Élan",
    type: "Luxury Fashion House",
    description:
      "A high-fashion editorial site for a Parisian couture house. Features an expanding circle mask page transition, clip-path mask reveal animations on scroll, a bold black-and-white color system with Bodoni Moda typography, and an immersive lookbook gallery with hover-triggered info overlays.",
    specs: ["HTML / CSS / JavaScript", "Circle Expand Transition", "Clip-Path Mask Reveals", "Editorial B&W Design", "Lookbook Gallery"],
    demoUrl: "/maison-elan-portfolio/index.html",
    thumbnail: "/thumbnails/maison-elan.jpg",
    gradient: "from-[#0c0c0c] via-[#1a1a1a] to-[#0c0c0c]",
    accentColor: "#888888",
    year: "2026",
    logoText: "Maison",
    logoAccent: "Élan",
  },
  {
    slug: "apex-capital",
    title: "Apex Capital",
    client: "Apex Capital",
    type: "Premium Wealth Management",
    description:
      "A sophisticated fintech platform site for an ultra-high-net-worth wealth management firm. Features a 12-cell grid morphing transition (circles that expand to squares then fade), a data-grid background pattern, animated metric counters, and a deep navy-blue design system with electric blue accents.",
    specs: ["HTML / CSS / JavaScript", "Grid Morph Transitions", "Animated Counters", "Navy & Electric Blue Palette", "Tech-Forward UI"],
    demoUrl: "/apex-capital-portfolio/index.html",
    thumbnail: "/thumbnails/apex-capital.jpg",
    gradient: "from-[#060a12] via-[#0b1120] to-[#060a12]",
    accentColor: "#4a7cff",
    year: "2026",
    logoText: "Apex",
    logoAccent: "Capital",
  },
];

function Thumbnail({ project, onClick, isActive }: { project: Project; onClick: () => void; isActive: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`portfolio-thumb hoverable group relative flex-shrink-0 w-[320px] md:w-[380px] overflow-hidden bg-sc-surface border transition-all duration-500 ${
        isActive ? "border-sc-gold scale-[1.02]" : "border-sc-border hover:border-sc-gold-dim"
      }`}
    >
      {/* Thumbnail Preview */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-sc-surface">
        {/* Real screenshot */}
        <img
          src={project.thumbnail}
          alt={`${project.title} website screenshot`}
          className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-500 flex items-center justify-center">
          <div className="opacity-0 group-hover:opacity-100 transform group-hover:translate-y-0 translate-y-2 transition-all duration-500">
            <div className="w-12 h-12 border border-white/30 rounded-full flex items-center justify-center backdrop-blur-sm bg-white/5">
              <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" className="w-4 h-4">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      {/* Card info */}
      <div className="p-5 text-left">
        <div className="font-serif text-[18px] text-sc-cream mb-1">{project.title}</div>
        <div className="text-[10px] tracking-[2px] uppercase text-sc-muted">{project.type}</div>
      </div>
    </button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [onClose]);

  return (
    <div
      ref={overlayRef}
      className="portfolio-modal-overlay fixed inset-0 z-[9998] flex items-center justify-center p-4 md:p-8"
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      {/* Modal Card */}
      <div className="portfolio-modal-card relative w-full max-w-[900px] max-h-[90vh] overflow-y-auto bg-sc-surface border border-sc-border shadow-[0_40px_120px_rgba(0,0,0,0.6)]">
        {/* Close */}
        <button
          onClick={onClose}
          className="hoverable absolute top-4 right-4 z-10 w-10 h-10 border border-sc-border rounded-full flex items-center justify-center text-sc-muted hover:text-sc-gold hover:border-sc-gold transition-all duration-300 bg-sc-surface/80 backdrop-blur-sm"
        >
          <CloseIcon />
        </button>

        {/* Preview Area — real screenshot inside browser frame */}
        <div className="relative w-full aspect-[16/9] bg-sc-black overflow-hidden">
          {/* Browser chrome frame */}
          <div className="absolute inset-0 flex flex-col">
            <div className="h-8 md:h-9 bg-[#1a1a1a] flex items-center px-3 gap-1.5 border-b border-white/[0.06] shrink-0 z-10">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <div className="flex-1 mx-4">
                <div className="bg-white/[0.06] rounded px-3 py-0.5 text-[10px] text-sc-muted tracking-[0.5px] w-fit mx-auto">
                  {project.slug}.com
                </div>
              </div>
            </div>
            {/* Screenshot fills the rest */}
            <div className="flex-1 overflow-hidden relative">
              <img
                src={project.thumbnail}
                alt={`${project.title} website`}
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
          {/* Year badge */}
          <div className="absolute top-12 left-4 text-[10px] tracking-[3px] uppercase px-3 py-1 border border-white/10 text-white/60 bg-black/40 backdrop-blur-sm z-20">
            {project.year}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 md:p-10">
          {/* Title row */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-6">
            <div>
              <div className="text-[10px] tracking-[3px] uppercase mb-3" style={{ color: project.accentColor }}>
                {project.type}
              </div>
              <h3 className="font-serif text-[28px] md:text-[36px] font-light text-sc-cream leading-tight">
                {project.title}
              </h3>
            </div>
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary hoverable shrink-0 inline-flex items-center gap-3 px-8 py-3.5 border border-sc-gold text-sc-gold text-[11px] font-medium tracking-[3px] uppercase no-underline"
            >
              <span>View Live Demo</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-3.5 h-3.5">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>

          {/* Divider */}
          <div className="w-12 h-px bg-sc-gold-dim mb-6" />

          {/* Description */}
          <p className="text-[14px] md:text-[15px] leading-[1.85] text-sc-text max-w-[680px] mb-8">
            {project.description}
          </p>

          {/* Specs */}
          <div className="flex flex-wrap gap-2">
            {project.specs.map((spec) => (
              <span
                key={spec}
                className="text-[10px] tracking-[1.5px] uppercase px-3 py-1.5 border border-sc-border text-sc-muted"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const updateScrollButtons = useCallback(() => {
    if (!trackRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", updateScrollButtons);
    updateScrollButtons();
    return () => track.removeEventListener("scroll", updateScrollButtons);
  }, [updateScrollButtons]);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!trackRef.current) return;
    const cardWidth = window.innerWidth < 768 ? 340 : 400;
    trackRef.current.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section id="portfolio" className="bg-sc-black py-24 md:py-36 overflow-hidden">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end max-w-[1300px] mx-auto mb-16 gap-6 px-6 md:px-12">
          <div>
            <div className="section-label-line reveal text-[10px] font-medium tracking-[5px] uppercase text-sc-gold mb-5 flex items-center gap-4">
              Selected Work
            </div>
            <h2 className="reveal font-serif text-[clamp(36px,5vw,64px)] font-light text-sc-cream leading-[1.15] max-w-[700px]">
              Projects that <em className="italic text-sc-gold">speak</em> for themselves
            </h2>
          </div>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#contact");
            }}
            className="btn-primary hoverable reveal shrink-0 px-10 py-4 border border-sc-gold text-sc-gold font-sans text-[11px] font-medium tracking-[3px] uppercase no-underline"
          >
            Start a Project
          </a>
        </div>

        {/* Carousel */}
        <div className="relative">
          {/* Scroll track */}
          <div
            ref={trackRef}
            className="portfolio-carousel flex gap-6 overflow-x-auto px-6 md:px-12 pb-4 scroll-smooth"
          >
            {projects.map((project, i) => (
              <Thumbnail
                key={project.slug}
                project={project}
                isActive={activeIndex === i}
                onClick={() => {
                  setActiveIndex(i);
                  setSelectedProject(project);
                }}
              />
            ))}
            {/* Spacer for last card */}
            <div className="flex-shrink-0 w-6 md:w-12" />
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-end gap-3 mt-8 px-6 md:px-12">
            <button
              onClick={() => scrollCarousel("left")}
              className={`hoverable w-11 h-11 border rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollLeft
                  ? "border-sc-gold-dim text-sc-gold hover:bg-sc-gold hover:text-sc-black"
                  : "border-sc-border text-sc-muted opacity-30 cursor-default"
              }`}
              disabled={!canScrollLeft}
            >
              <ChevronLeft />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className={`hoverable w-11 h-11 border rounded-full flex items-center justify-center transition-all duration-300 ${
                canScrollRight
                  ? "border-sc-gold-dim text-sc-gold hover:bg-sc-gold hover:text-sc-black"
                  : "border-sc-border text-sc-muted opacity-30 cursor-default"
              }`}
              disabled={!canScrollRight}
            >
              <ChevronRight />
            </button>
            {/* Dots */}
            <div className="flex items-center gap-1.5 ml-4">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setActiveIndex(i);
                    if (trackRef.current) {
                      const cardWidth = window.innerWidth < 768 ? 340 : 400;
                      trackRef.current.scrollTo({ left: i * cardWidth, behavior: "smooth" });
                    }
                  }}
                  className={`transition-all duration-300 h-[2px] rounded-full ${
                    activeIndex === i ? "w-8 bg-sc-gold" : "w-4 bg-sc-border hover:bg-sc-muted"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  );
}
