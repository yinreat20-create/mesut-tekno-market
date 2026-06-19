import { useEffect, useState } from 'react';
import { Phone, ArrowUp } from 'lucide-react';
import { CONTACT, waLink } from '../constants';

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Yukarı"
        className={`flex h-11 w-11 items-center justify-center rounded-full border border-gold-500/40 bg-noir-900/90 text-gold-400 backdrop-blur transition-all duration-500 hover:bg-gold-500/15 hover:shadow-gold-soft ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <ArrowUp className="h-5 w-5" />
      </button>

      <a
        href={waLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-[0_8px_30px_-6px_rgba(16,185,129,0.6)] transition-transform duration-500 hover:scale-110"
        aria-label="WhatsApp ile iletişime geç"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500 opacity-40" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="relative h-7 w-7 fill-current"
        >
          <path d="M16.004 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.258.59 4.455 1.71 6.397L3.2 28.8l6.598-1.69a12.74 12.74 0 0 0 6.206 1.584h.004c7.06 0 12.8-5.74 12.8-12.8S23.064 3.2 16.004 3.2zm0 23.36h-.003a10.6 10.6 0 0 1-5.4-1.48l-.387-.23-3.92 1.004 1.047-3.822-.252-.395a10.58 10.58 0 0 1-1.622-5.647c0-5.864 4.773-10.636 10.64-10.636 2.84 0 5.51 1.107 7.518 3.116s3.114 4.68 3.114 7.52c0 5.864-4.773 10.636-10.637 10.636zm5.83-7.96c-.32-.16-1.893-.934-2.186-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.186.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.592-1.895-1.778-2.215-.187-.32-.02-.493.14-.652.144-.143.32-.373.48-.56.16-.187.213-.32.32-.534.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.823.763.33 1.358.527 1.822.674.766.244 1.463.21 2.013.127.614-.092 1.893-.773 2.16-1.52.266-.747.266-1.387.186-1.52-.08-.133-.293-.213-.613-.373z" />
        </svg>
      </a>

      <a
        href={CONTACT.phoneHref}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-gold-500 text-noir-950 shadow-[0_8px_30px_-6px_rgba(201,162,77,0.6)] transition-transform duration-500 hover:scale-110"
        aria-label="Telefon ile ara"
      >
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
