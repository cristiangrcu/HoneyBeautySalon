import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';

export function Booking() {
  const t = useTranslations('booking');

  return (
    <section className="relative overflow-hidden bg-honey-gradient py-20 text-white sm:py-28">
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 30%, white 0%, transparent 40%), radial-gradient(circle at 80% 70%, white 0%, transparent 35%)'
        }}
        aria-hidden="true"
      />

      <div className="container-honey relative grid items-center gap-10 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow !text-cream-100 before:!bg-cream-100">Altegio</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.1] sm:text-5xl">
            {t('title')}
          </h2>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-cream-100">
            {t('subtitle')}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href={siteConfig.altegio.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-white text-honey-800 shadow-gold hover:-translate-y-0.5 hover:bg-cream-50"
            >
              {t('openWidget')}
              <ArrowIcon />
            </a>
            <p className="text-xs text-cream-100">{t('fallback')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <Pill icon={<ClockIcon />}>24/7</Pill>
          <Pill icon={<CheckIcon />}>Instant</Pill>
          <Pill icon={<CalendarIcon />}>Online</Pill>
          <Pill icon={<HeartIcon />}>Easy</Pill>
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-white/30 bg-white/10 p-4 backdrop-blur">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
        {icon}
      </span>
      <span className="font-display text-xl">{children}</span>
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
function ClockIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M8 4.5V8l2.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" fill="none" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M3 8.5l3 3 6.5-7"
        stroke="currentColor"
        strokeWidth="1.6"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <rect x="2" y="3.5" width="12" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" fill="none" />
      <path d="M2 6.5h12M5.5 2v3M10.5 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}
function HeartIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M8 14s-5-3.3-5-7a3 3 0 0 1 5-2.2A3 3 0 0 1 13 7c0 3.7-5 7-5 7Z" fill="currentColor" />
    </svg>
  );
}
