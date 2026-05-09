import { Mail, Heart } from "lucide-react";
import { GithubIcon as Github, LinkedinIcon as Linkedin } from "./BrandIcons";

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-12 py-10 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row gap-6 items-center justify-between">
        <div>
          <div className="font-display font-bold text-lg text-gradient">{"<Sakshi />"}</div>
          <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
            Designed & Developed with <Heart size={12} className="text-primary fill-primary" /> by
            Sakshi Kumari
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/student-sakshikumari"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg glass hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/sakshi-kumari-65a184328/"
            target="_blank"
            rel="noreferrer"
            className="p-2.5 rounded-lg glass hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:kumarisakshi7460@gmail.com"
            className="p-2.5 rounded-lg glass hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>

        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Sakshi Kumari. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
