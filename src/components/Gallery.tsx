import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { galleryImages } from '@/config/site';

export function Gallery() {
  const t = useTranslations('gallery');

  return (
    <section id="gallery" className="bg-cream-50 py-16 sm:py-28">
      <div className="container-honey">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow justify-center">{t('eyebrow')}</p>
          <h2 className="mt-6 display-title text-balance">{t('title')}</h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:mt-5 sm:text-lg">{t('subtitle')}</p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-14 sm:gap-4 md:grid-cols-4">
          {galleryImages.map((src, i) => (
            <div
              key={src}
              className={`relative aspect-square overflow-hidden rounded-2xl shadow-soft ring-1 ring-honey-100 transition-transform duration-500 hover:-translate-y-1 ${
                i % 5 === 0 ? 'md:row-span-2 md:aspect-[3/4]' : ''
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
