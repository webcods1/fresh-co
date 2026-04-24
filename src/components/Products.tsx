import { useEffect, useRef, useState } from 'react';

const products = [
  { name: 'Classic Chapati (10 pcs)', category: 'Breads', price: '₹99', image: '/image1.jpeg', badge: 'Best Seller', color: 'from-orange-100 to-orange-200' },
  { name: 'Fluffy Bhatura (5 pcs)', category: 'Breads', price: '₹120', image: '/image2.jpeg', badge: 'Popular', color: 'from-amber-100 to-yellow-100' },
];

export default function Products() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.1 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="products" className="relative bg-surface-50 py-24 lg:py-32" ref={ref}>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">Our Selection</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-surface-900 sm:text-5xl">
            Fresh <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Picks</span> for You
          </h2>
          <p className="mt-4 text-surface-600 text-lg">Delicious, ready-to-cook fresh products delivered to your doorstep.</p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 max-w-4xl mx-auto">
          {products.map((p, i) => (
            <div key={p.name}
              className={`group relative overflow-hidden rounded-2xl border border-surface-200 bg-white transition-all duration-500 hover:shadow-xl hover:-translate-y-1 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              style={{ transitionDelay: `${i * 100}ms` }}>
              {p.badge && <div className="absolute top-3 right-3 z-10 rounded-full bg-primary-600 px-2.5 py-1 text-[10px] font-semibold text-white sm:top-4 sm:right-4 sm:px-3 sm:text-xs">{p.badge}</div>}
              <div className={`relative h-64 overflow-hidden bg-gradient-to-br sm:h-72 ${p.color}`}>
                <img 
                  src={p.image} 
                  alt={p.name} 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-bold leading-tight text-surface-900">{p.name}</h3>
                <p className="mt-1 text-sm text-surface-800/50">{p.category}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary-600">{p.price}</span>
                  <button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600 transition-all hover:bg-primary-600 hover:text-white hover:shadow-lg">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
