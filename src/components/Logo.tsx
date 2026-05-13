import { Link } from '@/i18n/routing';

export function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link href="/" className="group flex items-center gap-2.5">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-honey-gradient text-white shadow-gold transition-transform duration-300 group-hover:scale-105">
        <HoneyDrop className="h-5 w-5" />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-semibold tracking-tight ${
            inverted ? 'text-cream-50' : 'text-ink'
          }`}
        >
          Honey
        </span>
        <span
          className={`text-[10px] uppercase tracking-[0.32em] ${
            inverted ? 'text-cream-200' : 'text-honey-700'
          }`}
        >
          Beauty Salon
        </span>
      </span>
    </Link>
  );
}

function HoneyDrop({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3c2.8 4.2 5.5 7.5 5.5 11a5.5 5.5 0 1 1-11 0c0-3.5 2.7-6.8 5.5-11Z"
        fill="currentColor"
        opacity=".95"
      />
      <path
        d="M10.5 10c-1 1.4-2 3-2 4.5"
        stroke="white"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity=".7"
      />
    </svg>
  );
}
