import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import RenderGallery from "@/components/RenderGallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { getLooseRenders } from "@/lib/renders";

export default function Home() {
  const looseRenders = getLooseRenders();

  return (
    <main>
      <Navbar />
      <Hero />
      <Projects />
      <RenderGallery slides={looseRenders} />
      <Testimonials />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
