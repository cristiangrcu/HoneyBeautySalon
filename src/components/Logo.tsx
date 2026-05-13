import { Link } from '@/i18n/routing';

/**
 * Typographic logo matching the uploaded Honey Beauty Salon brand.
 * If you'd rather use the image version, drop /public/logo.svg or
 * /public/logo.png and replace the inner span with a <Image /> tag.
 */
export function Logo({
  inverted = false,
  size = 'sm'
}: {
  inverted?: boolean;
  size?: 'sm' | 'lg';
}) {
  const titleSize =
    size === 'lg'
      ? 'text-4xl sm:text-5xl tracking-[0.32em]'
      : 'text-2xl tracking-[0.28em]';
  const subSize =
    size === 'lg' ? 'text-[11px] tracking-[0.5em]' : 'text-[8px] tracking-[0.42em]';

  return (
    <Link
      href="/"
      aria-label="Honey Beauty Salon"
      className="group inline-flex flex-col items-start leading-none"
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
