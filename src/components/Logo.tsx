import Image from 'next/image';
import { Link } from '@/i18n/routing';

export function Logo({
  inverted = false,
  size = 'sm',
  align = 'start'
}: {
  inverted?: boolean;
  size?: 'sm' | 'lg';
  align?: 'start' | 'center';
}) {
  const heightClass =
    size === 'lg' ? 'h-12 sm:h-16' : 'h-8 sm:h-10';
  const alignClass = align === 'center' ? 'items-center' : 'items-start';

  return (
    <Link
      href="/"
      aria-label="Honey Beauty Salon"
      className={`group inline-flex leading-none ${alignClass}`}
    >
      <Image
        src="/logo.png"
        alt="Honey Beauty Salon"
        width={1600}
        height={440}
        priority
        sizes="(max-width: 640px) 128px, 200px"
        className={`w-auto object-contain transition-opacity duration-200 group-hover:opacity-80 ${heightClass} ${
          inverted ? '[filter:brightness(0)_invert(1)]' : ''
        }`}
      />
    </Link>
  );
}
