import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, Mail, ArrowRight, Sparkles } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import sakshi from "@/assets/sakshi.jpg";

const ROLES = ["Full Stack Developer", "MERN Stack Developer", "BCA Student", "Problem Solver"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = ROLES[i];
    const speed = del ? 50 : 90;
    const t = setTimeout(() => {
      if (!del && text === current) {
        setTimeout(() => setDel(true), 1400);
        return;
      }
      if (del && text === "") {
        setDel(false);
        setI((i + 1) % ROLES.length);
        return;
      }
      setText(del ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient font-semibold">
      {text}
      <span className="cursor-blink text-primary">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-16 px-4 overflow-hidden">
      {/* glowing orbs */}
      <div
        className="absolute -top-20 -left-20 w-96 h-96 rounded-full opacity-40 blur-3xl"
        style={{ background: "var(--gradient-radial)" }}
      />
      <div
        className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--cyan-glow), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs text-muted-foreground mb-6">
            <Sparkles size={14} className="text-accent" />
            Available for Internships & Opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-5">
            Hi, I'm <span className="text-gradient">Sakshi Kumari</span>
          </h1>

          <h2 className="text-xl sm:text-2xl mb-6 text-muted-foreground font-medium">
            I'm a <Typewriter />
          </h2>

          <p className="text-base text-muted-foreground max-w-xl leading-relaxed mb-8">
            A passionate MERN Stack Developer and BCA student who loves building modern,
            user-friendly web applications and solving real-world problems through technology.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-primary-foreground"
              style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
            >
              View Projects{" "}
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium glass-strong hover:bg-white/10 transition-colors"
            >
              <Mail size={16} /> Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium glass hover:bg-white/10 transition-colors"
            >
              <Download size={16} /> Resume
            </a>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Connect</span>
            <div className="h-px w-8 bg-border" />
            <a
              href="https://github.com/student-sakshikumari"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg glass hover:text-primary hover:scale-110 transition-all"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/sakshi-kumari-65a184328/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-lg glass hover:text-primary hover:scale-110 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center md:justify-end"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* spinning gradient ring */}
            <div
              className="absolute inset-0 rounded-full spin-slow opacity-80"
              style={{
                background:
                  "conic-gradient(from 0deg, var(--purple-glow), var(--blue-glow), var(--cyan-glow), var(--purple-glow))",
                filter: "blur(20px)",
              }}
            />
            <div
              className="absolute inset-3 rounded-full overflow-hidden glow-pulse"
              style={{ background: "var(--background)" }}
            >
              <img
                src={sakshi}
                alt="Sakshi Kumari, MERN Stack Developer"
                width={768}
                height={768}
                className="w-full h-full object-cover"
              />
            </div>

            {/* floating chips */}
            <motion.div className="absolute -top-4 -right-2 glass-strong rounded-xl px-3 py-2 text-xs flex items-center gap-2 float">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Open to Work</span>
            </motion.div>
            <motion.div
              className="absolute bottom-6 -left-6 glass-strong rounded-xl px-3 py-2 text-xs font-mono float"
              style={{ animationDelay: "1.5s" }}
            >
              {"<MERN />"}
            </motion.div>
            <motion.div
              className="absolute top-1/2 -right-8 glass-strong rounded-xl px-3 py-2 text-xs float"
              style={{ animationDelay: "0.8s" }}
            >
              ⚡ React
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
