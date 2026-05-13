'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/config/site';

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
          className="group flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-gold transition-transform hover:scale-105"
        >
          <WhatsAppIcon className="h-6 w-6" />
        </a>
        <a
          href={siteConfig.altegio.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold !rounded-full !px-5 !py-3.5 text-[11px] shadow-gold"
        >
          {t('book')}
        </a>
      </div>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15l-1.4 5 5.1-1.3A10 10 0 1 0 12 2Zm5.7 14c-.2.7-1.4 1.3-1.9 1.3-.5.1-1.1.1-3.6-.8-3-1.2-4.8-4.4-5-4.6-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.5l1 2.3c.1.2.1.4 0 .6l-.4.5c-.2.2-.3.4-.1.7l1 1.6c.7 1 1.4 1.4 1.9 1.6.2.1.4.1.5 0 .2-.2.7-.8 1-1.1.2-.3.5-.2.7-.1l2 .9c.2.1.4.2.5.3.1.2.1 1-.2 1.8Z" />
    </svg>
  );
}
