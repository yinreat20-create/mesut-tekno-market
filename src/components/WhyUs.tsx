import { Clock3, ShieldCheck, UserSquare2, Sparkles, BadgePercent, Zap } from 'lucide-react';
import { SectionTitle } from './SectionTitle';
import { Reveal } from './Reveal';

const REASONS = [
  { icon: Clock3, title: '7/24 Hizmet', desc: 'Gecenin bir yarısında bile yanınızdayız.' },
  { icon: ShieldCheck, title: 'Güvenli Yolculuk', desc: 'Tam sigortalı, güvenli yolculuk garantisi.' },
  { icon: UserSquare2, title: 'Profesyonel Sürücüler', desc: 'Deneyimli, kibar ve lisanslı şoförler.' },
  { icon: Sparkles, title: 'Temiz ve Bakımlı Araçlar', desc: 'Her seferinde detaylı temizlenmiş VIP filo.' },
  { icon: BadgePercent, title: 'Uygun Fiyat Garantisi', desc: 'Premium hizmet, dürüst ve şeffaf fiyatlar.' },
  { icon: Zap, title: 'Hızlı Rezervasyon', desc: 'Saniyeler içinde WhatsApp üzerinden teklif.' },
];

export function WhyUs() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-noir-950 via-noir-900 to-noir-950" />
      <div className="lux-container relative">
        <SectionTitle eyebrow="Neden Biz" title="Neden Bizi Tercih Etmelisiniz?" />
        <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-relaxed text-gray-400">
          VIP transfer deneyimini güven, konfor ve profesyonellikle
          birleştiriyoruz.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {REASONS.map((r, i) => (
            <Reveal as="article" key={r.title} delay={i * 100} className="card-luxury group p-7">
              <div className="flex items-start gap-4">
                <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-gold-500/30 bg-gold-500/5 text-gold-400 transition-all duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:shadow-gold-soft">
                  <r.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-white">
                    {r.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-gray-400">
                    {r.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
