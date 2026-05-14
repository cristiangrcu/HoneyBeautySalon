import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { Logo } from './Logo';
import { InstagramIcon, TikTokIcon, FacebookIcon, WhatsAppIcon } from './BrandIcons';
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
              <InstagramIcon size={15} />
            </Social>
            <Social href={siteConfig.tiktok} label="TikTok">
              <TikTokIcon size={15} />
            </Social>
            <Social href={siteConfig.facebook} label="Facebook">
              <FacebookIcon size={15} />
            </Social>
            <Social href={`https://wa.me/${siteConfig.whatsapp}`} label="WhatsApp">
              <WhatsAppIcon size={15} />
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
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-cream-200/80 transition-colors hover:border-honey-300 hover:bg-honey-300 hover:text-ink"
    >
      {children}
    </a>
  );
}
