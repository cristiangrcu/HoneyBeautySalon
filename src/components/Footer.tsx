import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Logo } from './Logo';
import { siteConfig, services } from '@/config/site';

const NAV = [
  { id: 'about', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'gallery', key: 'gallery' },
  { id: 'testimonials', key: 'testimonials' },
  { id: 'contact', key: 'contact' }
] as const;

export function Footer() {
  const t = useTranslations('footer');
  const nav = useTranslations('nav');
  const tServices = useTranslations('services');
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-cream-100">
      <div className="container-honey grid gap-12 py-16 lg:grid-cols-4">
        <div>
          <Logo inverted />
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-cream-200/80">
            {t('tagline')}
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-honey-300">
            {t('explore')}
          </h3>
          <ul className="space-y-2 text-sm">
            {NAV.map((item) => (
              <li key={item.id}>
                <Link href={`/#${item.id}`} className="link-underline text-cream-200/80 hover:text-cream-50">
                  {nav(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-honey-300">
            {t('services')}
          </h3>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.key}>
                <a
                  href={siteConfig.altegio.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-cream-200/80 hover:text-cream-50"
                >
                  {tServices(`items.${s.key}.title`)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.28em] text-honey-300">
            {t('contact')}
          </h3>
          <ul className="space-y-2 text-sm text-cream-200/80">
            <li>{siteConfig.address.street}</li>
            <li>{siteConfig.address.city}, {siteConfig.address.country}</li>
            <li>
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="link-underline hover:text-cream-50">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="link-underline hover:text-cream-50">
                {siteConfig.email}
              </a>
            </li>
          </ul>

          <h3 className="mb-3 mt-8 text-[11px] font-semibold uppercase tracking-[0.28em] text-honey-300">
            {t('follow')}
          </h3>
          <div className="flex gap-3">
            <Social href={siteConfig.instagram} label="Instagram">
              <InstagramIcon />
            </Social>
            <Social href={siteConfig.tiktok} label="TikTok">
              <TikTokIcon />
            </Social>
            <Social href={siteConfig.facebook} label="Facebook">
              <FacebookIcon />
            </Social>
            <Social href={`https://wa.me/${siteConfig.whatsapp}`} label="WhatsApp">
              <WhatsAppIcon />
            </Social>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-honey flex flex-col items-center justify-between gap-2 py-6 text-xs text-cream-200/60 sm:flex-row">
          <p>© {year} {siteConfig.name}. {t('rights')}</p>
          <p>{t('madeWith')}</p>
        </div>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  children
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-200/80 transition-colors hover:border-honey-300 hover:bg-honey-gradient hover:text-white"
    >
      {children}
    </a>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M11.5 1.5h-7A3 3 0 0 0 1.5 4.5v7a3 3 0 0 0 3 3h7a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3Zm-3.5 9.7A3.2 3.2 0 1 1 8 4.8a3.2 3.2 0 0 1 0 6.4Zm3.5-5.9a.8.8 0 1 1 0-1.6.8.8 0 0 1 0 1.6ZM8 6.2a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6Z" />
    </svg>
  );
}
function TikTokIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M12 1.5v2.3a4.2 4.2 0 0 0 2.5.9V7a6.4 6.4 0 0 1-2.5-.6v3.8a4.4 4.4 0 1 1-4.4-4.4c.2 0 .3 0 .5.1v2.2a2.2 2.2 0 1 0 1.7 2.1V1.5H12Z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M9.5 14.5V8.6h2l.3-2.3H9.5V5c0-.7.2-1.2 1.1-1.2h1.2V1.7a16 16 0 0 0-1.7-.1c-1.7 0-2.9 1-2.9 3v1.7H5v2.3h2.2v5.9h2.3Z" />
    </svg>
  );
}
function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor">
      <path d="M8 1.5a6.5 6.5 0 0 0-5.6 9.7L1.5 14.5l3.4-.8A6.5 6.5 0 1 0 8 1.5Zm3.7 9.1c-.2.4-.9.8-1.2.9-.3 0-.7.1-2.3-.6-1.9-.8-3-2.8-3.1-2.9 0-.1-.7-.9-.7-1.7s.5-1.3.6-1.4c.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .5.4l.6 1.4c0 .1.1.2 0 .4l-.3.3c-.1.1-.2.2-.1.4l.7 1c.5.7 1 .9 1.2 1 .1 0 .2 0 .3-.1l.5-.6c.1-.2.3-.1.5-.1l1.3.6c.2.1.3.2.4.3 0 .1 0 .6-.2.9Z" />
    </svg>
  );
}
