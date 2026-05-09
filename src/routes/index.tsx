import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakshi Kumari — MERN Stack Developer & BCA Student" },
      {
        name: "description",
        content:
          "Portfolio of Sakshi Kumari, an aspiring Full Stack Developer specializing in the MERN stack — projects, skills, and experience.",
      },
      { property: "og:title", content: "Sakshi Kumari — Full Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "MERN Stack Developer & BCA student building modern, user-friendly web applications.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
