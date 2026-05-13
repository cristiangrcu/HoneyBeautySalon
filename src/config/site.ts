/**
 * Central content config. Replace these values with real ones.
 * Anything textual that differs per language lives in `messages/*.json`.
 */

export const siteConfig = {
  name: 'Honey Beauty Salon',
  shortName: 'Honey',
  domain: 'honeys-beauty.shop',
  url: 'https://honeys-beauty.shop',
  email: 'contact@honeys-beauty.shop',
  phone: '+373 60 000 000',
  phoneDisplay: '+373 60 000 000',
  whatsapp: '37360000000',
  instagram: 'https://www.instagram.com/honeys.beauty/',
  tiktok: 'https://www.tiktok.com/@honeys.beauty',
  facebook: 'https://www.facebook.com/honeys.beauty',
  address: {
    street: 'Str. Ștefan cel Mare 100',
    city: 'Chișinău',
    country: 'Moldova',
    googleMapsEmbed:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2719.0866!2d28.8333!3d47.0246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDfCsDAxJzI4LjYiTiAyOMKwNTAnMDAuMCJF!5e0!3m2!1sen!2s!4v1700000000000',
    googleMapsLink: 'https://maps.google.com/?q=Honey+Beauty+Salon+Chisinau'
  },
  hours: {
    weekdays: '09:00 — 20:00',
    saturday: '10:00 — 18:00',
    sunday: 'Închis'
  },
  // Altegio booking. Replace with your real Altegio company URL.
  // Get yours from https://altegio.com or your dashboard.
  altegio: {
    bookingUrl: 'https://n123456.alteg.io/company/123456/personal/menu?o=',
    companyId: '123456'
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

/** Service catalog — text comes from translations, prices and images here. */
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

export const galleryImages = [
  'https://images.unsplash.com/photo-1522335789203-aaa6dbf3805d?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1632345031435-8727f6897d53?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1519415943484-9fa1873496d4?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=900&q=80'
];

export const testimonials = [
  {
    key: 'maria',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80'
  },
  {
    key: 'elena',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80'
  },
  {
    key: 'ana',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80'
  }
];
