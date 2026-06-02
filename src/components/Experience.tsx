import { motion } from 'framer-motion';
import { FiBriefcase, FiCode, FiGitBranch, FiAward } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { SectionHeading } from './About';

const experiences = [
  {
    icon: <FiCode className="h-5 w-5" />,
    title: '250+ DSA Problems Solved',
    org: 'LeetCode · Codeforces',
    time: 'Ongoing',
    bullets: [
      'Deep practice across arrays, strings, DP, graphs and trees.',
      'Strong grasp of complexity analysis and system design fundamentals.',
      'Consistent problem-solving habit to sharpen algorithmic thinking.',
    ],
    color: 'from-brand-500 to-violet-500',
  },
  {
    icon: <FiBriefcase className="h-5 w-5" />,
    title: 'Backend Project Experience',
    org: 'Full-stack Projects',
    time: '2025 — Ongoing',
    bullets: [
      'Designed REST APIs with Spring Boot, layered architecture and DTO patterns.',
      'Built JWT + RBAC authentication systems and MySQL schema optimization.',
      'Focused on clean code, logging, error handling, and API versioning.',
    ],
    color: 'from-emerald-500 to-teal-500',
  },
  {
    icon: <FiGitBranch className="h-5 w-5" />,
    title: 'Git Workflow & Tooling',
    org: 'Professional Practice',
    time: 'Ongoing',
    bullets: [
      'Modular commits, feature branching and PR-based collaboration workflows.',
      'Postman for API design, testing and documentation at speed.',
      'Logging-first debugging, observability and reproducible issues.',
    ],
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: <FiAward className="h-5 w-5" />,
    title: 'JPMorgan Chase & Co. (Forage)',
    org: 'Software Engineering Job Simulation',
    time: '2025',
    bullets: [
      'Designed backend APIs and processed large datasets for financial use cases.',
      'Practiced clean architecture, testable code and business-driven delivery.',
      'Experienced real-world SE workflows, code reviews and tooling patterns.',
    ],
    color: 'from-sky-500 to-indigo-500',
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Journey" title="Technical Experience" subtitle="Engineering milestones, practice and real-world simulations." />

        <div className="mt-14 relative">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-brand-500/30 to-transparent" aria-hidden="true" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => {
              const left = idx % 2 === 0;
              return (
                <Reveal key={exp.title} delay={idx * 0.06}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className={`relative sm:grid sm:grid-cols-2 sm:gap-10 ${
                      left ? '' : ''
                    }`}
                  >
                    {/* Dot */}
                    <span
                      className={`absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${exp.color} text-white shadow-lg ring-4 ring-white dark:ring-slate-900 z-10`}
                    >
                      {exp.icon}
                    </span>

                    {/* Content card */}
                    <div className={`pl-14 sm:pl-0 ${left ? 'sm:col-start-1 sm:pr-10 sm:text-right' : 'sm:col-start-2 sm:pl-10'}`}>
                      <div className="card-glow glass rounded-3xl p-6 shadow-sm">
                        <div className={`flex items-start gap-3 ${left ? 'sm:flex-row-reverse' : ''}`}>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{exp.title}</h3>
                            <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-500 dark:text-slate-400">
                              <span className="font-semibold text-brand-700 dark:text-brand-300">{exp.org}</span>
                              <span>•</span>
                              <span>{exp.time}</span>
                            </div>
                          </div>
                        </div>
                        <ul className={`mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300 ${left ? 'sm:text-right' : ''}`}>
                          {exp.bullets.map((b) => (
                            <li key={b} className="flex gap-2 items-start">
                              <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-br ${exp.color}`} />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
