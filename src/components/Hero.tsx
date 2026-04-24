import { useEffect, useState } from 'react';

export default function Hero() {
  const images = ['/hero.png', '/hero1.png'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Slide every 4 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="w-full relative overflow-hidden group pt-20 md:pt-24 lg:pt-0">
      <div 
        className="flex transition-transform duration-700 ease-in-out items-center"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`Hero Banner ${index + 1}`} 
            className="w-full shrink-0 h-auto object-contain" 
          />
        ))}
      </div>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentIndex === index 
                ? 'bg-orange-500 w-8' 
                : 'bg-black/20 hover:bg-black/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
