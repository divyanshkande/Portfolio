import { motion } from 'framer-motion';
import { Reveal } from './Reveal';
import { SectionHeading } from './About';
import {
  SiPython,
  SiCplusplus,
  SiMysql,
  SiSpringboot,
  SiHibernate,
  SiReact,
  SiTailwindcss,
  SiFirebase,
  SiOpencv,
  SiGit,
  SiGithub,
  SiPostman,
  SiLinux,
} from 'react-icons/si';
import {
  FiCpu,
  FiGrid,
  FiLayers,
  FiEye,
  FiCloud,
  FiBookOpen,
  FiShield,
} from 'react-icons/fi';

interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}
interface Category {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  skills: Skill[];
}

const categories: Category[] = [
  {
    title: 'Languages',
    description: 'Core programming languages I write daily.',
    icon: <FiCpu className="h-5 w-5" />,
    color: 'from-brand-500 to-cyan-500',
    skills: [
      { name: 'Java', level: 92, icon: <span className="font-bold">J</span> },
      { name: 'Python', level: 88, icon: <SiPython /> },
      { name: 'C++', level: 80, icon: <SiCplusplus /> },
      { name: 'SQL', level: 85, icon: <SiMysql /> },
    ],
  },
  {
    title: 'Backend',
    description: 'APIs, auth, modular & layered architectures.',
    icon: <FiLayers className="h-5 w-5" />,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Spring Boot', level: 90, icon: <SiSpringboot /> },
      { name: 'Hibernate', level: 82, icon: <SiHibernate /> },
      { name: 'REST APIs', level: 90, icon: <FiGrid /> },
      { name: 'JWT Auth / RBAC', level: 85, icon: <FiShield /> },
    ],
  },
  {
    title: 'Frontend & DB',
    description: 'Modern UIs and reliable persistence.',
    icon: <FiEye className="h-5 w-5" />,
    color: 'from-violet-500 to-pink-500',
    skills: [
      { name: 'React.js', level: 88, icon: <SiReact /> },
      { name: 'Tailwind CSS', level: 90, icon: <SiTailwindcss /> },
      { name: 'MySQL', level: 84, icon: <SiMysql /> },
      { name: 'Firebase', level: 78, icon: <SiFirebase /> },
    ],
  },
  {
    title: 'AI / ML',
    description: 'LLM apps and computer vision pipelines.',
    icon: <FiBookOpen className="h-5 w-5" />,
    color: 'from-amber-400 to-orange-500',
    skills: [
      { name: 'LLM APIs', level: 86, icon: <FiCpu /> },
      { name: 'YOLOv8', level: 78, icon: <FiEye /> },
      { name: 'OpenCV', level: 82, icon: <SiOpencv /> },
      { name: 'Tesseract OCR', level: 75, icon: <FiBookOpen /> },
    ],
  },
  {
    title: 'Cloud & Tools',
    description: 'Ship, deploy and debug with confidence.',
    icon: <FiCloud className="h-5 w-5" />,
    color: 'from-sky-500 to-indigo-500',
    skills: [
      { name: 'Git / GitHub', level: 90, icon: <SiGit /> },
      { name: 'Postman', level: 88, icon: <SiPostman /> },
      { name: 'AWS EC2 / S3', level: 76, icon: <span className="font-bold text-[10px]">AWS</span> },
      { name: 'Linux / CI/CD', level: 78, icon: <SiLinux /> },
    ],
  },
  {
    title: 'Core CS',
    description: 'The fundamentals behind every system.',
    icon: <FiCpu className="h-5 w-5" />,
    color: 'from-rose-500 to-fuchsia-500',
    skills: [
      { name: 'DSA', level: 92, icon: <SiGithub /> },
      { name: 'OOP', level: 88, icon: <FiLayers /> },
      { name: 'DBMS / OS', level: 84, icon: <SiMysql /> },
      { name: 'System Design', level: 80, icon: <FiGrid /> },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Toolbox" title="Technical Skills" subtitle="Technologies I use to craft reliable, scalable and delightful software." />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat, idx) => (
            <Reveal key={cat.title} delay={idx * 0.06}>
              <motion.div
                whileHover={{ y: -6 }}
                className="card-glow glass relative overflow-hidden rounded-3xl p-6 shadow-sm"
              >
                <div className={`absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${cat.color} opacity-20 blur-3xl`} />
                <div className="flex items-center gap-3">
                  <span className={`grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br ${cat.color} text-white shadow-md`}>
                    {cat.icon}
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{cat.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{cat.description}</p>
                  </div>
                </div>

                <ul className="mt-6 space-y-4">
                  {cat.skills.map((s) => (
                    <li key={s.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="flex items-center gap-2 font-medium text-slate-700 dark:text-slate-200">
                          <span className={`inline-flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-br ${cat.color} text-white`}>
                            <span className="text-xs">{s.icon}</span>
                          </span>
                          {s.name}
                        </span>
                        <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{s.level}%</span>
                      </div>
                      <div className="progress-track">
                        <motion.div
                          className="progress-fill"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.level}%` }}
                          viewport={{ once: true, margin: '-80px' }}
                          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
