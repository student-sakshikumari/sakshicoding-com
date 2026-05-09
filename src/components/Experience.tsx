import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const points = [
  "Basic accounting and documentation handling",
  "Record management and data entry accuracy",
  "Professional communication with clients",
  "Time management juggling work & college",
  "Working under pressure & meeting deadlines",
  "Workplace professionalism & ethics",
];

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeader kicker="Experience" title={<>Where I've <span className="text-gradient">worked</span></>} />

      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-primary to-transparent" />

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="relative pl-16"
        >
          <div className="absolute left-0 top-2 w-12 h-12 rounded-2xl flex items-center justify-center"
               style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow-cyan)" }}>
            <Briefcase size={20} className="text-primary-foreground" />
          </div>

          <div className="glass-strong rounded-2xl p-6 hover:border-accent/40 transition-colors">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div>
                <h3 className="text-xl font-bold">Office Assistant</h3>
                <div className="text-accent font-medium mt-1">P. Kedia and Associates</div>
              </div>
              <div className="glass rounded-full px-3 py-1 text-xs font-mono">1 Year</div>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">
              Worked for one year while pursuing my BCA — gaining real-world professional skills that complement
              my technical journey.
            </p>
            <ul className="grid sm:grid-cols-2 gap-2.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-foreground/85">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--gradient-primary)" }} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
