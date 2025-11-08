import { motion } from 'framer-motion';
import { ShieldCheck, Bug, Network } from 'lucide-react';

const projects = [
  {
    title: 'Banking Portal Audit',
    description: 'Chained auth bypass and IDOR leading to account takeover. Coordinated disclosure and remediation.',
    icon: ShieldCheck,
    tags: ['Web', 'Auth', 'IDOR', 'Bug Bounty'],
  },
  {
    title: 'E-commerce Stored XSS',
    description: 'Multi-tenant stored XSS enabling session hijack; fixed with CSP hardening and sandboxed widgets.',
    icon: Bug,
    tags: ['XSS', 'CSP', 'Browser'],
  },
  {
    title: 'Cloud Policy Misconfig',
    description: 'Cross-tenant data exposure via object storage policies; implemented least-privilege and isolation.',
    icon: Network,
    tags: ['Cloud', 'IAM', 'RBAC'],
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
          Highlighted Findings
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Impactful reports driven by offensive research and responsible disclosure.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
