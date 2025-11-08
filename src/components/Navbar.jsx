import { motion } from 'framer-motion';
import { Lock, Mail, FileDown, Linkedin } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Research', href: '#research' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-4 left-0 right-0 z-50"
    >
      <nav className="mx-auto w-[92%] md:w-[85%] lg:w-[78%] backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/10 dark:bg-black/30 border border-white/10 rounded-2xl px-4 py-3 flex items-center justify-between shadow-lg">
        <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-2 font-semibold tracking-tight">
          <Lock className="h-5 w-5 text-emerald-400" />
          <span className="text-sm md:text-base">Aniket Gupta</span>
        </a>
        <div className="hidden lg:flex items-center gap-5 text-sm text-white/80">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="hover:text-white transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden md:inline-flex items-center gap-2 text-xs md:text-sm bg-emerald-500/90 hover:bg-emerald-400 text-black font-medium px-3 py-2 rounded-xl transition-colors"
          >
            <Mail className="h-4 w-4" />
            Email
          </a>
          <a
            href="https://www.linkedin.com/in/aniket-gupta-366662257" target="_blank" rel="noreferrer"
            className="inline-flex items-center gap-2 text-xs md:text-sm border border-white/15 hover:border-white/30 px-3 py-2 rounded-xl"
          >
            <Linkedin className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href="/Aniket_Gupta_Resume.pdf" download
            className="hidden sm:inline-flex items-center gap-2 text-xs md:text-sm border border-white/15 hover:border-white/30 px-3 py-2 rounded-xl"
          >
            <FileDown className="h-4 w-4" />
            Résumé
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
