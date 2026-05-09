import { motion } from "framer-motion";
import { ExternalLink, Cloud, ShoppingBag, Stethoscope, Layout } from "lucide-react";
import { GithubIcon as Github } from "./BrandIcons";
import { Section, SectionHeader } from "./Section";

const projects = [
  {
    icon: Cloud,
    title: "Weather Detection App",
    desc: "Responsive weather app with real-time updates via API integration and dynamic data fetching.",
    tags: ["HTML", "CSS", "JavaScript", "React.js", "Weather API"],
    accent: "from-sky-400 to-blue-500",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Website",
    desc: "Modern e-commerce platform with product listings, cart functionality, and a smooth, responsive UI.",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind"],
    accent: "from-purple-400 to-pink-500",
  },
  {
    icon: Stethoscope,
    title: "Doctor Booking System",
    desc: "Live full-stack platform — explore doctors, book appointments, manage schedules with JWT auth.",
    tags: ["MERN", "JWT", "MongoDB", "Express", "React"],
    accent: "from-emerald-400 to-cyan-500",
    featured: true,
  },
  {
    icon: Layout,
    title: "Responsive Web Collection",
    desc: "Collection of responsive websites built while learning frontend & full-stack development.",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    accent: "from-orange-400 to-rose-500",
  },
];

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeader kicker="Projects" title={<>Things I've <span className="text-gradient">built</span></>}
        subtitle="A selection of work that showcases my skills and growth as a developer." />

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            whileHover={{ y: -6 }}
            className={`group relative glass-strong rounded-2xl overflow-hidden hover:border-primary/40 transition-all ${
              p.featured ? "md:col-span-2" : ""
            }`}
          >
            {/* mock browser preview */}
            <div className={`relative h-44 bg-gradient-to-br ${p.accent} overflow-hidden`}>
              <div className="absolute inset-0 opacity-20"
                   style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "24px 24px" }} />
              <div className="absolute top-3 left-3 flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
                <span className="w-2.5 h-2.5 rounded-full bg-white/40" />
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <p.icon size={64} className="text-white/90 drop-shadow-2xl group-hover:scale-110 transition-transform duration-500" />
              </div>
              {p.featured && (
                <span className="absolute top-3 right-3 glass-strong rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider">
                  ⭐ Featured
                </span>
              )}
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2 group-hover:text-gradient transition-colors">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tags.map((t) => (
                  <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md glass text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-2">
                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg glass hover:bg-white/10 transition-colors">
                  <Github size={14} /> Code
                </a>
                <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-lg text-primary-foreground"
                   style={{ background: "var(--gradient-primary)" }}>
                  <ExternalLink size={14} /> Live Demo
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
