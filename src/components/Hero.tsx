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

  const headline = (
    <>
      <span className="block">{before}</span>
      <span className="text-gold italic">{gold}</span>
      {after && <span className="block">{after}</span>}
    </>
  );

  return (
    <section className="relative overflow-hidden bg-white pt-24 sm:pt-32">
      <div className="absolute inset-0 bg-honey-radial" aria-hidden="true" />

      <div className="container-honey relative pb-10 sm:pb-20">
        <div
          className="flex items-start justify-between gap-4 animate-fade-up"
          style={{ animationDelay: '0.05s' }}
        >
          <p className="eyebrow max-w-[55%]">{t('eyebrow')}</p>
          <div className="hidden text-right text-[10px] uppercase tracking-[0.32em] text-ink-soft sm:block">
            <span className="block">Chișinău</span>
            <span className="mt-1 block text-honey-700">★ 5.0 Google</span>
          </div>
        </div>

        {/* MOBILE + TABLET PORTRAIT LAYOUT: headline first, images in compact row below */}
        <div className="block lg:hidden">
          <h1
            className="mt-6 text-balance text-center font-display font-light leading-[1] tracking-[-0.02em] text-ink animate-fade-up"
            style={{
              fontSize: 'clamp(2.1rem, 8vw, 4.5rem)',
              fontVariationSettings: '"opsz" 144, "SOFT" 50',
              animationDelay: '0.15s'
            }}
          >
            {headline}
          </h1>

          <div
            className="mt-8 flex items-start justify-center gap-3 px-2 animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            <div
              className="w-[28%] animate-float-gentle"
              style={{ animationDelay: '0s' }}
            >
              <div className="aspect-[4/5] -rotate-[6deg] overflow-hidden rounded-2xl shadow-[0_18px_44px_-18px_rgba(43,29,14,0.32)] ring-1 ring-black/5">
                <div className="relative h-full w-full">
                  <Image
                    src="/photos/service-makeup.jpg"
                    alt=""
                    fill
                    priority
                    sizes="35vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div
              className="-mt-3 w-[34%] animate-float-gentle"
              style={{ animationDelay: '2s' }}
            >
              <div className="aspect-square rotate-[3deg] overflow-hidden rounded-2xl shadow-[0_18px_44px_-18px_rgba(43,29,14,0.32)] ring-1 ring-black/5">
                <div className="relative h-full w-full">
                  <Image
                    src="/photos/service-hair-balayage.jpg"
                    alt=""
                    fill
                    priority
                    sizes="40vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            <div
              className="mt-4 w-[24%] animate-float-gentle"
              style={{ animationDelay: '4s' }}
            >
              <div className="aspect-[3/4] rotate-[4deg] overflow-hidden rounded-2xl shadow-[0_18px_44px_-18px_rgba(43,29,14,0.32)] ring-1 ring-black/5">
                <div className="relative h-full w-full">
                  <Image
                    src="/photos/salon-hero.jpg"
                    alt=""
                    fill
                    priority
                    sizes="30vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* DESKTOP LAYOUT: spread images with text in front */}
        <div className="relative mx-auto mt-14 hidden min-h-[600px] max-w-7xl lg:block lg:min-h-[680px]">
          <div
            className="absolute left-0 top-[18%] z-10 w-[26vw] max-w-[240px] animate-float-gentle"
            style={{ animationDelay: '0s' }}
          >
            <div className="group aspect-[4/5] -rotate-[5deg] overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-20px_rgba(43,29,14,0.32)] ring-1 ring-black/5 transition-transform duration-500 hover:-rotate-[2deg] hover:scale-[1.03]">
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
            <div className="group aspect-square rotate-[4deg] overflow-hidden rounded-[2rem] shadow-[0_24px_60px_-20px_rgba(43,29,14,0.32)] ring-1 ring-black/5 transition-transform duration-500 hover:rotate-[1deg] hover:scale-[1.03]">
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
            <div className="group aspect-[3/4] rotate-[2deg] overflow-hidden rounded-[2rem] shadow-[0_28px_64px_-20px_rgba(43,29,14,0.38)] ring-1 ring-black/5 transition-transform duration-500 hover:rotate-0 hover:scale-[1.03]">
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
            className="pointer-events-none relative z-30 mx-auto max-w-2xl text-balance pt-16 text-center font-display font-light leading-[0.95] tracking-[-0.02em] text-ink animate-fade-up"
            style={{
              fontSize: 'clamp(3rem, 8.5vw, 6.5rem)',
              fontVariationSettings: '"opsz" 144, "SOFT" 50',
              animationDelay: '0.15s'
            }}
          >
            {headline}
          </h1>
        </div>

        <p
          className="mx-auto mt-8 max-w-xl text-center text-sm leading-relaxed text-ink-soft animate-fade-up sm:mt-6 sm:text-lg"
          style={{ animationDelay: '0.35s' }}
        >
          {t('subtitle')}
        </p>

        <div
          className="relative z-30 mt-7 flex flex-wrap items-center justify-center gap-3 animate-fade-up sm:mt-8 sm:gap-4"
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

        <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-honey-100 pt-7 sm:mt-16 sm:flex-row sm:gap-6 sm:pt-8">
          <dl className="grid w-full grid-cols-3 gap-3 text-center sm:max-w-xl sm:gap-8 sm:text-left">
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
      <dt className="font-display text-xl font-medium text-ink sm:text-3xl">{lead}</dt>
      <dd className="mt-1 text-[9px] uppercase tracking-[0.18em] text-ink-soft sm:text-[11px] sm:tracking-[0.22em]">
        {rest}
      </dd>
    </div>
  );
}
