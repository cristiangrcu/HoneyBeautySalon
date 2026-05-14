'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';
import { WhatsAppIcon } from './BrandIcons';

export function FloatingActions() {
  const t = useTranslations('nav');
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 flex justify-end px-4 pb-4 sm:px-6 sm:pb-6">
      <div
        className={`pointer-events-auto flex flex-col items-end gap-3 transition-all duration-500 ${
          show ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
      >
        <a
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_32px_-12px_rgba(37,211,102,0.55)] transition-transform hover:scale-105"
        >
          <WhatsAppIcon size={24} strokeWidth={2} />
        </a>
        <a
          href={siteConfig.altegio.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold !rounded-full !px-5 !py-3.5 text-[11px]"
        >
          {t('book')}
        </a>
      </div>
    </div>
  );
}
