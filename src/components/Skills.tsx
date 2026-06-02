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
      { name: 'Java', icon: <span className="font-bold">J</span> },
      { name: 'Python', icon: <SiPython /> },
      { name: 'C++', icon: <SiCplusplus /> },
      { name: 'SQL', icon: <SiMysql /> },
    ],
  },
  {
    title: 'Backend',
    description: 'APIs, authentication, modular & layered architectures.',
    icon: <FiLayers className="h-5 w-5" />,
    color: 'from-emerald-500 to-teal-500',
    skills: [
      { name: 'Spring Boot', icon: <SiSpringboot /> },
      { name: 'Hibernate', icon: <SiHibernate /> },
      { name: 'REST APIs', icon: <FiGrid /> },
      { name: 'JWT Auth / RBAC', icon: <FiShield /> },
    ],
  },
  {
    title: 'Frontend & Database',
    description: 'Modern UIs and reliable persistence.',
    icon: <FiEye className="h-5 w-5" />,
    color: 'from-violet-500 to-pink-500',
    skills: [
      { name: 'React.js', icon: <SiReact /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
      { name: 'MySQL', icon: <SiMysql /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
  },
  {
    title: 'AI / ML',
    description: 'LLM applications and computer vision solutions.',
    icon: <FiBookOpen className="h-5 w-5" />,
    color: 'from-amber-400 to-orange-500',
    skills: [
      { name: 'LLM APIs', icon: <FiCpu /> },
      { name: 'YOLOv8', icon: <FiEye /> },
      { name: 'OpenCV', icon: <SiOpencv /> },
      { name: 'Tesseract OCR', icon: <FiBookOpen /> },
    ],
  },
  {
    title: 'Tools',
    description: 'Version control, deployment and debugging.',
    icon: <FiCloud className="h-5 w-5" />,
    color: 'from-sky-500 to-indigo-500',
    skills: [
      { name: 'Git', icon: <SiGit /> },
      { name: 'GitHub', icon: <SiGithub /> },
      { name: 'Postman', icon: <SiPostman /> },
      {
  name: 'VS Code',
  icon: <span>VS</span>
},
     
    ],
  },
  {
    title: 'Core CS',
    description: 'Computer science fundamentals.',
    icon: <FiCpu className="h-5 w-5" />,
    color: 'from-rose-500 to-fuchsia-500',
    skills: [
      { name: 'Data Structures & Algorithms', icon: <SiGithub /> },
      { name: 'Object-Oriented Programming', icon: <FiLayers /> },
      { name: 'DBMS', icon: <SiMysql /> },
      { name: 'Operating Systems', icon: <FiGrid /> },
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

               <div className="mt-6 flex flex-wrap gap-2">
  {cat.skills.map((s) => (
    <span
      key={s.name}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-3 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
    >
      {s.icon}
      {s.name}
    </span>
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
