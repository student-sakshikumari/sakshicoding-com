import { motion } from "framer-motion";
import { Code2, Lightbulb, Users, Rocket } from "lucide-react";
import { Section, SectionHeader } from "./Section";

const traits = [
  { icon: Code2, label: "Passionate Coder", desc: "Living and breathing clean code." },
  { icon: Lightbulb, label: "Creative Thinker", desc: "Turning ideas into pixel-perfect UI." },
  { icon: Users, label: "Team Player", desc: "Communicate, collaborate, ship." },
  { icon: Rocket, label: "Dedicated Learner", desc: "Always shipping, always growing." },
];

const stats = [
  { v: "10+", l: "Projects" },
  { v: "1+", l: "Year Experience" },
  { v: "2027", l: "Graduation" },
  { v: "∞", l: "Cups of Chai" },
];

export function About() {
  return (
    <Section id="about">
      <SectionHeader
        kicker="About Me"
        title={
          <>
            Crafting code with <span className="text-gradient">curiosity</span>
          </>
        }
      />

      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-3 glass-strong rounded-2xl p-8"
        >
          <p className="text-lg leading-relaxed text-foreground/90 mb-4">
            I'm currently pursuing my{" "}
            <span className="text-gradient font-semibold">Bachelor of Computer Applications</span>{" "}
            at Vidya Vihar Institute of Technology, graduating in 2027.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            My journey is fueled by an obsession with web development and a constant drive to learn
            modern technologies. I build real-world applications that solve problems — from sleek
            frontends to scalable full-stack systems powered by the MERN stack.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            My goal? Becoming a Software Engineer & Full Stack Developer who builds products people
            love.
          </p>

          <div className="grid grid-cols-4 gap-4 mt-8 pt-8 border-t border-border">
            {stats.map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-gradient">{s.v}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
          {traits.map((t, i) => (
            <motion.div
              key={t.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 hover:border-primary/40 transition-colors"
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-3"
                style={{ background: "var(--gradient-soft)" }}
              >
                <t.icon size={18} className="text-accent" />
              </div>
              <div className="font-semibold mb-1">{t.label}</div>
              <div className="text-xs text-muted-foreground">{t.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
