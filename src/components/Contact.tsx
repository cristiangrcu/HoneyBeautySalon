import { useTranslations } from 'next-intl';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Contact() {
  const t = useTranslations('contact');

  return (
    <section id="contact" className="section bg-cream-50">
      <div className="container-honey">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{t('eyebrow')}</p>
          <h2 className="mt-6 display-title text-balance">{t('title')}</h2>
          <p className="mt-5 text-lg text-ink-soft">{t('subtitle')}</p>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-5">
            <InfoRow icon={<MapPin size={18} strokeWidth={1.5} />} label={t('addressLabel')}>
              <a
                href={siteConfig.address.googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="link-underline"
              >
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.country}
              </a>
            </InfoRow>

            <InfoRow icon={<Phone size={18} strokeWidth={1.5} />} label={t('phoneLabel')}>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="link-underline">
                {siteConfig.phoneDisplay}
              </a>
            </InfoRow>

            <InfoRow icon={<Mail size={18} strokeWidth={1.5} />} label={t('emailLabel')}>
              <a href={`mailto:${siteConfig.email}`} className="link-underline">
                {siteConfig.email}
              </a>
            </InfoRow>

            <InfoRow icon={<Clock size={18} strokeWidth={1.5} />} label={t('hoursLabel')}>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between gap-6">
                  <span>{t('hoursWeekdays')}</span>
                  <span className="font-medium text-ink">{siteConfig.hours.weekdays}</span>
                </li>
                <li className="flex justify-between gap-6">
                  <span>{t('hoursSunday')}</span>
                  <span className="font-medium text-ink">{siteConfig.hours.sunday}</span>
                </li>
              </ul>
            </InfoRow>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={siteConfig.altegio.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                {t('book')}
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                {t('writeWhatsapp')}
              </a>
            </div>
          </div>

          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-soft ring-1 ring-honey-100 lg:aspect-auto">
            <iframe
              src={siteConfig.address.googleMapsEmbed}
              title="Honey Beauty Salon location"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoRow({
  icon,
  label,
  children
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4 rounded-2xl border border-honey-100 bg-white p-5">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-honey-50 text-honey-700">
        {icon}
      </span>
      <div className="flex-1">
        <div className="text-[11px] uppercase tracking-[0.22em] text-honey-700">{label}</div>
        <div className="mt-1 text-ink">{children}</div>
      </div>
    </div>
  );
}
