import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Honey Beauty Salon',
  description: 'Premium beauty salon'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return children;
}
