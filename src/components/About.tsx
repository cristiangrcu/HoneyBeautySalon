import { useTranslations } from 'next-intl';
import { photos } from '@/config/site';
import { SmartImage } from './SmartImage';

const HIGHLIGHTS = ['premium', 'hygiene', 'team', 'comfort'] as const;

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="bg-cream-50 py-16 sm:py-28">
      <div className="container-honey grid gap-10 sm:gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div className="relative mx-auto w-full max-w-[280px] sm:max-w-none">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] shadow-soft ring-1 ring-honey-100 sm:rounded-[2rem]">
            <SmartImage
              src={photos.about}
              fallback={photos.fallback.about}
              alt=""
              fill
              sizes="(max-width: 640px) 280px, (max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-8 -right-4 hidden aspect-square w-48 overflow-hidden rounded-3xl shadow-soft ring-4 ring-cream-50 md:block">
            <SmartImage
              src={photos.aboutSecondary}
              fallback={photos.fallback.aboutSecondary}
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
          <p className="mt-5 text-sm leading-relaxed text-ink-soft sm:mt-6 sm:text-lg">{t('p1')}</p>
          <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:mt-4 sm:text-lg">{t('p2')}</p>

          <ul className="mt-8 grid grid-cols-2 gap-2.5 sm:mt-10 sm:gap-4">
            {HIGHLIGHTS.map((key) => (
              <li
                key={key}
                className="rounded-2xl border border-honey-100 bg-white/70 p-3 transition-colors hover:border-honey-300 sm:p-5"
              >
                <div className="flex items-start gap-2 sm:gap-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-honey-50 text-honey-700 sm:h-9 sm:w-9">
                    <DotIcon />
                  </span>
                  <div>
                    <div className="font-display text-sm font-semibold leading-tight text-ink sm:text-lg">
                      {t(`highlights.${key}`)}
                    </div>
                    <p className="mt-1 hidden text-sm leading-relaxed text-ink-soft sm:block">
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
