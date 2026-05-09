import { motion } from "framer-motion";
import { Section, SectionHeader } from "./Section";

const groups = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", level: 95 },
      { name: "CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 85 },
      { name: "Tailwind CSS", level: 88 },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 78 },
      { name: "MongoDB", level: 75 },
    ],
  },
  {
    title: "Other",
    items: [
      { name: "MERN Stack", level: 82 },
      { name: "Problem Solving", level: 85 },
      { name: "Teamwork", level: 90 },
      { name: "Communication", level: 88 },
    ],
  },
];

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeader kicker="Skills" title={<>My <span className="text-gradient">tech stack</span></>}
        subtitle="Tools and technologies I use to bring ideas to life." />

      <div className="grid lg:grid-cols-3 gap-6">
        {groups.map((g, gi) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: gi * 0.1 }}
            className="glass-strong rounded-2xl p-6 hover:border-primary/30 transition-colors"
          >
            <h3 className="text-lg font-bold mb-5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ background: "var(--gradient-primary)" }} />
              {g.title}
            </h3>
            <div className="space-y-4">
              {g.items.map((s, i) => (
                <div key={s.name}>
                  <div className="flex justify-between text-xs mb-1.5">
                    <span className="font-medium">{s.name}</span>
                    <span className="text-muted-foreground font-mono">{s.level}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${s.level}%` }}
                      transition={{ duration: 1.2, delay: 0.1 + i * 0.08, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ background: "var(--gradient-primary)", boxShadow: "0 0 12px var(--purple-glow)" }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
