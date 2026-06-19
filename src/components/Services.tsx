import {
  Plane,
  Route,
  Globe2,
  UserSquare2,
  KeyRound,
  Clock3,
} from 'lucide-react';
import { waLink } from '../constants';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';

const SERVICES = [
  {
    icon: Plane,
    title: 'Havalimanı Transferi',
    desc: 'Uçuş takipli, zamanında ve stressiz havalimanı ulaşımı.',
    waMessage: 'Havalimanı transferi hakkında bilgi almak istiyorum.',
  },
  {
    icon: Route,
    title: 'Şehirler Arası Yolculuk',
    desc: 'Konforlu ve güvenli şehirler arası VIP yolculuk deneyimi.',
    waMessage: 'Şehirler arası yolculuk hakkında bilgi almak istiyorum.',
  },
  {
    icon: Globe2,
    title: 'Uluslararası Yolcu Taşımacılığı',
    desc: 'Sınırlar ötesi profesyonel yolcu taşıma çözümleri.',
    waMessage: 'Uluslararası taşımacılık hakkında bilgi almak istiyorum.',
  },
  {
    icon: UserSquare2,
    title: 'Şoförlü Araç Kiralama',
    desc: 'Deneyimli sürücülerle premium şoförlü kiralama.',
    waMessage: 'Şoförlü araç kiralama hakkında bilgi almak istiyorum.',
  },
  {
    icon: KeyRound,
    title: 'Şoförsüz Araç Kiralama',
    desc: 'Esnek ve özgür şoförsüz kiralama seçenekleri.',
    waMessage: 'Şoförsüz araç kiralama hakkında bilgi almak istiyorum.',
  },
  {
    icon: Clock3,
    title: '7/24 Hizmet',
    desc: 'Haftanın her günü, gece gündüz kesintisiz destek.',
    waMessage: 'Hizmetleriniz hakkında bilgi almak istiyorum.',
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-28">
      {/* subtle bg */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-gold-500/5 blur-3xl" />
      </div>

      <div className="lux-container relative">
        <SectionTitle eyebrow="Hizmetler" title="Hizmetlerimiz" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-gray-400">
          VIP transfer ve araç kiralama ihtiyaçlarınız için eksiksiz, premium
          çözümler sunuyoruz.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s, i) => (
            <Reveal as="article" key={s.title} delay={i * 100}>
              <a
                href={waLink(s.waMessage)}
                target="_blank"
                rel="noopener noreferrer"
                className="card-luxury group flex h-full flex-col gap-4 p-7"
              >
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl border border-gold-500/30 bg-gradient-to-br from-gold-500/10 to-transparent text-gold-400 transition-all duration-500 group-hover:scale-110 group-hover:shadow-gold-soft">
                  <s.icon className="h-7 w-7" />
                  <span className="absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 shadow-gold-soft" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-semibold text-white transition-colors group-hover:text-gold-200">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">
                    {s.desc}
                  </p>
                </div>
                <span className="mt-auto inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  Detaylı Bilgi →
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
