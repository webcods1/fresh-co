import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <nav
      id="main-nav"
      className={`absolute top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-black/10 backdrop-blur-md shadow-lg shadow-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="relative z-50 mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="#home" className="flex items-center group">
          <img 
            src="/fresh&Co.png" 
            alt="Fresh&Co Logo" 
            className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
          />
        </a>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="relative rounded-lg px-4 py-2 text-sm font-medium text-surface-800 transition-colors hover:text-primary-600 hover:bg-primary-50"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button 
          className="shop-now-btn hidden md:block scale-75 origin-right lg:scale-90"
          onClick={() => {
            setMobileOpen(false);
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="default-btn">
            <span>Shop Now</span>
          </div>
          <div className="hover-btn">
            <span>Shop Now</span>
          </div>
        </button>

        {/* Mobile toggle */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex flex-col gap-1.5 md:hidden bg-white/95 p-3 rounded-xl shadow-lg border border-black/5"
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${mobileOpen ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-6 bg-black transition-all duration-300 ${mobileOpen ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </div>

      {/* Mobile menu Full Screen */}
      <div
        className={`fixed inset-0 bg-white/95 backdrop-blur-xl z-40 transform transition-transform duration-500 ease-in-out md:hidden flex flex-col items-center justify-center space-y-8 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {navLinks.map((l) => (
          <a
            key={l.href}
            href={l.href}
            onClick={() => setMobileOpen(false)}
            className="block text-3xl font-bold text-surface-800 hover:text-primary-600 transition-colors tracking-wide"
          >
            {l.label}
          </a>
        ))}
        <button 
          className="shop-now-btn mt-8 scale-110 origin-center"
          onClick={() => {
            setMobileOpen(false);
            document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="default-btn w-full justify-center px-10">
            <span>Shop Now</span>
          </div>
          <div className="hover-btn w-full justify-center px-10">
            <span>Shop Now</span>
          </div>
        </button>
      </div>
    </nav>
  );
}
