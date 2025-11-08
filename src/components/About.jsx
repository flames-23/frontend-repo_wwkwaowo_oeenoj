import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="mx-auto w-[92%] md:w-[85%] lg:w-[78%]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold"
        >
          About
        </motion.h2>
        <p className="mt-4 text-white/80 max-w-3xl leading-relaxed">
          Highly motivated cybersecurity enthusiast with foundation in secure web development and VAPT. Comfortable with
          Burp, Nmap, Metasploit; experienced writing clear reports (Description, Impact, Recommendation, PoC).
        </p>
      </div>
    </section>
  );
}
