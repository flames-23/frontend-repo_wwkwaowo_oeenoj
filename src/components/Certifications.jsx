import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const certs = [
  { name: 'CCNA (RST Forms)' },
  { name: 'Certified Network Security Practitioner (CNSP) — The SecOps Group' },
  { name: 'Mastercard Cybersecurity Job Simulation — Forage' },
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="mx-auto w-[92%] md:w-[85%] lg:w-[78%]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold"
        >
          Certifications
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          {certs.map((c) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/20 text-emerald-400 p-2">
                  <Award className="h-5 w-5" />
                </div>
                <p className="font-medium">{c.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
