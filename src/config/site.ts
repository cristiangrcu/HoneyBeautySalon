/**
 * Central content config.
 * All photos live in /public/photos/ — see the photos object below.
 */

export const siteConfig = {
  name: 'Honey Beauty Salon',
  shortName: 'Honey',
  domain: 'honeys-beauty.shop',
  url: 'https://honeys-beauty.shop',
  email: 'salon@honeys-beauty.shop',
  phone: '+373 69 644 666',
  phoneDisplay: '+373 69 644 666',
  whatsapp: '37369644666',
  instagram: 'https://www.instagram.com/honeybeautysalon.md/',
  tiktok: 'https://www.tiktok.com/@honeybeautysalon.md',
  facebook:
    'https://www.facebook.com/people/HONEY-Beauty-Salon/61583374584181/',
  address: {
    street: 'Bd. Mircea cel Bătrân 41B',
    city: 'Chișinău',
    country: 'Moldova',
    googleMapsEmbed:
      'https://maps.google.com/maps?q=Bd.+Mircea+cel+B%C4%83tr%C3%A2n+41B%2C+Chi%C8%99in%C4%83u&t=&z=16&ie=UTF8&iwloc=&output=embed',
    googleMapsLink:
      'https://www.google.com/maps/search/?api=1&query=Bd.+Mircea+cel+B%C4%83tr%C3%A2n+41B%2C+Chi%C8%99in%C4%83u'
  },
  hours: {
    weekdays: '09:00 — 20:00',
    saturday: '09:00 — 20:00',
    sunday: '10:00 — 19:00'
  },
  reviews: {
    rating: 5.0,
    count: 120,
    googleProfile: 'https://share.google/5r03fTPac1BoaMMI4',
    writeReview: 'https://share.google/5r03fTPac1BoaMMI4'
  },
  // Altegio booking
  altegio: {
    bookingUrl: 'https://n1409537.alteg.io/',
    companyId: '1409537'
  }
};

export const photos = {
  hero: '/photos/salon-hero.jpg',
  about: '/photos/salon-interior-1.jpg',
  aboutSecondary: '/photos/salon-interior-2.jpg',
  // Kept for legacy SmartImage fallback compatibility — never used now.
  fallback: {
    hero: '/photos/salon-hero.jpg',
    about: '/photos/salon-interior-1.jpg',
    aboutSecondary: '/photos/salon-interior-2.jpg'
  }
};

export type ServiceKey =
  | 'makeup'
  | 'brows'
  | 'manicure'
  | 'pedicure'
  | 'podologie'
  | 'hair'
  | 'hairTreatments'
  | 'barber'
  | 'trihologie';

export interface SubService {
  key: string;
  priceFrom: number;
  priceTo?: number;
  duration?: string;
  /** If true, the UI looks up `subItems.<key>Desc` for an additional description line. */
  hasDescription?: boolean;
}

export interface ServiceItem {
  key: ServiceKey;
  priceFrom: number;
  currency: 'MDL';
  image: string;
  duration: string;
  subServices: SubService[];
}

/**
 * Service catalog with full sub-service price list.
 * Translations live in messages/<locale>.json under
 * services.items.<service>.subItems.<sub> (name) and .<sub>Desc (optional).
 */
export const services: ServiceItem[] = [
  {
    key: 'makeup',
    priceFrom: 800,
    currency: 'MDL',
    duration: '60–90 min',
    image: '/photos/service-makeup.jpg',
    subServices: [
      { key: 'day', priceFrom: 800 },
      { key: 'evening', priceFrom: 1200 },
      { key: 'smokey', priceFrom: 1200, priceTo: 1500 },
      { key: 'bridal', priceFrom: 1500, priceTo: 2600 }
    ]
  },
  {
    key: 'brows',
    priceFrom: 250,
    currency: 'MDL',
    duration: '30–60 min',
    image:
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80',
    subServices: [
      { key: 'styling', priceFrom: 250 },
      { key: 'tintStyle', priceFrom: 400 },
      { key: 'lamination', priceFrom: 550 },
      { key: 'laminationTint', priceFrom: 600 }
    ]
  },
  {
    key: 'manicure',
    priceFrom: 350,
    currency: 'MDL',
    duration: '60–120 min',
    image: '/photos/service-manicure.jpg',
    subServices: [
      { key: 'classic', priceFrom: 400 },
      { key: 'gelPolish', priceFrom: 550 },
      { key: 'removeGel', priceFrom: 150 },
      { key: 'gelCoverage', priceFrom: 600 },
      { key: 'extension12', priceFrom: 600 },
      { key: 'extension23', priceFrom: 650 },
      { key: 'extension45', priceFrom: 800 },
      { key: 'men', priceFrom: 400 },
      { key: 'kids', priceFrom: 350 },
      { key: 'frenchDesign', priceFrom: 100 }
    ]
  },
  {
    key: 'pedicure',
    priceFrom: 500,
    currency: 'MDL',
    duration: '60–90 min',
    image: '/photos/service-pedicure.jpg',
    subServices: [
      { key: 'hygienic', priceFrom: 500, duration: '60 min' },
      { key: 'spaRituals', priceFrom: 800 },
      { key: 'gelPolish', priceFrom: 750 },
      { key: 'spaGel', priceFrom: 1000 },
      { key: 'menHygienic', priceFrom: 500, duration: '60 min' },
      { key: 'menSpa', priceFrom: 800 }
    ]
  },
  {
    key: 'podologie',
    priceFrom: 200,
    currency: 'MDL',
    duration: 'varies',
    image:
      'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=80',
    subServices: [
      { key: 'consultation', priceFrom: 200 },
      { key: 'medicalPedicure', priceFrom: 700, priceTo: 1000 },
      { key: 'solesTreatment', priceFrom: 600 },
      { key: 'onicomicoza1', priceFrom: 350 },
      { key: 'onicomicoza2', priceFrom: 500 },
      { key: 'onicomicozaAll', priceFrom: 700 },
      { key: 'correctionSystem', priceFrom: 1000 },
      { key: 'repeatVisit', priceFrom: 800 },
      { key: 'onicogrifoza1', priceFrom: 200 },
      { key: 'onicogrifozaMulti', priceFrom: 400 },
      { key: 'callusRemoval12', priceFrom: 250, priceTo: 350 },
      { key: 'callusRemoval35', priceFrom: 350, priceTo: 500 },
      { key: 'subungualHematoma', priceFrom: 300 },
      { key: 'onicoliza1', priceFrom: 200 },
      { key: 'onicoliza2', priceFrom: 300 },
      { key: 'onicolizaAll', priceFrom: 500 },
      { key: 'ingrownStI', priceFrom: 400 },
      { key: 'ingrownStII', priceFrom: 500 },
      { key: 'ingrownStIII', priceFrom: 700 },
      { key: 'bandage', priceFrom: 200 }
    ]
  },
  {
    key: 'hair',
    priceFrom: 500,
    currency: 'MDL',
    duration: '60–180 min',
    image: '/photos/service-hair-balayage.jpg',
    subServices: [
      { key: 'cutShort', priceFrom: 500 },
      { key: 'cutMedium', priceFrom: 600 },
      { key: 'cutLong', priceFrom: 700, priceTo: 1000 },
      { key: 'styling', priceFrom: 600, priceTo: 1500 },
      { key: 'bridalStyling', priceFrom: 1500, priceTo: 2800 },
      { key: 'simpleStyle', priceFrom: 500, priceTo: 700 },
      { key: 'brushing', priceFrom: 600, priceTo: 750 },
      { key: 'coloring', priceFrom: 1250, priceTo: 2000 },
      { key: 'balayage', priceFrom: 2700, priceTo: 4500 },
      { key: 'airTouch', priceFrom: 3500, priceTo: 6000 },
      { key: 'toning', priceFrom: 1400, priceTo: 2000 },
      { key: 'roots', priceFrom: 900, priceTo: 1300 }
    ]
  },
  {
    key: 'hairTreatments',
    priceFrom: 450,
    currency: 'MDL',
    duration: '30–60 min',
    image: '/photos/service-hair-2.jpg',
    subServices: [
      { key: 'keunePower', priceFrom: 900, priceTo: 1200 },
      { key: 'keuneGlass', priceFrom: 900, priceTo: 1200 },
      { key: 'keuneColor', priceFrom: 900, priceTo: 1200 },
      { key: 'keuneNourish', priceFrom: 900, priceTo: 1200 },
      { key: 'keuneDetox', priceFrom: 900, priceTo: 1200 },
      { key: 'keuneCurl', priceFrom: 900, priceTo: 1200 },
      { key: 'nashiArgan', priceFrom: 700, priceTo: 1300 },
      { key: 'davinesGloss', priceFrom: 700, priceTo: 1500 },
      { key: 'naturalTech', priceFrom: 700, priceTo: 1300 },
      { key: 'davinesOnProtection', priceFrom: 700, priceTo: 1300 },
      { key: 'davines5min', priceFrom: 450, priceTo: 900 },
      { key: 'kurlIdentity', priceFrom: 700, priceTo: 1300 },
      { key: 'armoniaScalp', priceFrom: 700, priceTo: 1300 }
    ]
  },
  {
    key: 'barber',
    priceFrom: 150,
    currency: 'MDL',
    duration: '30–60 min',
    image: '/photos/service-barber-honey.jpg',
    subServices: [
      { key: 'kidsCut', priceFrom: 400 },
      { key: 'menCut', priceFrom: 400, priceTo: 500 },
      { key: 'complexCutBeard', priceFrom: 600 },
      { key: 'beardShape', priceFrom: 250 },
      { key: 'beardTone', priceFrom: 350 },
      { key: 'hairTone', priceFrom: 400, priceTo: 700 },
      { key: 'waxNose', priceFrom: 150 },
      { key: 'waxEars', priceFrom: 150 }
    ]
  },
  {
    key: 'trihologie',
    priceFrom: 400,
    currency: 'MDL',
    duration: '20–60 min',
    image: '/photos/service-hair-3.jpg',
    subServices: [
      { key: 'consultDiagnosis', priceFrom: 700, duration: '30–40 min', hasDescription: true },
      { key: 'tricoscopy', priceFrom: 500, priceTo: 700, duration: '20–30 min', hasDescription: true },
      { key: 'maintenance', priceFrom: 800, priceTo: 1000, duration: '40–50 min', hasDescription: true },
      { key: 'hairLossProtocol', priceFrom: 1200, duration: '50–60 min', hasDescription: true },
      { key: 'mesotherapy', priceFrom: 1600, duration: '30 min', hasDescription: true },
      { key: 'ozone', priceFrom: 400, duration: '30 min', hasDescription: true },
      { key: 'onlineConsult', priceFrom: 600, duration: '20–30 min', hasDescription: true }
    ]
  }
];

export interface Course {
  key: string;
  price: number;
  currency: 'MDL';
  duration: string;
  image: string;
  learnPoints: number;
  whyPoints: number;
}

/** Education / courses. Different rendering than regular services. */
export const courses: Course[] = [
  {
    key: 'selfMakeup',
    price: 6000,
    currency: 'MDL',
    duration: '3 zile × 4h',
    image: '/photos/service-makeup-2.jpg',
    learnPoints: 5,
    whyPoints: 4
  }
];

/** Gallery — curated mix of real salon, services and renders. */
export const galleryImages = [
  '/photos/salon-interior-3.jpg',
  '/photos/service-hair.jpg',
  '/photos/service-makeup-2.jpg',
  '/photos/render-logo-lounge.jpg',
  '/photos/service-barber-beard.jpg',
  '/photos/service-makeup-3.jpg',
  '/photos/render-hair-stations.jpg',
  '/photos/salon-brochure.jpg'
];

export interface GoogleReview {
  key: string;
  rating: number;
  /** Local avatar path under /public/photos. */
  image: string;
  /** Unsplash fallback used until the local file is uploaded. */
  fallbackImage: string;
  date: string;
}

/**
 * Real Google reviews curated from the salon's profile.
 * Drop the reviewer avatars at /public/photos/review-<key>.jpg —
 * the SmartImage in Testimonials falls back to fallbackImage if missing.
 */
export const googleReviews: GoogleReview[] = [
  {
    key: 'elenaCornita',
    rating: 5,
    image: '/photos/review-elena.png',
    fallbackImage:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: '2025-04-18'
  },
  {
    key: 'rominaCojocari',
    rating: 5,
    image: '/photos/review-romina.png',
    fallbackImage:
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    date: '2025-03-22'
  },
  {
    key: 'igorRailean',
    rating: 5,
    image: '/photos/review-igor.png',
    fallbackImage:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
    date: '2025-02-09'
  }
];
