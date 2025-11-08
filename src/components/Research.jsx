import { motion } from 'framer-motion';
import { BookOpen } from 'lucide-react';

export default function Research() {
  return (
    <section id="research" className="py-20">
      <div className="mx-auto w-[92%] md:w-[85%] lg:w-[78%]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold"
        >
          Research
        </motion.h2>
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-xl bg-emerald-500/20 text-emerald-400 p-2">
              <BookOpen className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">HID Attack Prevention and Mitigation</h3>
          </div>
          <p className="mt-3 text-white/80 text-sm leading-relaxed">
            Explores threats posed by malicious Human Interface Devices (USB Rubber Ducky, BadUSB) and countermeasures: USB
            whitelisting, endpoint hardening, device control policies, and user awareness. Includes practical detection
            strategies and blue-team playbooks for enterprise environments.
          </p>
          <a href="#" className="inline-block mt-4 text-emerald-300 hover:text-emerald-200 underline underline-offset-4">Read Paper</a>
        </div>
      </div>
    </section>
  );
}
