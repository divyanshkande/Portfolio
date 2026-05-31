import { motion } from 'framer-motion';
import { FiBook, FiBookOpen, FiCalendar } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { SectionHeading } from './About';

const timeline = [
  {
    title: 'Oriental Institute of Science and Technology',
    subtitle: 'B.Tech — Computer Science (AI & ML)',
    time: 'Sep 2022 – Jun 2026',
    description:
      'Core engineering degree with specialization in Artificial Intelligence & Machine Learning. Focused on building systems end-to-end — from data structures and algorithms to production-grade full-stack applications.',
    coursework: ['DSA', 'DBMS', 'OS', 'OOP', 'Software Engineering', 'Machine Learning'],
    color: 'from-brand-500 to-violet-500',
  },
  {
    title: 'Class XII — Senior Secondary',
    subtitle: 'Higher Secondary Education',
    time: '2022',
    description: 'Completed Class XII with an aggregate score of 76%.',
    coursework: [],
    color: 'from-emerald-500 to-teal-500',
    metric: '76%',
  },
  {
    title: 'Class X — Secondary',
    subtitle: 'Secondary School Certificate',
    time: '2020',
    description: 'Completed Class X with an aggregate score of 89%.',
    coursework: [],
    color: 'from-amber-400 to-orange-500',
    metric: '89%',
  },
];

export function Education() {
  return (
    <section id="education" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Academia" title="Education" subtitle="Formal academic journey and relevant coursework." />

        <div className="mt-14 relative pl-6 sm:pl-0">
          <div className="absolute left-4 sm:left-10 top-2 bottom-2 w-px bg-gradient-to-b from-brand-500/40 via-violet-500/30 to-transparent" aria-hidden="true" />
          <ol className="space-y-8">
            {timeline.map((t, idx) => (
              <Reveal key={t.title} delay={idx * 0.07}>
                <motion.li
                  whileHover={{ y: -4 }}
                  className="card-glow glass relative rounded-3xl p-6 sm:p-8 shadow-sm sm:ml-20"
                >
                  <span
                    className={`absolute -left-[13px] sm:-left-[52px] top-8 grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br ${t.color} text-white shadow-lg ring-4 ring-white dark:ring-slate-900`}
                  >
                    {idx === 0 ? <FiBookOpen className="h-5 w-5" /> : <FiBook className="h-5 w-5" />}
                  </span>

                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{t.title}</h3>
                      <p className="mt-1 text-sm text-brand-700 dark:text-brand-300 font-medium">{t.subtitle}</p>
                    </div>
                    <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-1 text-xs font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                      <FiCalendar className="h-3.5 w-3.5" /> {t.time}
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {t.description}
                  </p>

                  {t.coursework.length > 0 && (
                    <div className="mt-5">
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                        Relevant Coursework
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {t.coursework.map((c) => (
                          <span
                            key={c}
                            className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                          >
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {t.metric && (
                    <div
                      className={`mt-5 inline-flex items-center gap-3 rounded-2xl bg-gradient-to-br ${t.color} px-4 py-3 text-white shadow-md`}
                    >
                      <span className="text-2xl font-bold">{t.metric}</span>
                      <span className="text-xs font-medium opacity-90">Aggregate Score</span>
                    </div>
                  )}
                </motion.li>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
