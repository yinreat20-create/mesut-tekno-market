import { useEffect, useState } from 'react';
import { Phone, Menu, X, Crown } from 'lucide-react';
import { CONTACT, NAV_LINKS, waLink } from '../constants';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-noir-950/90 py-3 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.9)] backdrop-blur-xl gold-border border-x-0 border-t-0'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="lux-container flex items-center justify-between gap-4">
        {/* Logo */}
        <a href="#home" className="group flex items-center gap-3">
          <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-gold-500/40 bg-noir-850">
            <Crown className="h-5 w-5 text-gold-400 transition-transform duration-500 group-hover:scale-110" />
            <span className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-gold-soft" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-wide text-white">
              VIP <span className="gold-text">TRANSFER</span>
            </span>
            <span className="mt-1 text-[10px] uppercase tracking-[0.3em] text-gray-400">
              Luxury Travel
            </span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative px-4 py-2 text-sm font-medium uppercase tracking-wider text-gray-300 transition-colors hover:text-gold-300"
            >
              {link.label}
              <span className="absolute inset-x-4 bottom-1 h-px origin-left scale-x-0 bg-gradient-to-r from-gold-500 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        {/* Right: phone */}
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex flex-col items-end text-right">
            <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gold-400">
              7/24 Hizmet
            </span>
            <a
              href={CONTACT.phoneHref}
              className="font-display text-lg font-semibold text-white transition-colors hover:text-gold-300"
            >
              {CONTACT.phoneDisplay}
            </a>
          </div>
          <a
            href={CONTACT.phoneHref}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 bg-gold-500/5 text-gold-400 transition-all duration-500 hover:scale-110 hover:bg-gold-500/15 hover:shadow-gold-soft"
            aria-label="Telefon ile ara"
          >
            <Phone className="h-4 w-4" />
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-gold-500/40 text-gold-300 lg:hidden"
          aria-label="Menü"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-gold-500/10 bg-noir-950/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[420px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="lux-container flex flex-col gap-1 py-5">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider text-gray-200 transition-colors hover:bg-gold-500/10 hover:text-gold-300"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-3 flex items-center justify-between gap-3 border-t border-gold-500/10 pt-4">
            <a
              href={CONTACT.phoneHref}
              className="flex items-center gap-3 text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                <Phone className="h-4 w-4" />
              </span>
              <span className="font-display text-base font-semibold">
                {CONTACT.phoneDisplay}
              </span>
            </a>
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold !px-5 !py-3 !text-xs"
            >
              WhatsApp
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
