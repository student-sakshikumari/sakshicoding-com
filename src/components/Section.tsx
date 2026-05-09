import { motion } from "framer-motion";
import { ReactNode } from "react";

export function SectionHeader({ kicker, title, subtitle }: { kicker: string; title: ReactNode; subtitle?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-14"
    >
      <div className="inline-block text-xs uppercase tracking-[0.3em] text-accent mb-3 font-mono">{kicker}</div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">{title}</h2>
      {subtitle && <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">{subtitle}</p>}
    </motion.div>
  );
}

export function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return (
    <section id={id} className={`relative py-24 px-4 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}
