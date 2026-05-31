import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

export function Footer() {
  return (
    <footer className="relative mt-10 border-t border-slate-200/60 bg-white/40 dark:border-white/5 dark:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-sm font-bold text-white shadow-md">
              DK
            </span>
            <div>
              <div className="font-semibold text-slate-800 dark:text-white">Divyansh Kande</div>
              <div className="text-xs text-slate-500 dark:text-slate-400">Software Engineer · Full Stack · AI/ML</div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-slate-500 dark:text-slate-400">
            <a href="https://github.com/divyanshkande" target="_blank" rel="noreferrer" aria-label="GitHub" className="rounded-full border border-slate-200 bg-white/70 p-2 transition hover:-translate-y-0.5 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:hover:text-brand-300">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/divyanshkande" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="rounded-full border border-slate-200 bg-white/70 p-2 transition hover:-translate-y-0.5 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:hover:text-brand-300">
              <FiLinkedin />
            </a>
            <a href="mailto:divyanshkande@gmail.com" aria-label="Email" className="rounded-full border border-slate-200 bg-white/70 p-2 transition hover:-translate-y-0.5 hover:text-brand-600 dark:border-white/10 dark:bg-white/5 dark:hover:text-brand-300">
              <FiMail />
            </a>
          </div>

          <p className="text-xs text-slate-500 dark:text-slate-400">
            © {new Date().getFullYear()} Divyansh Kande. Crafted with React · Tailwind · Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
