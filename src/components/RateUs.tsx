'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';

type Stage = 'rate' | 'public' | 'private' | 'thanks';

export function RateUs() {
  const t = useTranslations('rateUs');
  const [stage, setStage] = useState<Stage>('rate');
  const [rating, setRating] = useState(0);
  const [hovered, setHovered] = useState(0);
  const [message, setMessage] = useState('');

  const handleStar = (n: number) => {
    setRating(n);
    setStage(n >= 5 ? 'public' : 'private');
  };

  const reset = () => {
    setStage('rate');
    setRating(0);
    setHovered(0);
    setMessage('');
  };

  const sendPrivate = () => {
    const prefix = t('whatsappPrefix', { rating });
    const text = message ? `${prefix} ${message}` : prefix;
    const url = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setStage('thanks');
  };

  const goPublic = () => {
    window.open(siteConfig.reviews.writeReview, '_blank', 'noopener,noreferrer');
    setStage('thanks');
  };

  const displayRating = hovered || rating;

  return (
    <section
      id="rate-us"
      className="section bg-gradient-to-b from-white via-cream-100/40 to-white"
    >
      <div className="container-honey">
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow justify-center">{t('eyebrow')}</p>
          <h2 className="mt-6 display-title text-balance">{t('title')}</h2>
          <p className="mt-5 text-lg text-ink-soft">{t('subtitle')}</p>
        </div>

        <div className="relative mx-auto mt-12 max-w-xl">
          <div
            aria-live="polite"
            className="rounded-[2rem] border border-honey-100 bg-white/95 p-8 shadow-soft sm:p-10"
          >
            {stage === 'rate' && (
              <div className="text-center">
                <div className="text-[10px] font-semibold uppercase tracking-[0.42em] text-honey-700">
                  {t('starsLabel')}
                </div>
                <div
                  className="mt-6 flex items-center justify-center gap-2 sm:gap-3"
                  onMouseLeave={() => setHovered(0)}
                  role="radiogroup"
                  aria-label={t('starsLabel')}
                >
                  {[1, 2, 3, 4, 5].map((n) => (
                    <button
                      key={n}
                      type="button"
                      role="radio"
                      aria-checked={rating === n}
                      aria-label={`${n} — ${t(`stars.${n}`)}`}
                      onMouseEnter={() => setHovered(n)}
                      onFocus={() => setHovered(n)}
                      onClick={() => handleStar(n)}
                      className="group rounded-full p-2 transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-honey-400 focus-visible:ring-offset-2"
                    >
                      <Star
                        filled={n <= displayRating}
                        className="h-8 w-8 sm:h-10 sm:w-10"
                      />
                    </button>
                  ))}
                </div>
                <div className="mt-4 min-h-[1.5rem] font-display text-lg italic text-honey-700">
                  {displayRating > 0 ? t(`stars.${displayRating}`) : ' '}
                </div>
              </div>
            )}

            {stage === 'public' && (
              <div className="text-center animate-fade-up">
                <RatingHeader rating={rating} />
                <h3 className="mt-6 font-display text-2xl font-light tracking-tight text-ink sm:text-3xl">
                  {t('publicTitle')}
                </h3>
                <p className="mt-3 text-base text-ink-soft">{t('publicSubtitle')}</p>
                <div className="mt-8 flex flex-col items-center gap-3">
                  <button
                    type="button"
                    onClick={goPublic}
                    className="btn btn-gold w-full sm:w-auto"
                  >
                    <GoogleGlyph className="h-4 w-4" />
                    {t('publicCta')}
                  </button>
                  <button
                    type="button"
                    onClick={reset}
                    className="text-xs uppercase tracking-[0.22em] text-ink-soft transition-colors hover:text-honey-700"
                  >
                    {t('back')}
                  </button>
                </div>
              </div>
            )}

            {stage === 'private' && (
              <div className="animate-fade-up">
                <div className="text-center">
                  <RatingHeader rating={rating} />
                  <h3 className="mt-6 font-display text-2xl font-light tracking-tight text-ink sm:text-3xl">
                    {t('privateTitle')}
                  </h3>
                  <p className="mt-3 text-base text-ink-soft">{t('privateSubtitle')}</p>
                </div>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={t('privatePlaceholder')}
                  rows={4}
                  className="mt-6 w-full rounded-2xl border border-honey-200 bg-cream-100/40 p-4 text-sm leading-relaxed text-ink placeholder:text-ink-soft/60 focus:border-honey-400 focus:outline-none focus:ring-2 focus:ring-honey-200"
                />
                <div className="mt-6 flex flex-col items-center gap-3">
                  <button
                    type="button"
                    onClick={sendPrivate}
                    className="btn btn-gold w-full sm:w-auto"
                  >
                    {t('privateCta')}
                  </button>
                  <button
                    type="button"
                    onClick={reset}
                    className="text-xs uppercase tracking-[0.22em] text-ink-soft transition-colors hover:text-honey-700"
                  >
                    {t('back')}
                  </button>
                </div>
              </div>
            )}

            {stage === 'thanks' && (
              <div className="text-center animate-fade-up">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-honey-50 text-honey-700">
                  <CheckIcon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-2xl font-light tracking-tight text-ink sm:text-3xl">
                  {t('thankTitle')}
                </h3>
                <p className="mt-3 max-w-md mx-auto text-base text-ink-soft">
                  {t('thankSubtitle')}
                </p>
                <button
                  type="button"
                  onClick={reset}
                  className="btn btn-outline mt-8"
                >
                  {t('done')}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

function RatingHeader({ rating }: { rating: number }) {
  return (
    <div className="flex items-center justify-center gap-1.5 text-honey-500">
      {[1, 2, 3, 4, 5].map((n) => (
        <Star key={n} filled={n <= rating} className="h-5 w-5" />
      ))}
    </div>
  );
}

function Star({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      fill={filled ? 'url(#starGold)' : 'none'}
      stroke={filled ? 'transparent' : 'currentColor'}
      strokeWidth="1.5"
      style={{ color: filled ? undefined : 'rgba(126, 88, 32, 0.35)' }}
    >
      <defs>
        <linearGradient id="starGold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F3DEA8" />
          <stop offset="60%" stopColor="#D4A85E" />
          <stop offset="100%" stopColor="#A47324" />
        </linearGradient>
      </defs>
      <path
        d="M12 2.5l2.95 6.22 6.55.84-4.85 4.68 1.2 6.6L12 17.7l-5.85 3.14 1.2-6.6L2.5 9.56l6.55-.84L12 2.5Z"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function GoogleGlyph({ className }: { className?: string }) {
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

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="none">
      <path
        d="M5 12l4 4 10-10"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
