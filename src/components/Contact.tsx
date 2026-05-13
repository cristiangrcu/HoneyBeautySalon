import { useTranslations } from 'next-intl';
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
            <InfoRow icon={<PinIcon />} label={t('addressLabel')}>
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

            <InfoRow icon={<PhoneIcon />} label={t('phoneLabel')}>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="link-underline">
                {siteConfig.phoneDisplay}
              </a>
            </InfoRow>

            <InfoRow icon={<MailIcon />} label={t('emailLabel')}>
              <a href={`mailto:${siteConfig.email}`} className="link-underline">
                {siteConfig.email}
              </a>
            </InfoRow>

            <InfoRow icon={<ClockIcon />} label={t('hoursLabel')}>
              <ul className="space-y-1 text-sm">
                <li className="flex justify-between gap-6">
                  <span>{t('hoursWeekdays')}</span>
                  <span className="font-medium text-ink">{siteConfig.hours.weekdays}</span>
                </li>
                <li className="flex justify-between gap-6">
                  <span>{t('hoursSunday')}</span>
                  <span className="font-medium text-honey-700">{siteConfig.hours.sunday}</span>
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

function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M9 16s-6-5-6-9a6 6 0 0 1 12 0c0 4-6 9-6 9Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
      />
      <circle cx="9" cy="7" r="2" stroke="currentColor" strokeWidth="1.4" fill="none" />
    </svg>
  );
}
function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path
        d="M3 4a1 1 0 0 1 1-1h2l1.5 4-2 1a9 9 0 0 0 4.5 4.5l1-2 4 1.5v2a1 1 0 0 1-1 1A12 12 0 0 1 3 4Z"
        stroke="currentColor"
        strokeWidth="1.4"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <rect x="2.5" y="4" width="13" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M3 5l6 5 6-5" stroke="currentColor" strokeWidth="1.4" fill="none" strokeLinejoin="round" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M9 5v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
