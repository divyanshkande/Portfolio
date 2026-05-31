import { motion } from 'framer-motion';
import { FiAward } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { SectionHeading } from './About';

const achievements = [
  {
    title: 'India Innovates 2026 — Finalist',
    detail: 'Top 0.01% among 25,000+ teams nationwide.',
    color: 'from-amber-400 via-orange-500 to-rose-500',
    icon: <FiAward className="h-8 w-8" />,
    medal: '🥇',
  },
  {
    title: 'Hacksagon 2026, ABV-IIITM Gwalior — Finalist',
    detail: 'National-level hackathon finalist at ABV-IIITM Gwalior.',
    color: 'from-brand-500 via-violet-500 to-pink-500',
    icon: <FiAward className="h-8 w-8" />,
    medal: '🏆',
  },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Recognition" title="Achievements" subtitle="Milestones that pushed me to build faster, smarter and bolder." />

        <div className="mt-14 grid gap-8 md:grid-cols-2">
          {achievements.map((a, idx) => (
            <Reveal key={a.title} delay={idx * 0.08}>
              <motion.div
                whileHover={{ y: -6, scale: 1.01 }}
                className="card-glow glass relative overflow-hidden rounded-3xl p-8 shadow-sm"
              >
                <div className={`absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br ${a.color} opacity-25 blur-3xl`} />

                <div className="flex items-start gap-5">
                  <motion.div
                    initial={{ rotate: -15, y: 10 }}
                    whileInView={{ rotate: 0, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                    className="relative"
                  >
                    <div
                      className={`grid h-20 w-20 place-items-center rounded-3xl bg-gradient-to-br ${a.color} text-white shadow-xl`}
                    >
                      {a.icon}
                    </div>
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 0.2 }}
                      className="absolute -right-2 -top-2 grid h-9 w-9 place-items-center rounded-full bg-white text-lg shadow-lg ring-4 ring-white dark:bg-slate-900 dark:ring-slate-900"
                    >
                      {a.medal}
                    </motion.span>
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white">{a.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                      {a.detail}
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-brand-700 dark:text-brand-300">
                      <span className={`inline-block h-1.5 w-20 rounded-full bg-gradient-to-r ${a.color}`} />
                      National Achievement
                    </div>
                  </div>
                </div>

                {/* Sparkles */}
                <div className="pointer-events-none absolute inset-0 opacity-40">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <motion.span
                      key={i}
                      className={`absolute h-1.5 w-1.5 rounded-full bg-gradient-to-br ${a.color}`}
                      style={{
                        top: `${10 + (i * 13) % 80}%`,
                        left: `${5 + (i * 17) % 90}%`,
                      }}
                      animate={{ y: [0, -8, 0], opacity: [0.3, 1, 0.3] }}
                      transition={{ duration: 3.5, repeat: Infinity, delay: i * 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
