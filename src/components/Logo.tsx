import { Link } from '@/i18n/routing';

/**
 * Typographic logo matching the uploaded Honey Beauty Salon brand.
 * If you'd rather use the image version, drop /public/logo.svg or
 * /public/logo.png and replace the inner span with a <Image /> tag.
 */
export function Logo({
  inverted = false,
  size = 'sm',
  align = 'start'
}: {
  inverted?: boolean;
  size?: 'sm' | 'lg';
  align?: 'start' | 'center';
}) {
  const titleSize =
    size === 'lg'
      ? 'text-4xl sm:text-5xl tracking-[0.32em]'
      : 'text-base tracking-[0.2em] sm:text-2xl sm:tracking-[0.28em]';
  const subSize =
    size === 'lg'
      ? 'text-[11px] tracking-[0.5em]'
      : 'text-[6px] tracking-[0.3em] sm:text-[8px] sm:tracking-[0.42em]';
  const alignClass = align === 'center' ? 'items-center' : 'items-start';

  return (
    <Link
      href="/"
      aria-label="Honey Beauty Salon"
      className={`group inline-flex flex-col leading-none ${alignClass}`}
    >
      <span
        className={`font-display font-light uppercase ${titleSize} transition-colors ${
          inverted ? 'text-cream-50' : 'text-ink'
        } group-hover:text-honey-700`}
      >
        Honey
      </span>
      <span
        className={`mt-1 font-sans font-light uppercase ${subSize} ${
          inverted ? 'text-cream-200/90' : 'text-ink-soft'
        }`}
      >
        Beauty Salon
      </span>
    </Link>
  );
}
