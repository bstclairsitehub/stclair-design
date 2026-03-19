"use client";

import { useEffect, useRef } from "react";

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

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
  };

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
      <ul className="hidden md:flex gap-10 list-none">
        {[
          { label: "About", href: "#about" },
          { label: "Work", href: "#portfolio" },
          { label: "Expertise", href: "#expertise" },
          { label: "Contact", href: "#contact" },
        ].map(({ label, href }) => (
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
    </nav>
  );
}
