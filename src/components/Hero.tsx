import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload } from 'react-icons/fi';
import { Reveal } from './Reveal';
import profileImage from '../assets/profile.jpeg';
import Resume from '../assets/Resume.pdf';

const roles = [
  'Full Stack Developer',
  'Backend Engineer',
  'Java Developer',
  'AI Enthusiast',
];

function useTypewriter(words: string[], typeSpeed = 85, deleteSpeed = 45, pause = 1400) {
  const [text, setText] = useState('');
  const [i, setI] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    let timeout: number;
    if (!deleting && text === word) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === '') {
      setDeleting(false);
      setI((v) => v + 1);
    } else {
      timeout = window.setTimeout(
        () => {
          setText((t) => (deleting ? word.slice(0, t.length - 1) : word.slice(0, t.length + 1)));
        },
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, i, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export function Hero() {
  const typed = useTypewriter(roles);

  return (
    <section id="home" className="relative section-padding pt-36 pb-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-1.5 text-xs font-medium text-slate-700 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Open to Opportunities · 2026 Graduate
            </motion.div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 dark:text-white">
              Hi, I'm{' '}
              <span className="gradient-text">Divyansh Kande</span>
              <br />
              <span className="mt-2 inline-block text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-700 dark:text-slate-200">
                I'm a{' '}
                <span className="gradient-text cursor-blink">{typed}</span>
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
  Software Engineer passionate about full-stack development, machine learning, and solving real-world problems through technology.
</p>
            <p className="mt-3 max-w-2xl text-base text-slate-500 dark:text-slate-400">
              Aspiring Software Engineer specializing in Full Stack Development, Backend Engineering, and AI-powered applications.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-600/30"
              >
                View Projects
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={Resume}
                download
                className="group inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-brand-500 hover:text-brand-700 dark:border-white/15 dark:bg-white/5 dark:text-slate-100 dark:hover:border-brand-400 dark:hover:text-brand-300"
              >
                <FiDownload className="transition-transform group-hover:-translate-y-0.5" />
                Download Resume
              </a>
            </div>

           
          </motion.div>

          {/* Right */}
          <div className="lg:col-span-5 flex justify-center">
            <Reveal y={40} delay={0.2}>
              <div className="relative">
                {/* Rotating gradient ring */}
                <div className="absolute -inset-3 rounded-full bg-gradient-to-tr from-brand-500 via-violet-500 to-pink-500 opacity-70 blur-2xl" />
               <div className="relative h-[260px] w-[260px] sm:h-[320px] sm:w-[320px] md:h-[380px] md:w-[380px] rounded-full p-[3px] bg-gradient-to-tr from-brand-500 via-violet-500 to-pink-500">
                 <div className="h-full w-full rounded-full bg-white dark:bg-slate-900 p-3">
                    <div className="h-full w-full overflow-hidden rounded-full ring-4 ring-white/70 dark:ring-white/10 shadow-2xl">
                      <img
                        src={profileImage}
                        alt="Divyansh Kande portrait"
                        loading="eager"
                        className="h-full w-full object-cover transition duration-700 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>

                
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
