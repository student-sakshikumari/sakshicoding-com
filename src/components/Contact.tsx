import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";
import { Section, SectionHeader } from "./Section";

const info = [
  {
    icon: Mail,
    label: "Email",
    value: "kumarisakshi7460@gmail.com",
    href: "mailto:kumarisakshi7460@gmail.com",
  },
  { icon: Phone, label: "Phone", value: "+91 8809733546", href: "tel:+918809733546" },
  { icon: MapPin, label: "Location", value: "Purnea, Bihar, India" },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Section id="contact">
      <SectionHeader
        kicker="Contact"
        title={
          <>
            Let's <span className="text-gradient">build something</span>
          </>
        }
        subtitle="Have a project in mind, an opportunity, or just want to say hi? My inbox is open."
      />

      <div className="grid lg:grid-cols-5 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 space-y-4"
        >
          {info.map((c) => {
            const Inner = (
              <div className="glass-strong rounded-2xl p-5 flex items-center gap-4 hover:border-primary/40 transition-colors">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "var(--gradient-soft)" }}
                >
                  <c.icon size={18} className="text-accent" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium truncate">{c.value}</div>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href}>
                {Inner}
              </a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}

          <div className="flex gap-3 pt-2">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 glass-strong rounded-2xl p-4 flex items-center justify-center gap-2 hover:border-primary/40 transition-colors"
            >
              <Github size={18} /> <span className="text-sm">GitHub</span>
            </a>
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 glass-strong rounded-2xl p-4 flex items-center justify-center gap-2 hover:border-primary/40 transition-colors"
            >
              <Linkedin size={18} /> <span className="text-sm">LinkedIn</span>
            </a>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={onSubmit}
          className="lg:col-span-3 glass-strong rounded-2xl p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Name</label>
              <input
                required
                maxLength={100}
                type="text"
                className="mt-1.5 w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">
                Email
              </label>
              <input
                required
                maxLength={255}
                type="email"
                className="mt-1.5 w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
              />
            </div>
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Subject
            </label>
            <input
              maxLength={150}
              type="text"
              className="mt-1.5 w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition"
            />
          </div>
          <div>
            <label className="text-xs uppercase tracking-wider text-muted-foreground">
              Message
            </label>
            <textarea
              required
              maxLength={1000}
              rows={5}
              className="mt-1.5 w-full bg-secondary/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold text-primary-foreground hover:scale-[1.02] active:scale-[0.99] transition-transform"
            style={{ background: "var(--gradient-primary)", boxShadow: "var(--shadow-glow)" }}
          >
            {sent ? (
              "Message Sent! ✨"
            ) : (
              <>
                Send Message <Send size={16} />
              </>
            )}
          </button>
        </motion.form>
      </div>
    </Section>
  );
}
