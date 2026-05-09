import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Section, SectionHeader } from "./Section";

export function Education() {
  return (
    <Section id="education">
      <SectionHeader kicker="Education" title={<>Academic <span className="text-gradient">journey</span></>} />

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative pl-16"
        >
          <div className="absolute left-0 top-2 w-12 h-12 rounded-2xl flex items-center justify-center"
               style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}>
            <GraduationCap size={22} className="text-primary-foreground" />
          </div>

          <div className="glass-strong rounded-2xl p-6 hover:border-primary/40 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-xl font-bold">Bachelor of Computer Applications (BCA)</h3>
                <div className="text-accent font-medium mt-1">Vidya Vihar Institute of Technology</div>
              </div>
              <div className="glass rounded-full px-3 py-1 text-xs font-mono">2024 — 2027</div>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground mt-4">
              <span className="inline-flex items-center gap-1.5"><Calendar size={12} /> Expected Graduation 2027</span>
              <span className="inline-flex items-center gap-1.5"><MapPin size={12} /> Purnea, Bihar</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mt-4">
              Building a strong foundation in computer science fundamentals, web technologies, and software
              engineering principles — while shipping real-world projects on the side.
            </p>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
