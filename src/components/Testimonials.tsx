import { useEffect, useRef, useState } from 'react';

const testimonials = [
  { name: 'Priya Patel', role: 'Working Mother', text: 'These chapatis are a lifesaver! They puff up perfectly and taste just like homemade. My kids love them.', avatar: '👩‍💼', rating: 5 },
  { name: 'Rahul Sharma', role: 'Student', text: 'The bhaturas are amazing. I just pop them in the pan and I have a quick, delicious meal ready in minutes.', avatar: '👨‍🎓', rating: 5 },
  { name: 'Aisha Khan', role: 'Food Blogger', text: 'I was skeptical about ready-to-cook breads, but the quality here is unmatched. Fluffy, fresh, and zero preservatives.', avatar: '📸', rating: 5 },
];

export default function Testimonials() {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change testimonial every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="bg-white py-24 lg:py-32" ref={ref}>
      <div className="mx-auto max-w-7xl px-6">
        <div className={`mx-auto max-w-2xl text-center transition-all duration-700 ${inView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <span className="inline-block rounded-full bg-primary-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-700">Testimonials</span>
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-surface-900 sm:text-5xl">
            Loved by <span className="bg-gradient-to-r from-primary-500 to-primary-700 bg-clip-text text-transparent">Thousands</span>
          </h2>
        </div>

        <div className="mt-16 relative max-w-3xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="w-full shrink-0 px-4">
                <div className="relative rounded-3xl border border-surface-200 bg-white p-8 sm:p-12 shadow-sm transition-all duration-500">
                  {/* Quote Icon Background */}
                  <div className="absolute top-6 right-8 text-surface-100 select-none">
                    <svg className="h-16 w-16 fill-current" viewBox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.899 14.391 16.264 15.139 16.095C16.149 15.865 16.899 15.017 16.899 14.017V11.017C16.899 9.916 16.002 9.017 14.899 9.017H11.899C10.796 9.017 9.899 9.916 9.899 11.017V17.017C9.899 19.215 11.696 21 13.899 21H14.017ZM21.017 21L21.017 18C21.017 16.899 21.391 16.264 22.139 16.095C23.149 15.865 23.899 15.017 23.899 14.017V11.017C23.899 9.916 23.002 9.017 21.899 9.017H18.899C17.796 9.017 16.899 9.916 16.899 11.017V17.017C16.899 19.215 18.696 21 20.899 21H21.017ZM11.017 21L11.017 18C11.017 16.899 11.391 16.264 12.139 16.095C13.149 15.865 13.899 15.017 13.899 14.017V11.017C13.899 9.916 13.002 9.017 11.899 9.017H8.899C7.796 9.017 6.899 9.916 6.899 11.017V17.017C6.899 19.215 8.696 21 10.899 21H11.017Z" /></svg>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <svg key={j} className="h-6 w-6 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-xl sm:text-2xl text-surface-800 leading-relaxed italic mb-8">"{t.text}"</p>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-3xl shadow-inner">{t.avatar}</div>
                    <div>
                      <div className="font-display text-lg font-bold text-surface-900">{t.name}</div>
                      <div className="text-surface-500 font-medium">{t.role}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2.5 mt-10">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`transition-all duration-500 rounded-full ${
                  currentIndex === i 
                    ? 'w-10 h-2 bg-primary-600' 
                    : 'w-2 h-2 bg-surface-200 hover:bg-surface-300'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
