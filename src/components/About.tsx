import { motion } from 'framer-motion';
import { FiAward, FiBriefcase, FiCode, FiUser } from 'react-icons/fi';
import { Reveal } from './Reveal';

const stats = [
  {
    icon: <FiCode className="h-6 w-6" />,
    value: '250+',
    label: 'DSA Problems Solved',
    color: 'from-brand-500 to-cyan-500',
  },
  {
    icon: <FiBriefcase className="h-6 w-6" />,
    value: '4+',
    label: 'Featured Projects',
    color: 'from-violet-500 to-pink-500',
  },
  {
    icon: <FiAward className="h-6 w-6" />,
    value: 'National',
    label: 'Hackathon Finalist',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: <FiUser className="h-6 w-6" />,
    value: 'B.Tech',
    label: 'AI & ML Graduate',
    color: 'from-emerald-400 to-teal-500',
  },
];

export function About() {
  return (
    <section id="about" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="About" title="About Me" subtitle="Passionate about building scalable software, modern web applications, and AI-powered solutions." />

        <div className="mt-14 grid gap-10 lg:grid-cols-12">
          {/* Timeline */}
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative glass rounded-3xl p-6 sm:p-8 shadow-sm">
                <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-brand-500/50 via-violet-500/50 to-transparent" />

                {[
  {
    title: 'B.Tech in Artificial Intelligence & Machine Learning',
    time: '2022 — 2026',
    body: (
      <>
        Developed expertise in <Keyword>Data Structures & Algorithms</Keyword>,
        <Keyword> Object-Oriented Programming</Keyword>,
        <Keyword> Database Management Systems</Keyword>,
        and modern <Keyword>Backend Development</Keyword> using
        <Keyword> Java</Keyword> and <Keyword> Spring Boot</Keyword>.
      </>
    ),
  },
  {
    title: 'Full Stack & Backend Developer',
    time: '2024 — Present',
    body: (
      <>
        Building scalable web applications using
        <Keyword> React</Keyword>,
        <Keyword> Spring Boot</Keyword>,
        <Keyword> MySQL</Keyword>,
        and cloud-ready architectures.
        Experienced in
        <Keyword> REST APIs</Keyword>,
        <Keyword> Authentication & Authorization</Keyword>,
        and
        <Keyword> AI-powered applications</Keyword>.
      </>
    ),
  },
  {
    title: 'National Hackathon Finalist',
    time: '2026',
    body: (
      <>
        Reached the national finals among
        <strong> 25,000+ participating teams</strong>,
        contributing to the design, development,
        and deployment of innovative technology solutions.
      </>
    ),
  },
].map((item, idx) => (
                  <div key={idx} className="relative pl-10 pb-8 last:pb-0">
                    <span className="absolute left-[14px] top-1.5 grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-violet-500 text-[10px] font-bold text-white shadow-md ring-4 ring-white dark:ring-slate-900">
                      {idx + 1}
                    </span>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{item.title}</h3>
                      <span className="text-xs font-medium text-brand-600 dark:text-brand-300">{item.time}</span>
                    </div>
                    <p className="mt-2 text-slate-600 dark:text-slate-300 leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Stats */}
          <div className="lg:col-span-5 grid gap-4 sm:grid-cols-2 content-start">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6 }}
                  className="card-glow glass relative overflow-hidden rounded-2xl p-6 shadow-sm"
                >
                  <div
                    className={`absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br ${s.color} opacity-20 blur-2xl`}
                  />
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-md`}>
                    {s.icon}
                  </div>
                  <div className="mt-4 text-3xl font-bold text-slate-900 dark:text-white">{s.value}</div>
                  <div className="mt-1 text-sm text-slate-500 dark:text-slate-400">{s.label}</div>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Keyword({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-semibold text-brand-700 dark:text-brand-300">{children}</span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <Reveal>
      <div className="mx-auto max-w-2xl text-center">
        <span className="inline-block rounded-full border border-slate-200 bg-white/60 px-4 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-brand-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-brand-300">
          {eyebrow}
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">
          {title.split(' ').map((w, i) =>
            i === title.split(' ').length - 1 ? (
              <span key={i} className="gradient-text">
                {' '}
                {w}
              </span>
            ) : (
              <span key={i}>{i === 0 ? '' : ' '}{w}</span>
            )
          )}
        </h2>
        {subtitle && <p className="mt-3 text-slate-500 dark:text-slate-400">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
