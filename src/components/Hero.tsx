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

      <div className="container-honey relative pb-16 sm:pb-24">
        <div className="grid items-start gap-2 lg:grid-cols-[auto_1fr_auto] lg:gap-12">
          <p className="eyebrow mt-2 lg:mt-6">{t('eyebrow')}</p>
          <div aria-hidden="true" />
          <div className="hidden text-right text-[11px] uppercase tracking-[0.32em] text-ink-soft lg:block">
            <span className="block">Chișinău</span>
            <span className="mt-1 block text-honey-700">★ 5.0 Google</span>
          </div>
        </div>

        <div className="relative mx-auto mt-10 max-w-5xl sm:mt-14">
          <h1 className="text-balance text-center font-display font-light leading-[0.95] tracking-[-0.02em] text-ink"
              style={{
                fontSize: 'clamp(2.75rem, 11vw, 8.5rem)',
                fontVariationSettings: '"opsz" 144, "SOFT" 50'
              }}>
            <span className="block">{before}</span>
            <span className="text-gold italic">{gold}</span>
            {after && <span className="block">{after}</span>}
          </h1>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="relative h-[60%] w-full max-w-[640px]">
              <div className="pointer-events-auto absolute left-[8%] top-[-8%] aspect-square w-[36%] -rotate-[4deg] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-20px_rgba(43,29,14,0.35)] ring-1 ring-black/5 sm:rounded-[2rem]">
                <Image
                  src="/photos/service-makeup.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 35vw, 220px"
                  className="object-cover"
                />
              </div>

              <div className="pointer-events-auto absolute right-[6%] top-[18%] aspect-square w-[40%] rotate-[3deg] overflow-hidden rounded-[1.5rem] shadow-[0_24px_60px_-20px_rgba(43,29,14,0.35)] ring-1 ring-black/5 sm:rounded-[2rem]">
                <Image
                  src="/photos/service-hair-balayage.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 40vw, 240px"
                  className="object-cover"
                />
              </div>

              <div className="pointer-events-auto absolute left-1/2 top-[55%] aspect-[3/4] w-[32%] -translate-x-1/2 rotate-[1.5deg] overflow-hidden rounded-[1.5rem] shadow-[0_30px_70px_-20px_rgba(43,29,14,0.4)] ring-1 ring-black/5 sm:rounded-[2rem]">
                <Image
                  src="/photos/salon-hero.jpg"
                  alt=""
                  fill
                  priority
                  sizes="(max-width: 768px) 32vw, 200px"
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-[28vw] max-w-xl text-center text-base leading-relaxed text-ink-soft sm:mt-44 sm:text-lg">
          {t('subtitle')}
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
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
