import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { services, siteConfig } from '@/config/site';

export function Services() {
  const t = useTranslations('services');
  const common = useTranslations('common');

  return (
    <section id="services" className="section bg-white">
      <div className="container-honey">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{t('eyebrow')}</p>
          <h2 className="mt-6 display-title text-balance">{t('title')}</h2>
          <p className="mt-5 text-lg text-ink-soft">{t('subtitle')}</p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.key} className="card-honey group flex flex-col overflow-hidden p-0">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.18em] text-honey-700 backdrop-blur">
                  {service.duration}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl font-semibold text-ink">
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                  {t(`items.${service.key}.description`)}
                </p>
                <div className="mt-6 flex items-end justify-between border-t border-honey-100 pt-5">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.22em] text-ink-soft">
                      {t('from')}
                    </div>
                    <div className="font-display text-2xl font-semibold text-honey-700">
                      {service.priceFrom} {common('currency')}
                    </div>
                  </div>
                  <a
                    href={siteConfig.altegio.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline !px-5 !py-2.5 text-[11px]"
                  >
                    {t('book')}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={siteConfig.altegio.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-gold"
          >
            {t('viewAll')}
          </a>
        </div>
      </div>
    </section>
  );
}
