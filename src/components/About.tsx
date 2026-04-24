import { useEffect, useRef, useState } from 'react';

const features = [
  {
    icon: '🌾',
    title: 'Premium Ingredients',
    description: 'We use 100% whole wheat, authentic spices, and the finest ingredients for a perfect homestyle taste.',
  },
  {
    icon: '🔥',
    title: 'Ready in Minutes',
    description: 'Skip the kneading and prep. Just heat on a pan or in the microwave and serve hot instantly.',
  },
  {
    icon: '✨',
    title: 'No Preservatives',
    description: 'Our products are packed fresh using advanced technology, keeping them safe without artificial preservatives.',
  },
  {
    icon: '❤️',
    title: 'Authentic Flavor',
    description: 'Crafted using traditional recipes to ensure every bite feels like a warm, home-cooked meal.',
  },
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<(typeof features)[0] | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" className="relative bg-white py-16 sm:py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Heading */}
        <div
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ${
            inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
          }`}
        >
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">
            Why Choose Us
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-surface-900 sm:text-5xl">
            Homestyle Cooking,{' '}
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">
              Simplified
            </span>
          </h2>
          <p className="mt-4 text-lg text-surface-800/60">
            We take care of the prep work so you can enjoy fresh, authentic Indian breads and meals without the hassle.
          </p>
        </div>

        {/* Feature cards */}
        <div className="mt-12 md:mt-16 flex md:grid md:grid-cols-4 gap-4 md:gap-6 overflow-x-auto pb-6 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {features.map((f, i) => (
            <div
              key={f.title}
              onClick={() => setSelectedFeature(f)}
              className={`group relative min-w-[85vw] sm:min-w-0 snap-center rounded-2xl border border-surface-200 bg-white p-8 transition-all duration-700 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5 hover:-translate-y-1 cursor-pointer ${
                inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-50 text-3xl transition-colors group-hover:bg-primary-100">
                {f.icon}
              </div>
              <h3 className="mb-2 font-display text-lg font-bold text-surface-900">{f.title}</h3>
              <p className="text-sm leading-relaxed text-surface-800/60">{f.description}</p>
              {/* Hover gradient border */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/0 via-primary-500/0 to-primary-500/0 transition-all duration-300 group-hover:from-primary-500/5 group-hover:to-accent-400/5" />
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {selectedFeature && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div 
            className="relative w-full max-w-lg rounded-3xl bg-white p-8 shadow-2xl animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setSelectedFeature(null)}
              className="absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full bg-surface-100 text-surface-900 transition-colors hover:bg-surface-200"
            >
              ✕
            </button>
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary-50 text-4xl">
              {selectedFeature.icon}
            </div>
            <h3 className="mb-4 font-display text-2xl font-bold text-surface-900">{selectedFeature.title}</h3>
            <p className="text-lg leading-relaxed text-surface-800/70">{selectedFeature.description}</p>
            <button 
              onClick={() => setSelectedFeature(null)}
              className="mt-8 w-full rounded-xl bg-primary-600 py-4 font-semibold text-white transition-colors hover:bg-primary-700"
            >
              Close
            </button>
          </div>
          {/* Backdrop click to close */}
          <div className="absolute inset-0 -z-10" onClick={() => setSelectedFeature(null)} />
        </div>
      )}
    </section>
  );
}
