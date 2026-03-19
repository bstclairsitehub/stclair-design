import CustomCursor from "@/components/CustomCursor";
import ScrollReveal from "@/components/ScrollReveal";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import ServicesMarquee from "@/components/ServicesMarquee";
import About from "@/components/About";
import Divider from "@/components/Divider";
import Portfolio from "@/components/Portfolio";
import Expertise from "@/components/Expertise";
import Quote from "@/components/Quote";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <CustomCursor />
      <div className="grain" />
      <ScrollReveal>
        <Navigation />
        <Hero />
        <ServicesMarquee />
        <About />
        <Divider />
        <Portfolio />
        <Divider />
        <Expertise />
        <Divider />
        <Quote />
        <Divider />
        <Contact />
        <Footer />
      </ScrollReveal>
    </>
  );
}
