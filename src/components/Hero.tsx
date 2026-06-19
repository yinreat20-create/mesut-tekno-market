import { Phone, MessageCircle, Crown, Star } from 'lucide-react';
import { CONTACT, waLink } from '../constants';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(7,6,5,0.95) 0%, rgba(7,6,5,0.78) 45%, rgba(7,6,5,0.55) 100%), url('https://images.pexels.com/photos/97079/pexels-photo-97079.jpeg?auto=compress&cs=tinysrgb&w=1920')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-noir-950 via-transparent to-noir-950/40" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              'radial-gradient(circle at 20% 30%, rgba(201,162,77,0.18), transparent 45%)',
          }}
        />
      </div>

      <div className="relative z-10 lux-container flex min-h-screen flex-col justify-center pt-28 pb-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]">
          {/* Left content */}
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-gold-500/30 bg-gold-500/5 px-4 py-2">
              <span className="flex h-2 w-2 rounded-full bg-gold-400 animate-pulse-glow" />
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300">
                Şoförlü & Şoförsüz
              </span>
            </div>

            <h1 className="font-display text-5xl font-bold leading-[1.05] text-white drop-shadow-2xl sm:text-6xl xl:text-7xl">
              VIP <span className="gold-text text-shadow-gold">TRANSFER</span>
              <br />
              <span className="text-4xl sm:text-5xl xl:text-6xl">& ARAÇ KİRALAMA</span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg">
              Türkiye içi ve uluslararası yolcu taşımacılığı hizmetlerinde
              güvenli, konforlu ve profesyonel çözümler.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a href={CONTACT.phoneHref} className="btn-gold group">
                <Phone className="h-4 w-4 transition-transform group-hover:rotate-12" />
                Telefon ile ara
              </a>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold group"
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                WhatsApp
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-gold-500/15 pt-6">
              {[
                { value: '7/24', label: 'Hizmet' },
                { value: '100%', label: 'Güvenli' },
                { value: 'VIP', label: 'Konfor' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold gold-text">{stat.value}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.2em] text-gray-400">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: vehicle placeholders */}
          <div className="relative hidden lg:block">
            <div className="relative">
              {/* Mercedes card */}
              <div className="card-luxury group relative animate-fade-in p-4 [animation-delay:300ms]">
                <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-noir-800 to-noir-950">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
                    <Crown className="h-10 w-10 text-gold-400/60" />
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300/70">
                      Mercedes VIP
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">
                      Görsel alanı
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir-950/60 to-transparent" />
                </div>
                <div className="mt-3 flex items-center justify-between px-1">
                  <div>
                    <p className="font-display text-sm font-semibold text-white">
                      Mercedes Transporter VIP
                    </p>
                    <p className="text-[11px] text-gray-400">Şoförlü Hizmet</p>
                  </div>
                  <span className="flex items-center gap-1 text-xs text-gold-300">
                    <Star className="h-3 w-3 fill-gold-400 text-gold-400" /> Premium
                  </span>
                </div>
              </div>

              {/* Ford card - offset */}
              <div className="card-luxury group relative mt-5 ml-12 animate-fade-in p-4 [animation-delay:500ms]">
                <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-gradient-to-br from-noir-750 to-noir-900">
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-gold-300/70">
                      Ford Courier
                    </span>
                    <span className="text-[10px] uppercase tracking-widest text-gray-500">
                      Görsel alanı
                    </span>
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-noir-950/60 to-transparent" />
                </div>
                <div className="mt-3 flex items-center justify-between px-1">
                  <p className="font-display text-sm font-semibold text-white">Ford Courier</p>
                  <span className="text-xs text-gray-400">Ekonomik</span>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -left-6 top-6 flex animate-float-y items-center gap-2 rounded-xl border border-gold-500/40 bg-noir-900/90 px-4 py-3 backdrop-blur">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold-500/15 text-gold-400">
                  <Crown className="h-4 w-4" />
                </span>
                <div>
                  <p className="font-display text-sm font-bold text-white">Premium</p>
                  <p className="text-[10px] text-gray-400">VIP Filo</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-noir-950 to-transparent" />
    </section>
  );
}
