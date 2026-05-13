import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { testimonials } from '@/config/site';

export function Testimonials() {
  const t = useTranslations('testimonials');

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-honey">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{t('eyebrow')}</p>
          <h2 className="mt-6 display-title text-balance">{t('title')}</h2>
          <p className="mt-5 text-lg text-ink-soft">{t('subtitle')}</p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure
              key={item.key}
              className="relative flex flex-col rounded-3xl border border-honey-100 bg-cream-50 p-7 shadow-soft transition-transform duration-300 hover:-translate-y-1"
            >
              <Quote />
              <div className="mb-4 flex gap-0.5 text-honey-500">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <StarFilled key={i} />
                ))}
              </div>
              <blockquote className="flex-1 font-display text-lg leading-relaxed text-ink">
                “{t(`items.${item.key}.text`)}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-honey-100 pt-5">
                <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-honey-200">
                  <Image
                    src={item.image}
                    alt=""
                    fill
                    sizes="48px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-medium text-ink">{t(`items.${item.key}.name`)}</div>
                  <div className="text-xs uppercase tracking-[0.18em] text-honey-700">
                    {t(`items.${item.key}.service`)}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      aria-hidden="true"
      className="absolute -top-4 right-6 text-honey-200"
    >
      <path
        d="M14 30c-3 0-6-2-6-6 0-7 5-12 11-14l1 3c-4 1-7 5-7 8 0 1 1 1 1 1 4 0 6 3 6 6s-3 6-6 6Zm18 0c-3 0-6-2-6-6 0-7 5-12 11-14l1 3c-4 1-7 5-7 8 0 1 1 1 1 1 4 0 6 3 6 6s-3 6-6 6Z"
        fill="currentColor"
      />
    </svg>
  );
}

function StarFilled() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
      <path
        d="M8 1.5l2 4.2 4.5.6-3.3 3.2.8 4.5L8 11.9 3.9 14l.8-4.5L1.5 6.3l4.5-.6L8 1.5z"
        fill="currentColor"
      />
    </svg>
  );
}
