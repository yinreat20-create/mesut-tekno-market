import { MessageCircle, ShieldCheck, Clock3 } from 'lucide-react';
import { waLink } from '../constants';
import { Reveal } from './Reveal';

export function Reservation() {
  return (
    <section id="pricing" className="relative z-20 -mt-px px-5 py-16 sm:px-8">
      <Reveal className="lux-container">
        <div className="relative overflow-hidden rounded-3xl border border-gold-500/40 bg-gradient-to-br from-noir-850 via-noir-900 to-noir-950 p-8 shadow-gold sm:p-12">
          {/* Decorative glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-gold-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-56 w-56 rounded-full bg-gold-500/5 blur-3xl" />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1.1fr_auto]">
            {/* Left text */}
            <div>
              <span className="mb-3 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-gold-400">
                <span className="h-px w-8 bg-gold-500" /> Hızlı & Güvenilir
              </span>
              <h2 className="font-display text-4xl font-bold leading-tight text-white sm:text-5xl">
                HIZLI <span className="gold-text">REZERVASYON</span>
              </h2>
              <p className="mt-4 max-w-md text-sm leading-relaxed text-gray-300">
                Tek tıkla WhatsApp üzerinden bize ulaşın, size özel transfer ve
                kiralama teklifini hemen hazırlayalım. Form yok, bekleme yok.
              </p>

              {/* badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-2 text-xs text-gold-200">
                  <ShieldCheck className="h-3.5 w-3.5" /> Güvenli Rezervasyon
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-gold-500/25 bg-gold-500/5 px-4 py-2 text-xs text-gold-200">
                  <Clock3 className="h-3.5 w-3.5" /> 7/24 Ulaşılabilir
                </span>
              </div>
            </div>

            {/* Right action */}
            <div className="flex flex-col items-stretch gap-4 lg:items-end">
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold w-full justify-center !px-10 !py-5 text-base sm:w-auto lg:w-72"
              >
                REZERVASYON YAPTIR
              </a>

              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 rounded-xl border border-emerald-500/40 bg-emerald-500/5 px-6 py-4 transition-all duration-500 hover:border-emerald-400 hover:bg-emerald-500/10"
              >
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                  <MessageCircle className="h-5 w-5" />
                  <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/30 opacity-50" />
                </span>
                <span className="text-left">
                  <span className="block text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                    WhatsApp ile
                  </span>
                  <span className="block text-sm font-semibold text-white">
                    HIZLI TEKLİF AL
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
