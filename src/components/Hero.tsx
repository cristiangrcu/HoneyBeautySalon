import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/routing';
import { siteConfig } from '@/config/site';
import { InstagramIcon, TikTokIcon } from './BrandIcons';

export function Hero() {
  const t = useTranslations('hero');

  const titleHtml = t.raw('title') as string;
  const [before, gold, after] = splitGold(titleHtml);

  return (
    <section className="relative overflow-hidden bg-white pt-28 sm:pt-32">
      <div className="absolute inset-0 bg-honey-radial" aria-hidden="true" />

      <div className="container-honey relative pb-12 sm:pb-20">
        <div className="flex items-start justify-between gap-4 animate-fade-up" style={{ animationDelay: '0.05s' }}>
          <p className="eyebrow max-w-[55%]">{t('eyebrow')}</p>
          <div className="hidden text-right text-[10px] uppercase tracking-[0.32em] text-ink-soft sm:block">
            <span className="block">Chișinău</span>
            <span className="mt-1 block text-honey-700">★ 5.0 Google</span>
          </div>
        </div>

        <div className="relative mx-auto mt-10 min-h-[460px] max-w-7xl sm:mt-14 sm:min-h-[600px] lg:min-h-[680px]">
          <div
            className="absolute left-0 top-[18%] z-10 w-[26vw] max-w-[240px] animate-float-gentle"
            style={{ animationDelay: '0s' }}
          >
            <div className="group aspect-[4/5] -rotate-[5deg] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-20px_rgba(43,29,14,0.32)] ring-1 ring-black/5 transition-transform duration-500 hover:-rotate-[2deg] hover:scale-[1.03] sm:rounded-[2rem]">
              <Image
                src="/photos/service-makeup.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 26vw, 240px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div
            className="absolute right-0 top-[6%] z-10 w-[28vw] max-w-[260px] animate-float-gentle"
            style={{ animationDelay: '2.5s' }}
          >
            <div className="group aspect-square rotate-[4deg] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-20px_rgba(43,29,14,0.32)] ring-1 ring-black/5 transition-transform duration-500 hover:rotate-[1deg] hover:scale-[1.03] sm:rounded-[2rem]">
              <Image
                src="/photos/service-hair-balayage.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 28vw, 260px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <div
            className="absolute bottom-[2%] right-[5%] z-10 w-[23vw] max-w-[210px] animate-float-gentle"
            style={{ animationDelay: '5s' }}
          >
            <div className="group aspect-[3/4] rotate-[2deg] overflow-hidden rounded-[1.5rem] shadow-[0_28px_64px_-20px_rgba(43,29,14,0.38)] ring-1 ring-black/5 transition-transform duration-500 hover:rotate-0 hover:scale-[1.03] sm:rounded-[2rem]">
              <Image
                src="/photos/salon-hero.jpg"
                alt=""
                fill
                priority
                sizes="(max-width: 1024px) 23vw, 210px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          </div>

          <h1
            className="pointer-events-none relative z-30 mx-auto max-w-2xl text-balance pt-12 text-center font-display font-light leading-[0.95] tracking-[-0.02em] text-ink animate-fade-up sm:pt-16"
            style={{
              fontSize: 'clamp(2.25rem, 8.5vw, 6.5rem)',
              fontVariationSettings: '"opsz" 144, "SOFT" 50',
              animationDelay: '0.15s'
            }}
          >
            <span className="block">{before}</span>
            <span className="text-gold italic">{gold}</span>
            {after && <span className="block">{after}</span>}
          </h1>
        </div>

        <p
          className="mx-auto mt-2 max-w-xl text-center text-base leading-relaxed text-ink-soft animate-fade-up sm:mt-6 sm:text-lg"
          style={{ animationDelay: '0.35s' }}
        >
          {t('subtitle')}
        </p>

        <div
          className="relative z-30 mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up sm:gap-4"
          style={{ animationDelay: '0.5s' }}
        >
          <a
            href={siteConfig.altegio.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            {t('ctaPrimary')}
            <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
          </a>
          <Link href="/services" className="btn btn-outline">
            {t('ctaSecondary')}
          </Link>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-honey-100 pt-8 sm:flex-row">
          <dl className="grid w-full grid-cols-3 gap-4 text-center sm:max-w-xl sm:gap-8 sm:text-left">
            <Stat label={t('stats.clients')} />
            <Stat label={t('stats.rating')} />
            <Stat label={t('stats.experience')} />
          </dl>

          <div className="flex items-center gap-3 rounded-full border border-honey-200/70 bg-cream-100/60 p-1.5 pl-4 backdrop-blur">
            <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-ink-soft">
              {t('socialLabel')}
            </span>
            <a
              href={siteConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-honey-100"
            >
              <InstagramIcon size={15} />
            </a>
            <a
              href={siteConfig.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-ink transition-colors hover:bg-honey-100"
            >
              <TikTokIcon size={15} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function splitGold(input: string): [string, string, string] {
  const match = input.match(/^(.*)<gold>(.*?)<\/gold>(.*)$/s);
  if (!match) return [input, '', ''];
  return [match[1].trim(), match[2].trim(), match[3].trim()];
}

function Stat({ label }: { label: string }) {
  const parts = label.split(/\s+/);
  const lead = parts[0];
  const rest = parts.slice(1).join(' ');
  return (
    <div>
      <dt className="font-display text-2xl font-medium text-ink sm:text-3xl">{lead}</dt>
      <dd className="mt-1 text-[10px] uppercase tracking-[0.22em] text-ink-soft sm:text-[11px]">
        {rest}
      </dd>
    </div>
  );
}
