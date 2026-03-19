"use client";

export default function Footer() {
  return (
    <footer className="py-10 px-6 md:px-12 border-t border-sc-border flex flex-col items-center gap-4 bg-sc-black">
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="text-[11px] text-sc-muted tracking-[1px]">
          © 2025 St. Clair Design. All rights reserved.
        </span>
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="hoverable text-[11px] text-sc-muted tracking-[2px] uppercase no-underline transition-colors duration-400 hover:text-sc-gold"
        >
          Back to Top ↑
        </a>
      </div>
      <span className="text-[9px] text-sc-muted/40 tracking-[3px] uppercase">
        Designed &amp; Developed by St. Clair Design Co.
      </span>
    </footer>
  );
}
