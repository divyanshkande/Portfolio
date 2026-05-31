import { FormEvent, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiSend, FiCheckCircle } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { SectionHeading } from './About';

export function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    // Placeholder handler — integrate with your backend / email service.
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm({ name: '', email: '', message: '' });
    }, 3500);
  };

  const socials = [
    { icon: <FiLinkedin className="h-5 w-5" />, label: 'LinkedIn', href: 'https://www.linkedin.com/in/divyanshkande', color: 'from-sky-500 to-blue-600' },
    { icon: <FiGithub className="h-5 w-5" />, label: 'GitHub', href: 'https://github.com/divyanshkande', color: 'from-slate-700 to-slate-900' },
    { icon: <FiMail className="h-5 w-5" />, label: 'Email', href: 'mailto:divyanshkande@gmail.com', color: 'from-rose-500 to-pink-600' },
    { icon: <FiMapPin className="h-5 w-5" />, label: 'India', href: '#', color: 'from-emerald-500 to-teal-600' },
  ];

  return (
    <section id="contact" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Contact" title="Let's Build Together" subtitle="Have an opportunity, collaboration or idea in mind? I'd love to hear about it." />

        <div className="mt-14 grid gap-8 lg:grid-cols-5">
          {/* Left — Info + socials */}
          <Reveal>
            <div className="card-glow glass relative overflow-hidden rounded-3xl p-8 shadow-sm lg:col-span-2">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-gradient-to-br from-brand-500/30 to-violet-500/30 blur-3xl" />
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">Get in touch</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                I'm open to <span className="font-semibold text-slate-800 dark:text-white">full-time</span>,{' '}
                <span className="font-semibold text-slate-800 dark:text-white">internship</span> and{' '}
                <span className="font-semibold text-slate-800 dark:text-white">freelance</span> software
                engineering opportunities.
              </p>

              <div className="mt-6 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-brand-500 to-violet-500 text-white shadow-md">
                    <FiMail />
                  </span>
                  <div>
                    <div className="font-semibold">Email</div>
                    <a className="text-slate-500 hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300" href="mailto:divyanshkande@gmail.com">
                      divyanshkande@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-200">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow-md">
                    <FiMapPin />
                  </span>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="text-slate-500 dark:text-slate-400">Bhopal, India</div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Find me online
                </div>
                <div className="mt-3 grid grid-cols-4 gap-3">
                  {socials.map((s) => (
                    <motion.a
                      key={s.label}
                      whileHover={{ y: -4, scale: 1.05 }}
                      aria-label={s.label}
                      href={s.href}
                      target={s.href.startsWith('http') ? '_blank' : undefined}
                      rel="noreferrer"
                      className={`group relative grid place-items-center gap-1 rounded-2xl border border-slate-200 bg-white/70 p-3 text-slate-700 transition dark:border-white/10 dark:bg-white/5 dark:text-slate-200`}
                    >
                      <span className={`grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${s.color} text-white shadow-md transition-transform group-hover:-translate-y-0.5`}>
                        {s.icon}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400">
                        {s.label}
                      </span>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right — Form */}
          <Reveal delay={0.1}>
            <form
              onSubmit={onSubmit}
              className="card-glow glass relative overflow-hidden rounded-3xl p-8 shadow-sm lg:col-span-3"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Name</span>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="mt-2 block w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                    placeholder="Your full name"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Email</span>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="mt-2 block w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                    placeholder="you@example.com"
                  />
                </label>
              </div>
              <label className="mt-5 block">
                <span className="text-xs font-semibold text-slate-600 dark:text-slate-300">Message</span>
                <textarea
                  required
                  rows={6}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="mt-2 block w-full resize-none rounded-xl border border-slate-200 bg-white/70 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-500 focus:ring-4 focus:ring-brand-500/10 dark:border-white/10 dark:bg-white/5 dark:text-slate-100"
                  placeholder="Tell me about your project, role or idea…"
                />
              </label>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  I'll respond within 24 hours.
                </p>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.97 }}
                  type="submit"
                  disabled={sent}
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 to-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-brand-600/25 transition hover:shadow-xl hover:shadow-brand-600/30 disabled:opacity-80"
                >
                  {sent ? (
                    <>
                      <FiCheckCircle /> Message Sent
                    </>
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
