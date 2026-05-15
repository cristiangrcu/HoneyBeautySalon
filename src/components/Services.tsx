import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import { services, siteConfig } from '@/config/site';

export function Services() {
  const t = useTranslations('services');
  const common = useTranslations('common');

  return (
    <section id="services" className="bg-white py-16 sm:py-28">
      <div className="container-honey">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{t('eyebrow')}</p>
          <h2 className="mt-6 display-title text-balance">{t('title')}</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:mt-5 sm:text-lg">{t('subtitle')}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
          {services.map((service) => (
            <article key={service.key} className="card-honey group flex flex-col overflow-hidden !p-0">
              <div className="relative aspect-square overflow-hidden sm:aspect-[4/3]">
                <Image
                  src={service.image}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute left-2.5 top-2.5 rounded-full bg-white/90 px-2 py-0.5 text-[9px] font-medium uppercase tracking-[0.14em] text-honey-700 backdrop-blur sm:left-4 sm:top-4 sm:px-3 sm:py-1 sm:text-[11px] sm:tracking-[0.18em]">
                  {service.duration}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-4 sm:p-6">
                <h3 className="font-display text-base font-semibold leading-tight text-ink sm:text-2xl">
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="mt-2 hidden flex-1 text-sm leading-relaxed text-ink-soft sm:mt-3 sm:block">
                  {t(`items.${service.key}.description`)}
                </p>
                <div className="mt-3 flex items-end justify-between gap-2 border-t border-honey-100 pt-3 sm:mt-6 sm:pt-5">
                  <div>
                    <div className="text-[9px] uppercase tracking-[0.18em] text-ink-soft sm:text-[11px] sm:tracking-[0.22em]">
                      {t('from')}
                    </div>
                    <div className="font-display text-base font-semibold text-honey-700 sm:text-2xl">
                      {service.priceFrom} {common('currency')}
                    </div>
                  </div>
                  <a
                    href={siteConfig.altegio.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-outline shrink-0 !px-3 !py-2 text-[9px] sm:!px-5 sm:!py-2.5 sm:text-[11px]"
                  >
                    {t('book')}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <Link href="/services" className="btn btn-gold">
            {t('viewAll')}
          </Link>
        </div>
      </div>
    </section>
  );
}
