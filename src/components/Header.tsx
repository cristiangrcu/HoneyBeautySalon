'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
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
          ? 'bg-cream-50/90 backdrop-blur-md shadow-[0_1px_0_rgba(165,115,36,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-honey flex items-center justify-between py-4">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV.map((item) => (
            <Link
              key={item.id}
              href={`/#${item.id}`}
              className="link-underline text-sm font-medium text-ink-soft transition-colors hover:text-honey-700"
            >
              {t(item.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href={siteConfig.altegio.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold hidden text-xs md:inline-flex"
          >
            {t('book')}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-honey-200/70 bg-white/70 text-ink-soft lg:hidden"
            onClick={() => setOpen(true)}
            aria-label={t('menu')}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
              <path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.6" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-cream-50 lg:hidden animate-fade-in">
          <div className="container-honey flex items-center justify-between py-4">
            <Logo />
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-honey-200/70 bg-white/70 text-ink-soft"
              onClick={() => setOpen(false)}
              aria-label={t('close')}
            >
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </button>
          </div>
          <nav className="container-honey flex flex-col gap-1 pt-8" aria-label="Mobile">
            {NAV.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={() => setOpen(false)}
                className="border-b border-honey-100/60 py-4 font-display text-3xl text-ink hover:text-honey-700"
              >
                {t(item.key)}
              </Link>
            ))}
            <a
              href={siteConfig.altegio.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold mt-8 w-full"
            >
              {t('book')}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
