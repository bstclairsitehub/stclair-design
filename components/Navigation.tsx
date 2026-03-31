"use client";

import { useEffect, useRef, useState } from "react";

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;
      if (window.scrollY > 80) {
        navRef.current.classList.add("scrolled");
      } else {
        navRef.current.classList.remove("scrolled");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Work", href: "#portfolio" },
    { label: "Expertise", href: "#expertise" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-[1000] px-6 md:px-12 py-5 md:py-7 flex justify-between items-center transition-all duration-600 bg-transparent"
    >
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="font-serif text-[22px] font-light tracking-[3px] text-sc-cream uppercase no-underline hoverable"
      >
        St. <span className="text-sc-gold font-medium">Clair</span>
      </a>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex gap-10 list-none">
        {navItems.map(({ label, href }) => (
          <li key={label}>
            <a
              href={href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(href);
              }}
              className="nav-link hoverable text-sc-subtle no-underline text-xs font-normal tracking-[2.5px] uppercase transition-colors duration-400 hover:text-sc-gold"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden hoverable flex flex-col gap-1.5 w-10 h-10 items-center justify-center"
        aria-label="Toggle mobile menu"
      >
        <span
          className={`block h-0.5 bg-sc-gold transition-all duration-300 ${
            mobileMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-5"
          }`}
        />
        <span
          className={`block h-0.5 bg-sc-gold transition-all duration-300 ${
            mobileMenuOpen ? "opacity-0 w-5" : "w-6"
          }`}
        />
        <span
          className={`block h-0.5 bg-sc-gold transition-all duration-300 ${
            mobileMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-5"
          }`}
        />
      </button>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-sc-black border-b border-sc-border transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-64" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col list-none py-6 px-6">
          {navItems.map(({ label, href }) => (
            <li key={label} className="border-b border-sc-border/50 last:border-b-0">
              <a
                href={href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(href);
                }}
                className="nav-link hoverable block py-4 text-sc-subtle no-underline text-sm font-normal tracking-[2.5px] uppercase transition-colors duration-400 hover:text-sc-gold"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
