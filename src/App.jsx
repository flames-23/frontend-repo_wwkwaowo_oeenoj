import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Research from './components/Research';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen text-white bg-[#060A0A] selection:bg-emerald-400 selection:text-black">
      <div className="fixed inset-0 z-0 bg-[radial-gradient(1000px_600px_at_20%_0%,rgba(16,185,129,0.15),transparent),radial-gradient(800px_500px_at_80%_10%,rgba(16,185,129,0.1),transparent)]" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Certifications />
        <Research />
        <Contact />
      </main>
      <footer className="py-12">
        <div className="mx-auto w-[92%] md:w-[85%] lg:w-[78%] text-center">
          <p className="text-sm text-white/70">Open to internships and entry-level cybersecurity roles. Let’s secure your apps.</p>
          <div className="mt-4 flex items-center justify-center gap-3">
            <a href="mailto:ganiket25201001@gmail.com" className="px-4 py-2 rounded-xl bg-emerald-500 text-black font-medium hover:bg-emerald-400">Email Me</a>
            <a href="https://www.linkedin.com/in/aniket-gupta-366662257" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl border border-white/15 hover:border-white/30">View LinkedIn</a>
            <a href="/Aniket_Gupta_Resume.pdf" download className="px-4 py-2 rounded-xl border border-white/15 hover:border-white/30">Download Résumé</a>
          </div>
          <p className="mt-6 text-xs text-white/60">© {new Date().getFullYear()} Aniket Gupta — VAPT • AppSec • Secure Coding</p>
        </div>
      </footer>
    </div>
  );
}
