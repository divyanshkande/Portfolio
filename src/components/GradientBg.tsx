export function GradientBg() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-20 overflow-hidden"
    >
      {/* Animated base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-[#0b1020] dark:via-[#0a0f1f] dark:to-[#070912]" />

      {/* Blob 1 */}
      <div className="absolute -top-40 -left-40 h-[38rem] w-[38rem] rounded-full bg-gradient-to-br from-blue-400/40 to-violet-400/30 blur-3xl dark:from-brand-500/30 dark:to-violet-500/25 animate-float" />
      {/* Blob 2 */}
      <div className="absolute top-1/3 -right-40 h-[34rem] w-[34rem] rounded-full bg-gradient-to-br from-cyan-300/40 to-pink-300/30 blur-3xl dark:from-cyan-500/25 dark:to-pink-500/20 animate-float [animation-delay:-3s]" />
      {/* Blob 3 */}
      <div className="absolute bottom-0 left-1/3 h-[30rem] w-[30rem] rounded-full bg-gradient-to-br from-emerald-300/30 to-amber-300/25 blur-3xl dark:from-emerald-500/15 dark:to-amber-500/10 animate-float [animation-delay:-1.5s]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.25] dark:opacity-[0.15]"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(100,116,139,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(100,116,139,0.08) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 75%)',
        }}
      />
    </div>
  );
}
