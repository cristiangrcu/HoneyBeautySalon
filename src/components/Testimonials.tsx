import { useTranslations } from 'next-intl';
import { Star, PencilLine } from 'lucide-react';
import { googleReviews, siteConfig } from '@/config/site';
import { SmartImage } from './SmartImage';

const FLOATING_EMOJIS = [
  { emoji: '😍', position: 'left-[5%] top-[14%]', size: 'text-4xl sm:text-5xl', anim: 'animate-float-slow', delay: '0s' },
  { emoji: '✨', position: 'right-[7%] top-[10%]', size: 'text-2xl sm:text-3xl', anim: 'animate-float-med', delay: '0.8s' },
  { emoji: '❤️', position: 'left-[10%] bottom-[12%]', size: 'text-2xl sm:text-3xl', anim: 'animate-float-med', delay: '1.4s' },
  { emoji: '👍', position: 'right-[8%] bottom-[16%]', size: 'text-3xl sm:text-4xl', anim: 'animate-float-slow', delay: '0.4s' },
  { emoji: '🌟', position: 'left-1/2 top-[6%]', size: 'text-xl sm:text-2xl', anim: 'animate-float-fast', delay: '1.2s' }
];

export function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section id="testimonials" className="relative overflow-hidden bg-white py-16 sm:py-28">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {FLOATING_EMOJIS.map((item, i) => (
          <span
            key={i}
            className={`absolute select-none leading-none opacity-80 ${item.position} ${item.size} ${item.anim}`}
            style={{ animationDelay: item.delay }}
          >
            {item.emoji}
          </span>
        ))}
      </div>

      <div className="container-honey relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{t('eyebrow')}</p>
          <h2 className="mt-6 display-title text-balance">{t('title')}</h2>
          <p className="mt-5 text-lg text-ink-soft">{t('subtitle')}</p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-5 sm:flex-row sm:justify-center">
          <RatingBadge
            rating={siteConfig.reviews.rating}
            count={siteConfig.reviews.count}
            ratingLabel={t('ratingLabel')}
            countLabel={t('reviewsCount', { count: siteConfig.reviews.count })}
          />
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={siteConfig.reviews.googleProfile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline !px-5 !py-2.5 text-[11px]"
            >
              <GoogleIcon className="h-4 w-4" />
              {t('viewAll')}
            </a>
            <a
              href={siteConfig.reviews.writeReview}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-gold !px-5 !py-2.5 text-[11px]"
            >
              <PencilLine size={13} strokeWidth={2} aria-hidden="true" />
              {t('writeReview')}
            </a>
          </div>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-14 sm:gap-6 md:grid-cols-3">
          {googleReviews.map((item) => (
            <figure
              key={item.key}
              className="group relative flex flex-col rounded-2xl border border-honey-100 bg-white p-5 shadow-soft transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl sm:p-7"
            >
              <div className="absolute right-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-soft ring-1 ring-honey-100 sm:right-6 sm:top-6 sm:h-9 sm:w-9">
                <GoogleIcon className="h-4 w-4 sm:h-5 sm:w-5" />
              </div>
              <div className="mb-3 flex gap-0.5 text-honey-500 sm:mb-4">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" strokeWidth={0} className="sm:h-4 sm:w-4" />
                ))}
              </div>
              <blockquote className="flex-1 font-display text-sm leading-relaxed text-ink sm:text-lg">
                “{t(`items.${item.key}.text`)}”
              </blockquote>
              <figcaption className="mt-4 flex items-center gap-3 border-t border-honey-100 pt-4 sm:mt-6 sm:pt-5">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring-2 ring-honey-200 sm:h-12 sm:w-12">
                  <SmartImage
                    src={item.image}
                    fallback={item.fallbackImage}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="text-sm font-medium text-ink sm:text-base">
                    {t(`items.${item.key}.name`)}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-honey-700 sm:text-xs">
                    {t(`items.${item.key}.service`)}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function RatingBadge({
  rating,
  ratingLabel,
  countLabel
}: {
  rating: number;
  count: number;
  ratingLabel: string;
  countLabel: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-full border border-honey-200 bg-cream-100/60 px-5 py-3 shadow-soft backdrop-blur">
      <GoogleIcon className="h-6 w-6 shrink-0" />
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold leading-none text-ink">
            {rating.toFixed(1)}
          </span>
          <span className="flex gap-0.5 text-honey-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" strokeWidth={0} />
            ))}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-ink-soft">
          <span>{ratingLabel}</span>
          <span aria-hidden="true">•</span>
          <span>{countLabel}</span>
        </div>
      </div>
    </div>
  );
}

function GoogleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3C33.7 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 13 4 4 13 4 24s9 20 20 20 20-9 20-20c0-1.3-.1-2.4-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.4 4 9.8 8.4 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.2 0 9.9-2 13.4-5.2l-6.2-5.2C29.3 35 26.8 36 24 36c-5.2 0-9.6-3.3-11.3-8l-6.5 5C9.7 39.6 16.3 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.2-4.1 5.6l6.2 5.2C41 35 44 30 44 24c0-1.3-.1-2.4-.4-3.5z"
      />
    </svg>
  );
}
