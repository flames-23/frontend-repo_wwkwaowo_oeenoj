import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen pt-28 overflow-hidden">
      {/* 3D Scene Layer */}
      <div className="absolute inset-0 z-0">
        <Spline scene="https://prod.spline.design/4HIlOdlXYYkZW66z/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Contrast overlay that does NOT block 3D interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#060A0A]/70 via-[#060A0A]/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-[92%] md:w-[85%] lg:w-[78%] flex flex-col md:flex-row items-center gap-10 md:gap-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-emerald-300/90 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4">Professional • Evidence-driven • Security-first</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight drop-shadow-[-1px_1px_0_rgba(0,0,0,0.6)]">
            Security Through Actionable Testing
          </h1>
          <p className="mt-4 text-white/85 leading-relaxed">
            Cybersecurity fresher with hands-on VAPT, RBAC hardening, and secure coding—focused on turning findings into fixes.
          </p>
          <p className="mt-2 text-white/75">
            Identified and remediated XSS/SQLi, enforced RBAC, and delivered structured pentest reports.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors">View Projects</a>
            <a href="/Aniket_Gupta_Resume.pdf" download className="px-5 py-3 rounded-xl border border-white/15 hover:border-white/30 transition-colors">Download Résumé</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#060A0A] to-transparent" />
    </section>
  );
}
