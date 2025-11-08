import { motion } from 'framer-motion';
import { Shield, Code2, Globe, TerminalSquare, Users } from 'lucide-react';

const skills = [
  {
    title: 'Testing & Analysis',
    icon: Shield,
    items: ['Burp Suite', 'Nmap', 'Wireshark', 'Metasploit', 'Kali', 'John the Ripper'],
  },
  {
    title: 'Programming/Scripting',
    icon: Code2,
    items: ['Python', 'Java', 'Bash', 'SQL'],
  },
  {
    title: 'Web & Frameworks',
    icon: Globe,
    items: ['HTML', 'CSS', 'Django', 'PHP (secure coding)'],
  },
  {
    title: 'Platforms/CLI',
    icon: TerminalSquare,
    items: ['Linux', 'Bash', 'Windows cmd'],
  },
  {
    title: 'Soft Skills',
    icon: Users,
    items: ['Teamwork', 'Leadership', 'Dependability', 'Ethical mindset'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto w-[92%] md:w-[85%] lg:w-[78%]">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-4xl font-bold"
        >
          Skills
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="rounded-2xl border border-white/10 bg-white/5 p-6"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-emerald-500/20 text-emerald-400 p-2">
                  <group.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="text-xs px-2 py-1 rounded-full border border-white/10 text-white/80">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
