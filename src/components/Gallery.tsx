import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiX, FiZoomIn } from 'react-icons/fi';
import { Reveal } from './Reveal';
import { SectionHeading } from './About';
import atfrontofmandapam from '../assets/atfrontofmandapam.jpeg';
import insidebharatmandapam from '../assets/insidebharatmandapam.jpeg';
import newdelhiteam from '../assets/newdelhiteam.jpeg';
import hacksagonaudi from '../assets/hacksagonaudi.jpeg';
import hacksagoninside from '../assets/hacksagoninside.jpeg';
import hacksagonoutside from '../assets/hacksagonoutside.jpeg';

const photos = [
  {
    src: atfrontofmandapam,
   
   
    tall: true,
  },
  {
    src: hacksagonaudi,
   
  },
  {
    src: newdelhiteam,
   
  
    tall: true,
  },
  {
    src: hacksagoninside,
  
   
  },
  {
    src: insidebharatmandapam,
  
    
    tall: true,
  },
  {
    src: hacksagonoutside,
   
  
  },
];

export function Gallery() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (index === null) return;
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') setIndex((i) => (i === null ? 0 : (i + 1) % photos.length));
      if (e.key === 'ArrowLeft') setIndex((i) => (i === null ? 0 : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = index !== null ? 'hidden' : '';
  }, [index]);

  return (
    <section id="gallery" className="relative section-padding">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Moments"
          title="Hackathon Gallery"
          subtitle="Snapshots from hackathons, team builds, certificates and celebrations."
        />

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3 [column-fill:_balance]">
          {photos.map((p, idx) => (
            <Reveal key={p.src} delay={idx * 0.05}>
              <motion.button
                onClick={() => setIndex(idx)}
                whileHover={{ y: -6 }}
                className="card-glow group relative mb-5 block w-full overflow-hidden rounded-3xl shadow-sm"
              >
                <div className={`relative w-full ${p.tall ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                 <img
  src={p.src}
  alt="Hackathon Photo"
  loading="lazy"
  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
/>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-60" />
                  <div className="absolute inset-0 grid place-items-center opacity-0 transition duration-500 group-hover:opacity-100">
                    <span className="inline-flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-slate-900 shadow-lg">
                      <FiZoomIn /> View
                    </span>
                  </div>
                 
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
            className="fixed inset-0 z-[60] grid place-items-center bg-slate-950/80 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl overflow-hidden rounded-3xl bg-slate-900 text-white shadow-2xl"
            >
              <img
  src={photos[index].src}
  alt="Gallery Photo"
  className="max-h-[85vh] w-full object-contain"
/>
              <button
  onClick={() => setIndex(null)}
  aria-label="Close"
  className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-xl bg-black/40 text-white hover:bg-black/60"
>
  <FiX />
</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
