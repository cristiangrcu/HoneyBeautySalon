/**
 * Central content config.
 * Drop real assets in /public/photos and update the *_LOCAL paths below.
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

/**
 * Local salon photos. Drop your files into /public/photos/ with these names.
 * If a file is missing, the image will simply 404 — replace with Unsplash
 * fallbacks below or update the path.
 */
export const photos = {
  hero: '/photos/salon-1.jpg',
  about: '/photos/salon-2.jpg',
  aboutSecondary: '/photos/salon-3.jpg',
  // Unsplash fallbacks used until real photos are dropped in /public/photos
  fallback: {
    hero: 'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=1200&q=80',
    about:
      'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=1200&q=80',
    aboutSecondary:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=600&q=80'
  }
};

export type ServiceKey =
  | 'manicure'
  | 'pedicure'
  | 'lashes'
  | 'brows'
  | 'makeup'
  | 'hair';

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
    image:
      'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=1200&q=80'
  },
  {
    key: 'pedicure',
    priceFrom: 450,
    currency: 'MDL',
    duration: '75–90 min',
    image:
      'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=1200&q=80'
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
    key: 'makeup',
    priceFrom: 600,
    currency: 'MDL',
    duration: '60 min',
    image:
      'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=1200&q=80'
  },
  {
    key: 'hair',
    priceFrom: 400,
    currency: 'MDL',
    duration: '60–120 min',
    image:
      'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=1200&q=80'
  }
];

/** Gallery — warm beige/wood salon-style imagery to match the Honey aesthetic. */
export const galleryImages = [
  'https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1583241800698-9c2e30a4f3f8?auto=format&fit=crop&w=900&q=80'
];

/** Google reviews — curated highlights. Replace with real client reviews. */
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
