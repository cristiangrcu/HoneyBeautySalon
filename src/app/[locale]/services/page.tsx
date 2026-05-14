import Image from 'next/image';
import { setRequestLocale, getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { services, siteConfig } from '@/config/site';

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'services' });
  return {
    title: `${t('pageTitle')} — ${siteConfig.name}`,
    description: t('pageSubtitle')
  };
}

export default async function ServicesPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations('services');
  const tCommon = await getTranslations('common');

  return (
    <>
      <section className="relative overflow-hidden bg-cream-50 pt-32 sm:pt-40">
        <div className="absolute inset-0 bg-honey-radial" aria-hidden="true" />
        <div className="container-honey relative pb-16 sm:pb-20">
          <Link
            href="/"
            className="eyebrow group !text-honey-700/80 hover:!text-honey-700"
          >
            <span aria-hidden="true" className="transition-transform group-hover:-translate-x-1">
              ←
            </span>
            {t('backHome')}
          </Link>
          <h1 className="mt-6 display-title text-balance">
            {t('pageTitle')}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {t('pageSubtitle')}
          </p>

          <nav
            aria-label="Service categories"
            className="mt-12 flex flex-wrap gap-2"
          >
            {services.map((service) => (
              <a
                key={service.key}
                href={`#${service.key}`}
                className="rounded-full border border-honey-200 bg-white/80 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-honey-700 backdrop-blur transition-colors hover:bg-honey-50 hover:border-honey-400"
              >
                {t(`items.${service.key}.title`)}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-white pb-20 sm:pb-28">
        <div className="container-honey space-y-24 sm:space-y-32">
          {services.map((service, index) => {
            const num = String(index + 1).padStart(2, '0');
            const flip = index % 2 === 1;
            return (
              <article
                key={service.key}
                id={service.key}
                className="scroll-mt-28"
              >
                <div className={`grid items-start gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16 ${flip ? 'lg:[&>:first-child]:order-2' : ''}`}>
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft ring-1 ring-honey-100">
                    <Image
                      src={service.image}
                      alt=""
                      fill
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="lg:pt-8">
                    <div className="flex items-center gap-4">
                      <span className="section-number">— {num}</span>
                      <span className="text-[10px] uppercase tracking-[0.42em] text-honey-700/80">
                        {t('categoryLabel')}
                      </span>
                    </div>
                    <h2 className="mt-4 font-display font-light text-4xl leading-[1.05] tracking-[-0.01em] text-ink sm:text-5xl"
                        style={{ fontVariationSettings: '"opsz" 144, "SOFT" 50' }}>
                      {t(`items.${service.key}.title`)}
                    </h2>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                      {t(`items.${service.key}.description`)}
                    </p>

                    <div className="mt-10 overflow-hidden rounded-2xl border border-honey-100 bg-cream-100/40">
                      <ul className="divide-y divide-honey-100">
                        {service.subServices.map((sub) => {
                          const priceLabel = sub.priceTo
                            ? `${sub.priceFrom}—${sub.priceTo}`
                            : String(sub.priceFrom);
                          return (
                            <li
                              key={sub.key}
                              className="flex flex-col gap-2 px-5 py-4 sm:flex-row sm:items-start sm:gap-6 sm:px-6"
                            >
                              <div className="flex-1">
                                <div className="font-display text-lg leading-snug text-ink">
                                  {t(`items.${service.key}.subItems.${sub.key}`)}
                                </div>
                                {sub.hasDescription && (
                                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                                    {t(`items.${service.key}.subItems.${sub.key}Desc`)}
                                  </p>
                                )}
                                {sub.duration && (
                                  <div className="mt-1.5 text-[10px] uppercase tracking-[0.22em] text-ink-soft/70">
                                    {sub.duration}
                                  </div>
                                )}
                              </div>
                              <div className="flex items-baseline gap-2 whitespace-nowrap font-display text-lg text-honey-700 sm:pt-0.5">
                                <span className="text-[10px] uppercase tracking-[0.22em] text-ink-soft/60">
                                  {sub.priceTo ? '' : t('from')}
                                </span>
                                <span className="font-medium">{priceLabel}</span>
                                <span className="text-sm">{tCommon('currency')}</span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center gap-3">
                      <a
                        href={siteConfig.altegio.bookingUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-gold"
                      >
                        {t('book')}
                      </a>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                      >
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}

          <aside className="rounded-3xl border border-honey-100 bg-cream-100/50 p-8 sm:p-10">
            <p className="eyebrow">{t('noteTitle')}</p>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-ink-soft">
              {t('noteText')}
            </p>
          </aside>
        </div>
      </section>
    </>
  );
}
