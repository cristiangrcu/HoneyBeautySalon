'use client';

import { useState, useRef, useEffect } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { routing } from '@/i18n/routing';

const FLAGS: Record<string, string> = {
  ro: '🇷🇴',
  ru: '🇷🇺',
  en: '🇬🇧'
};

export function LanguageSwitcher({ compact = false }: { compact?: boolean }) {
  const locale = useLocale();
  const t = useTranslations('language');
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, []);

  const change = (next: string) => {
    setOpen(false);
    router.replace(pathname, { locale: next });
  };

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={t('label')}
        aria-expanded={open}
        className={`flex items-center gap-1.5 rounded-full border border-honey-200/70 bg-white/70 px-3 py-2 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft backdrop-blur transition-colors hover:border-honey-400 hover:text-honey-700 ${
          compact ? 'px-2.5' : ''
        }`}
      >
        <span aria-hidden="true" className="text-base leading-none">
          {FLAGS[locale]}
        </span>
        <span>{locale.toUpperCase()}</span>
        <svg
          aria-hidden="true"
          width="10"
          height="10"
          viewBox="0 0 10 10"
          className={`transition-transform ${open ? 'rotate-180' : ''}`}
        >
          <path d="M1 3l4 4 4-4" stroke="currentColor" strokeWidth="1.4" fill="none" />
        </svg>
      </button>

      {open && (
        <div className="absolute right-0 z-50 mt-2 min-w-[160px] rounded-2xl border border-honey-100 bg-white p-1.5 shadow-soft animate-fade-in">
          {routing.locales.map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => change(l)}
              className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                l === locale
                  ? 'bg-honey-50 text-honey-800'
                  : 'text-ink-soft hover:bg-cream-100 hover:text-ink'
              }`}
            >
              <span aria-hidden="true">{FLAGS[l]}</span>
              <span className="flex-1">{t(l)}</span>
              {l === locale && (
                <svg width="14" height="14" viewBox="0 0 14 14" className="text-honey-600">
                  <path
                    d="M2 7l3.5 3.5L12 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
