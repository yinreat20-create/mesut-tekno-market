export const CONTACT = {
  phoneDisplay: '0544 518 73 99',
  phoneHref: 'tel:+905445187399',
  whatsappNumber: '905445187399',
  email: 'info@viptransfer.com',
  defaultWaMessage: 'Merhaba VIP Transfer, Rezervasyon yaptırmak istiyorum.',
} as const;

export function waLink(message: string = CONTACT.defaultWaMessage): string {
  const text = encodeURIComponent(message);
  return `https://wa.me/${CONTACT.whatsappNumber}?text=${text}`;
}

export const NAV_LINKS = [
  { label: 'Ana Sayfa', href: '#home' },
  { label: 'Hakkımızda', href: '#about' },
  { label: 'Hizmetlerimiz', href: '#services' },
  { label: 'Araçlarımız', href: '#vehicles' },
  { label: 'Fiyatlar', href: '#pricing' },
  { label: 'İletişim', href: '#contact' },
] as const;
