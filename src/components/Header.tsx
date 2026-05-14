'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { Logo } from './Logo';
import { LanguageSwitcher } from './LanguageSwitcher';
import { siteConfig } from '@/config/site';

const NAV = [
  { id: 'about', key: 'about' },
  { id: 'services', key: 'services' },
  { id: 'gallery', key: 'gallery' },
  { id: 'testimonials', key: 'testimonials' },
  { id: 'contact', key: 'contact' }
] as const;

export function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-md shadow-[0_1px_0_rgba(107,78,50,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-honey grid grid-cols-[1fr_auto_1fr] items-center py-4 sm:py-5">
        <div className="flex justify-start">
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label={t('menu')}
            className="flex h-11 items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink backdrop-blur transition-colors hover:bg-cream-100"
          >
            <Menu size={16} strokeWidth={1.75} aria-hidden="true" />
            <span>{t('menu')}</span>
          </button>
        </div>

        <div className="flex justify-center">
          <Logo size="sm" />
        </div>

        <div className="flex items-center justify-end gap-2 sm:gap-3">
          <LanguageSwitcher />
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, '')}`}
            className="hidden h-11 items-center rounded-full border border-ink/10 bg-white/70 px-4 text-[11px] font-medium uppercase tracking-[0.22em] text-ink backdrop-blur transition-colors hover:bg-cream-100 sm:inline-flex"
          >
            {t('contact')}
          </a>
          <a
            href={siteConfig.altegio.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold h-11 !px-5 !py-0"
          >
            {t('book')}
          </a>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-white animate-fade-in">
          <div className="container-honey flex items-center justify-between py-5">
            <Logo size="sm" />
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ink/10 bg-white/70 text-ink"
              onClick={() => setOpen(false)}
              aria-label={t('close')}
            >
              <X size={18} strokeWidth={1.75} aria-hidden="true" />
            </button>
          </div>
          <nav className="container-honey flex flex-1 flex-col justify-center" aria-label="Primary">
            <ul className="space-y-1">
              {NAV.map((item) => (
                <li key={item.id}>
                  <Link
                    href={`/#${item.id}`}
                    onClick={() => setOpen(false)}
                    className="block border-b border-honey-100/60 py-5 font-display text-4xl font-light tracking-tight text-ink transition-colors hover:text-honey-700 sm:text-5xl"
                    style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
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
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
