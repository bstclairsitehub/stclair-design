import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "St. Clair Design — Luxury Web Design Studio",
  description:
    "Bespoke websites with sophisticated animations, seamless transitions, and an obsessive attention to detail — crafted for brands that refuse to blend in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400&family=Outfit:wght@200;300;400;500;600&family=Bodoni+Moda:ital,opsz,wght@0,6..96,400;0,6..96,500;0,6..96,700;1,6..96,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-sc-black text-sc-text overflow-x-hidden cursor-none max-md:!cursor-auto">
        {children}
      </body>
    </html>
  );
}
