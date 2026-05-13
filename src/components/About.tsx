import Image from 'next/image';
import { useTranslations } from 'next-intl';

const HIGHLIGHTS = ['premium', 'hygiene', 'team', 'comfort'] as const;

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="section bg-cream-50">
      <div className="container-honey grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-honey-100">
            <Image
              src="https://images.unsplash.com/photo-1522335789203-aaa6dbf3805d?auto=format&fit=crop&w=1200&q=80"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden aspect-square w-48 overflow-hidden rounded-3xl shadow-soft ring-4 ring-cream-50 md:block">
            <Image
              src="https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=600&q=80"
              alt=""
              fill
              sizes="200px"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <p className="eyebrow">{t('eyebrow')}</p>
          <h2 className="mt-6 display-title text-balance">{t('title')}</h2>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">{t('p1')}</p>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">{t('p2')}</p>

          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {HIGHLIGHTS.map((key) => (
              <li
                key={key}
                className="rounded-2xl border border-honey-100 bg-white/70 p-5 transition-colors hover:border-honey-300"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-honey-50 text-honey-700">
                    <DotIcon />
                  </span>
                  <div>
                    <div className="font-display text-lg font-semibold text-ink">
                      {t(`highlights.${key}`)}
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {t(`highlights.${key}Desc`)}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function DotIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M3 7l3 3 5-6"
        stroke="currentColor"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
