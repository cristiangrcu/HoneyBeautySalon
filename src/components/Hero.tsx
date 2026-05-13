import { useTranslations } from 'next-intl';
import { siteConfig, photos } from '@/config/site';
import { SmartImage } from './SmartImage';

export function Hero() {
  const t = useTranslations('hero');

  const titleHtml = t.raw('title') as string;
  const [before, gold, after] = splitGold(titleHtml);

  return (
    <section className="relative overflow-hidden bg-cream-50 pt-32 sm:pt-40">
      <div className="absolute inset-0 bg-honey-radial" aria-hidden="true" />

      <div className="container-honey relative grid items-center gap-12 pb-20 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:pb-32">
        <div className="animate-fade-up">
          <p className="eyebrow">{t('eyebrow')}</p>
          <h1 className="mt-6 display-title text-balance">
            {before}
            <span className="text-gold">{gold}</span>
            {after}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
            {t('subtitle')}
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.altegio.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold"
            >
              {t('ctaPrimary')}
              <ArrowIcon />
            </a>
            <a href="#services" className="btn btn-outline">
              {t('ctaSecondary')}
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-1 gap-6 border-t border-honey-100 pt-8 sm:grid-cols-3">
            <Stat label={t('stats.clients')} icon={<HeartIcon />} />
            <Stat label={t('stats.rating')} icon={<StarIcon />} />
            <Stat label={t('stats.experience')} icon={<SparkleIcon />} />
          </dl>
        </div>

        <div className="relative animate-fade-in">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2.5rem] shadow-soft ring-1 ring-honey-200/50">
            <SmartImage
              src={photos.hero}
              fallback={photos.fallback.hero}
              alt="Honey Beauty Salon"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
          </div>

          <div className="absolute -left-6 top-10 hidden rounded-2xl bg-white/95 p-4 shadow-soft ring-1 ring-honey-100 backdrop-blur md:flex md:items-center md:gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-honey-50 text-honey-700">
              <StarIcon />
            </div>
            <div>
              <div className="font-display text-lg font-semibold leading-none text-ink">4.9 ★</div>
              <div className="text-[11px] uppercase tracking-[0.18em] text-ink-soft">Google</div>
            </div>
          </div>

          <div className="absolute -right-4 bottom-12 hidden rounded-2xl bg-honey-gradient p-4 text-white shadow-gold md:block">
            <div className="font-display text-2xl leading-none">24/7</div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.22em]">Online booking</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function splitGold(input: string): [string, string, string] {
  const match = input.match(/^(.*)<gold>(.*?)<\/gold>(.*)$/s);
  if (!match) return [input, '', ''];
  return [match[1], match[2], match[3]];
}

function Stat({ label, icon }: { label: string; icon: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-honey-50 text-honey-700">
        {icon}
      </div>
      <dt className="text-sm font-medium leading-snug text-ink">{label}</dt>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
      <path
        d="M1 7h12M9 3l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 1.5l2 4.2 4.5.6-3.3 3.2.8 4.5L8 11.9 3.9 14l.8-4.5L1.5 6.3l4.5-.6L8 1.5z"
        fill="currentColor"
      />
    </svg>
  );
}

function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 14s-5-3.3-5-7a3 3 0 0 1 5-2.2A3 3 0 0 1 13 7c0 3.7-5 7-5 7Z"
        fill="currentColor"
      />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 1.5l1.4 3.6L13 6.5l-3.6 1.4L8 11.5 6.6 7.9 3 6.5l3.6-1.4L8 1.5zM13 11l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7L13 11z"
        fill="currentColor"
      />
    </svg>
  );
}
