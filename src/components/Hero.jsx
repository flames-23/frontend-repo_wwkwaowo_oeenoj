import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] pt-24 overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/mwBbOy4jrazr59EO/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto w-[92%] md:w-[85%] lg:w-[78%] flex flex-col md:flex-row items-center gap-10 md:gap-16 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-xl"
        >
          <span className="inline-block text-xs uppercase tracking-widest text-emerald-300/90 bg-white/5 border border-white/10 rounded-full px-3 py-1 mb-4">Cybersecurity Researcher</span>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hacker mindset. Defender focus.
          </h1>
          <p className="mt-4 text-white/80 leading-relaxed">
            I uncover critical vulnerabilities in web apps and cloud systems, blending offensive creativity with defensive rigor to keep users safe.
          </p>

          <div className="mt-8 flex items-center gap-3">
            <a href="#projects" className="px-5 py-3 rounded-xl bg-emerald-500 text-black font-semibold hover:bg-emerald-400 transition-colors">View Projects</a>
            <a href="#contact" className="px-5 py-3 rounded-xl border border-white/15 hover:border-white/30 transition-colors">Get in touch</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
