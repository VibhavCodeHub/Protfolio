import Navbar from "@/components/Navbar";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen text-white selection:bg-white/30 font-sans">
      <Navbar />
      
      <section id="home">
        <ScrollyCanvas>
          <Overlay />
        </ScrollyCanvas>
      </section>

      <About />
      <Skills />
      
      <section id="projects">
        <Projects />
      </section>

      <Contact />
    </main>
  );
}
