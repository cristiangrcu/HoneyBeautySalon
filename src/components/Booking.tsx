import { useTranslations } from 'next-intl';
import { Calendar, CheckCircle2, Clock, Heart, ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/config/site';

export function Booking() {
  const t = useTranslations('booking');

  return (
    <section className="relative overflow-hidden bg-cream-100 py-20 sm:py-28">
      <div
        className="absolute inset-0 opacity-70"
        style={{
          backgroundImage:
            'radial-gradient(circle at 85% 15%, rgba(218,168,79,0.18), transparent 45%), radial-gradient(circle at 10% 85%, rgba(218,168,79,0.10), transparent 50%)'
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full border border-honey-200/60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-40 -left-24 h-[20rem] w-[20rem] rounded-full border border-honey-200/40"
        aria-hidden="true"
      />

      <div className="container-honey relative grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <p className="eyebrow">Altegio</p>
          <h2 className="mt-6 display-title text-balance">{t('title')}</h2>
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
              {t('openWidget')}
              <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
            </a>
            <p className="text-xs text-ink-soft">{t('fallback')}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 text-sm">
          <Pill icon={<Clock size={18} strokeWidth={1.5} />}>24/7</Pill>
          <Pill icon={<CheckCircle2 size={18} strokeWidth={1.5} />}>Instant</Pill>
          <Pill icon={<Calendar size={18} strokeWidth={1.5} />}>Online</Pill>
          <Pill icon={<Heart size={18} strokeWidth={1.5} />}>Easy</Pill>
        </div>
      </div>
    </section>
  );
}

function Pill({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-honey-100 bg-white p-4 shadow-soft">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-honey-50 text-honey-700">
        {icon}
      </span>
      <span className="font-display text-xl text-ink">{children}</span>
    </div>
  );
}
