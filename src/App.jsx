import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[#0A0F1C] selection:bg-cyan-400 selection:text-black">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-500/10 via-transparent to-transparent" />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Cyber Innovator — Ethical hacking & web security research
      </footer>
    </div>
  );
}
