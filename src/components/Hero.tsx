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
        <div className="flex items-start justify-between gap-4">
          <p className="eyebrow max-w-[55%]">{t('eyebrow')}</p>
          <div className="hidden text-right text-[10px] uppercase tracking-[0.32em] text-ink-soft sm:block">
            <span className="block">Chișinău</span>
            <span className="mt-1 block text-honey-700">★ 5.0 Google</span>
          </div>
        </div>

        <div className="relative mx-auto mt-10 min-h-[440px] max-w-6xl sm:mt-14 sm:min-h-[560px] lg:min-h-[640px]">
          <div className="absolute -left-[2%] top-[18%] z-10 aspect-[4/5] w-[30vw] max-w-[260px] -rotate-[4deg] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-20px_rgba(43,29,14,0.32)] ring-1 ring-black/5 sm:rounded-[2rem] lg:left-[2%]">
            <Image
              src="/photos/service-makeup.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 30vw, 260px"
              className="object-cover"
            />
          </div>

          <div className="absolute -right-[2%] top-[6%] z-10 aspect-square w-[32vw] max-w-[280px] rotate-[3deg] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-20px_rgba(43,29,14,0.32)] ring-1 ring-black/5 sm:rounded-[2rem] lg:right-[2%]">
            <Image
              src="/photos/service-hair-balayage.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 32vw, 280px"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-0 right-[10%] z-10 aspect-[3/4] w-[26vw] max-w-[220px] rotate-[2deg] overflow-hidden rounded-[1.5rem] shadow-[0_28px_64px_-20px_rgba(43,29,14,0.38)] ring-1 ring-black/5 sm:rounded-[2rem] lg:right-[14%]">
            <Image
              src="/photos/salon-hero.jpg"
              alt=""
              fill
              priority
              sizes="(max-width: 1024px) 26vw, 220px"
              className="object-cover"
            />
          </div>

          <h1
            className="pointer-events-none relative z-30 text-balance pt-8 text-center font-display font-light leading-[0.92] tracking-[-0.02em] text-ink sm:pt-12"
            style={{
              fontSize: 'clamp(2.5rem, 12vw, 9rem)',
              fontVariationSettings: '"opsz" 144, "SOFT" 50'
            }}
          >
            <span className="block">{before}</span>
            <span className="text-gold italic">{gold}</span>
            {after && <span className="block">{after}</span>}
          </h1>
        </div>

        <p className="mx-auto mt-2 max-w-xl text-center text-base leading-relaxed text-ink-soft sm:mt-6 sm:text-lg">
          {t('subtitle')}
        </p>

        <div className="relative z-30 mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
