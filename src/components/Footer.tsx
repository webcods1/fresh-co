const links = {
  Product: ['Classic Chapati', 'Fluffy Bhatura', 'Ready Meals', 'Gift Cards'],
  Company: ['About Us', 'Careers', 'Blog', 'Press'],
  Support: ['Help Center', 'Delivery Areas', 'Returns', 'Contact'],
};

export default function Footer() {
  return (
    <footer className="bg-surface-900 text-white">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#home" className="flex items-center group">
              <img 
                src="/fresh&Co.png" 
                alt="Fresh&Co Logo" 
                className="h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105 filter brightness-0 invert" 
              />
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              Bringing authentic, ready-to-cook Indian breads and meals to your kitchen. Homestyle taste, simplified.
            </p>
            <div className="mt-6 flex gap-3">
              {['𝕏', 'in', 'f', '📷'].map((icon, i) => (
                <a key={i} href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-bold text-white/70 transition-all hover:bg-primary-600 hover:text-white">
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="font-display font-bold text-white mb-4">{title}</h4>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/50 transition-colors hover:text-primary-400">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/40">© 2026 Fresh&Co. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Privacy</a>
            <a href="#" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Terms</a>
            <a href="#" className="text-sm text-white/40 hover:text-primary-400 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
