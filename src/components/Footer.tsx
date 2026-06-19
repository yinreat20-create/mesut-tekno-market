import { Phone, Mail, MapPin, MessageCircle, Crown, Clock3 } from 'lucide-react';
import { CONTACT, NAV_LINKS, waLink } from '../constants';

const QR_PATTERN = Array.from({ length: 64 }, (_, i) => {
  const seed = (i * 1103515245 + 12345) & 0x7fffffff;
  return (seed >> 16) & 1;
});

export function Footer() {
  return (
    <footer id="contact" className="relative mt-px border-t border-gold-500/20 bg-noir-950">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-40 w-2/3 -translate-x-1/2 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="lux-container relative py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Left: contact */}
          <div>
            <h4 className="mb-5 inline-flex items-center gap-2 font-display text-lg font-bold text-white">
              <span className="h-4 w-1 rounded bg-gold-500" /> İletişim
            </h4>
            <ul className="space-y-4 text-sm">
              <li>
                <a
                  href={CONTACT.phoneHref}
                  className="group flex items-center gap-3 text-gray-300 transition-colors hover:text-gold-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/5 text-gold-400 transition-transform group-hover:scale-110">
                    <Phone className="h-4 w-4" />
                  </span>
                  <span className="font-display text-lg font-semibold text-white">
                    {CONTACT.phoneDisplay}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="group flex items-center gap-3 text-gray-300 transition-colors hover:text-gold-300"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/5 text-gold-400 transition-transform group-hover:scale-110">
                    <Mail className="h-4 w-4" />
                  </span>
                  <span className="text-gray-200">{CONTACT.email}</span>
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/5 text-gold-400">
                  <MapPin className="h-4 w-4" />
                </span>
                <span>Türkiye Geneli ve Uluslararası Hizmet</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-gold-500/30 bg-gold-500/5 text-gold-400">
                  <Clock3 className="h-4 w-4" />
                </span>
                <span>7/24 Kesintisiz Hizmet</span>
              </li>
            </ul>
          </div>

          {/* Center: logo + desc + nav */}
          <div className="text-center">
            <a href="#home" className="group inline-flex flex-col items-center gap-2">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl border border-gold-500/40 bg-noir-850 text-gold-400 transition-transform duration-500 group-hover:scale-110 group-hover:shadow-gold-soft">
                <Crown className="h-6 w-6" />
              </span>
              <span className="font-display text-2xl font-bold text-white">
                VIP <span className="gold-text">TRANSFER</span>
              </span>
            </a>
            <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-gray-400">
              Türkiye içi ve uluslararası yolcu taşımacılığında güvenli, konforlu
              ve profesyonel VIP transfer & araç kiralama hizmeti.
            </p>
            <nav className="mt-5 flex flex-wrap justify-center gap-x-4 gap-y-2">
              {NAV_LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="text-xs uppercase tracking-wider text-gray-500 transition-colors hover:text-gold-300"
                >
                  {l.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Right: WhatsApp QR + button */}
          <div className="md:text-right">
            <h4 className="mb-5 inline-flex items-center gap-2 font-display text-lg font-bold text-white md:flex-row-reverse">
              <span className="h-4 w-1 rounded bg-gold-500" /> WhatsApp
            </h4>
            <div className="flex flex-col items-start gap-5 md:items-end">
              {/* QR placeholder */}
              <div className="relative h-36 w-36 overflow-hidden rounded-2xl border border-gold-500/30 bg-white p-3 shadow-gold-soft">
                <div className="grid h-full w-full grid-cols-8 grid-rows-8 gap-px">
                  {QR_PATTERN.map((on, i) => (
                    <span
                      key={i}
                      className={`rounded-[1px] ${
                        on ? 'bg-noir-950' : 'bg-white'
                      }`}
                    />
                  ))}
                </div>
                <span className="absolute -bottom-px left-1/2 -translate-x-1/2 whitespace-nowrap rounded-t bg-emerald-500 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-white">
                  QR Kod Alanı
                </span>
              </div>
              <a
                href={waLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-6 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300 transition-all duration-500 hover:border-emerald-400 hover:bg-emerald-500/20 hover:shadow-gold-soft"
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                WhatsApp'tan Yazın
              </a>
            </div>
          </div>
        </div>
      </div>
<div className="flex flex-col items-center justify-center my-6">
  <p className="text-sm text-amber-500 mb-2">Hızlı İletişim için WhatsApp QR Kod</p>
  <img src="/qr.png" alt="WhatsApp QR" className="w-32 h-32 rounded-lg border-2 border-amber-500" />
</div>
          © 2026 VIP Transfer. Tüm hakları saklıdır.
        </p>
      </div>
    </footer>
  );
}
