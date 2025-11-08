import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowRight } from 'lucide-react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    // In a real app, send to backend/email provider.
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto w-[92%] md:w-[85%] lg:w-[78%]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold"
        >
          Let’s collaborate
        </motion.h2>
        <p className="mt-2 text-white/70 max-w-2xl">
          Whether it’s a penetration test, red team engagement, or responsible disclosure, I’d love to help secure your product.
        </p>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="flex items-center gap-3">
              <div className="rounded-xl bg-cyan-500/20 text-cyan-400 p-2">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">Secure contact</h3>
            </div>
            <p className="mt-3 text-white/75 text-sm">
              Prefer encrypted channels? I’m happy to coordinate over PGP or your company’s preferred platform.
            </p>
            <p className="mt-2 text-white/60 text-sm">PGP fingerprint available on request.</p>
          </div>

          <form onSubmit={onSubmit} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <label className="block text-sm text-white/80">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400 transition-colors"
              placeholder="you@company.com"
            />
            <label className="block text-sm text-white/80 mt-4">Message</label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={4}
              className="mt-1 w-full rounded-xl bg-black/30 border border-white/10 px-3 py-2 outline-none focus:border-cyan-400 transition-colors"
              placeholder="Project details, scope, timelines..."
            />
            <button
              type="submit"
              className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition-colors"
            >
              Send message
              <ArrowRight className="h-4 w-4" />
            </button>
            {submitted && (
              <p className="mt-3 text-green-400 text-sm">Thanks! I’ll get back to you shortly.</p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
