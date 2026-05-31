import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { SectionHeading } from './About';

const projects = [
  {
    title: 'FinSage — AI Personal Finance',
    tagline: 'Expense tracking, OCR receipts, LLM insights & analytics.',
    description:
      'An AI-powered personal finance platform with JWT-authenticated accounts, OCR-based receipt scanning, LLM-driven budget insights, interactive analytics dashboards and modular Spring Boot backend.',
    tech: ['Java', 'Spring Boot', 'React.js', 'MySQL', 'JWT', 'Firebase', 'OCR', 'LLM APIs'],
    image:
      'https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1400&auto=format&fit=crop',
    github: 'https://github.com/divyanshkande/finsage',
    live: 'https://github.com/divyanshkande/finsage',
    accent: 'from-emerald-500/80 to-teal-500/80',
  },
  {
    title: 'Raahi — AI Travel Planner',
    tagline: 'Personalized itineraries with live map integration.',
    description:
      'Generate intelligent travel itineraries powered by LLMs, visualize routes on Leaflet / OpenStreetMap, save favorite destinations and share day-by-day trip plans with friends.',
    tech: ['React.js', 'Spring Boot', 'LLM APIs', 'Leaflet.js', 'OpenStreetMap'],
    image:
      'https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1400&auto=format&fit=crop',
    github: 'https://github.com/divyanshkande/raahi',
    live: 'https://github.com/divyanshkande/raahi',
    accent: 'from-sky-500/80 to-indigo-500/80',
  },
  {
    title: 'Wildlife Detection System',
    tagline: 'Real-time wildlife detection & classification.',
    description:
      'Detect and classify wildlife in real-time from camera feeds and video streams using YOLOv8 and OpenCV. Built for research-grade accuracy and fast inference on edge devices.',
    tech: ['Python', 'YOLOv8', 'OpenCV'],
    image:
      'https://images.unsplash.com/photo-1549366021-9f761d450615?q=80&w=1400&auto=format&fit=crop',
    github: 'https://github.com/divyanshkande/wildlife-detection',
    live: 'https://github.com/divyanshkande/wildlife-detection',
    accent: 'from-amber-400/80 to-orange-500/80',
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Projects"
          subtitle="A few projects that showcase my engineering craft and product thinking."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((p, idx) => (
            <Reveal key={p.title} delay={idx * 0.08}>
              <motion.a
                href={p.github}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -8 }}
                className="card-glow group glass relative block overflow-hidden rounded-3xl shadow-sm"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${p.accent} opacity-40 mix-blend-multiply transition duration-500 group-hover:opacity-20`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl font-bold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/85">{p.tagline}</p>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition duration-500 group-hover:opacity-100">
                    <span className="rounded-xl bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg">
                      View Project ↗
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                    {p.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-[11px] font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex items-center gap-3">
                    <span className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition group-hover:bg-brand-600 dark:bg-white dark:text-slate-900">
                      <FiGithub className="h-4 w-4" />
                      GitHub
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200">
                      <FiExternalLink className="h-4 w-4" />
                      Live Demo
                    </span>
                  </div>
                </div>
              </motion.a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
