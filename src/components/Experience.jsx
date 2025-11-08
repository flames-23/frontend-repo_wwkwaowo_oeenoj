import { motion } from 'framer-motion';
import { ShieldAlert, Building2 } from 'lucide-react';

const experiences = [
  {
    company: 'CyberSmithSECURE Pvt. Ltd.',
    role: 'Intern',
    period: 'Apr 2025–Sep 2025',
    bullets: [
      'Performed VAPT on live web apps; found XSS, IDOR, injection, clickjacking, broken access control (OWASP Top 10).',
      'Reported auth/session issues: weak password policies, JWT mismanagement, cleartext credential exposure.',
      'Delivered structured reports with Description, Impact, Recommendation, and PoC.',
    ],
  },
  {
    company: 'NIRF – University of Mumbai',
    role: 'Intern',
    period: 'Dec 2024–Mar 2025',
    bullets: [
      'Built PHP site for departments; fixed SQLi/XSS via validation, sanitization, escaping.',
      'Implemented RBAC for secure permissions.',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto w-[92%] md:w-[85%] lg:w-[78%]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold"
        >
          Experience
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <motion.article
              key={`${exp.company}-${exp.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/20 text-emerald-400 p-2">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{exp.company}</h3>
                  <p className="text-white/70 text-sm">{exp.role} • {exp.period}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 list-disc list-inside text-white/80 text-sm">
                {exp.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
