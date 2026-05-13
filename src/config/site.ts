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
    googleProfile: 'https://share.google/zFuNb1CJMGZZGyGEy',
    writeReview: 'https://share.google/zFuNb1CJMGZZGyGEy'
  },
  // Altegio booking — replace with your real Altegio company URL.
  altegio: {
    bookingUrl: 'https://n123456.alteg.io/company/123456/personal/menu?o=',
    companyId: '123456'
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
  | 'manicure'
  | 'pedicure'
  | 'lashes'
  | 'brows'
  | 'hair'
  | 'makeup'
  | 'barber';

export interface ServiceItem {
  key: ServiceKey;
  priceFrom: number;
  currency: 'MDL';
  image: string;
  duration: string;
}

export const services: ServiceItem[] = [
  {
    key: 'manicure',
    priceFrom: 350,
    currency: 'MDL',
    duration: '60–90 min',
    image: '/photos/service-manicure.jpg'
  },
  {
    key: 'pedicure',
    priceFrom: 450,
    currency: 'MDL',
    duration: '75–90 min',
    image: '/photos/service-pedicure.jpg'
  },
  {
    key: 'lashes',
    priceFrom: 500,
    currency: 'MDL',
    duration: '90–150 min',
    image:
      'https://images.unsplash.com/photo-1583241800698-9c2e30a4f3f8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    key: 'brows',
    priceFrom: 250,
    currency: 'MDL',
    duration: '45 min',
    image:
      'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    key: 'hair',
    priceFrom: 400,
    currency: 'MDL',
    duration: '60–120 min',
    image: '/photos/service-hair-balayage.jpg'
  },
  {
    key: 'makeup',
    priceFrom: 600,
    currency: 'MDL',
    duration: '60 min',
    image: '/photos/service-makeup.jpg'
  },
  {
    key: 'barber',
    priceFrom: 250,
    currency: 'MDL',
    duration: '45–60 min',
    image: '/photos/service-barber-honey.jpg'
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
  image: string;
  date: string;
}

export const googleReviews: GoogleReview[] = [
  {
    key: 'maria',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80',
    date: '2025-03-12'
  },
  {
    key: 'elena',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    date: '2025-02-04'
  },
  {
    key: 'ana',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    date: '2025-01-21'
  }
];
