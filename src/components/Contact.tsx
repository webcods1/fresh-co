import { useEffect, useRef, useState } from 'react';

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="contact" className="relative bg-gradient-to-br from-primary-50 via-white to-accent-400/10 py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left info */}
          <div className={`transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">Get In Touch</span>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-surface-900 sm:text-5xl">
              Let's Talk <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Fresh</span>
            </h2>
            <p className="mt-4 text-lg text-surface-800/60 max-w-md">Have questions about our produce, delivery areas, or wholesale options? We'd love to hear from you.</p>

            <div className="mt-10 space-y-6">
              {[
                { icon: '📍', label: 'Visit Us', value: 'Valanjery' },
                { icon: '📞', label: 'Call Us', value: '+91 9539180404' },
                { icon: '✉️', label: 'Email Us', value: 'hello@freshandco.com' },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary-100 text-xl">{item.icon}</div>
                  <div>
                    <div className="font-display font-bold text-surface-900">{item.label}</div>
                    <div className="text-sm text-surface-800/60">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          </div>
        </div>
      </div>
    </section>
  );
}
