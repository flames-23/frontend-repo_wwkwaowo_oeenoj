import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[#060A0A] selection:bg-emerald-400 selection:text-black">
      <div className="fixed inset-0 -z-0 bg-[radial-gradient(1000px_600px_at_20%_0%,rgba(16,185,129,0.15),transparent),radial-gradient(800px_500px_at_80%_10%,rgba(16,185,129,0.1),transparent)]" />
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
