import { Section, SectionHeader } from "./Section";

// Projects will be added soon.

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader
        kicker="Projects"
        title={
          <>
            Things I've <span className="text-gradient">built</span>
          </>
        }
        subtitle="A selection of work that showcases my skills and growth as a developer."
      />

      <div className="py-12 text-center">
        <p className="text-3xl sm:text-4xl font-extrabold tracking-tight">
          <span className="text-gradient animate-pulse">Coming Soon</span>
        </p>
      </div>
    </Section>
  );
}
