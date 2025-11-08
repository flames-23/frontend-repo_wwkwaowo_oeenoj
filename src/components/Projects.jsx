import { motion } from 'framer-motion';
import { ShieldCheck, Bug, Network } from 'lucide-react';

const projects = [
  {
    title: 'SMS Spam Detection App',
    description: 'Python + basic NLP; custom dataset; 90%+ detection accuracy; real-time spam blocking.',
    icon: ShieldCheck,
    tags: ['Python', 'NLP', 'Security'],
  },
  {
    title: 'Personal Pentest Lab',
    description: 'DVWA, Juice Shop, Metasploitable on local VMs; used Burp Suite, Nmap, SQLMap; documented OWASP Top 10 findings with a clear pentest report.',
    icon: Bug,
    tags: ['OWASP', 'Burp', 'Nmap', 'SQLMap'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto w-[92%] md:w-[85%] lg:w-[78%]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold"
        >
          Projects
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Hands-on builds and practice environments. Evidence over hype.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className="group rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 hover:bg-emerald-500/10 transition-colors shadow-lg"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/20 text-emerald-400 p-2">
                  <p.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
              </div>
              <p className="mt-3 text-white/75 text-sm leading-relaxed">{p.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs px-2 py-1 rounded-full border border-white/10 text-white/70">
                    {t}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
