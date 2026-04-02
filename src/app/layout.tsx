import type { Metadata } from 'next';
import { Inspector } from 'react-dev-inspector';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Discover China - Your Ultimate China Travel Guide',
    template: '%s | Discover China',
  },
  description:
    'Explore the wonders of China with comprehensive travel guides, city recommendations, and personalized AI-powered itinerary planning. From the Great Wall to the Li River, discover China\'s most breathtaking destinations.',
  keywords: [
    'China travel',
    'China tourism',
    'China guide',
    'Beijing travel',
    'Shanghai travel',
    'Great Wall',
    'Terracotta Warriors',
    'China itinerary',
    'China destinations',
    'Asia travel',
    'China visa',
    'China attractions',
  ],
  authors: [{ name: 'Discover China Team' }],
  generator: 'Next.js',
  openGraph: {
    title: 'Discover China - Your Ultimate China Travel Guide',
    description:
      'Explore the wonders of China with comprehensive travel guides and personalized AI-powered itinerary planning.',
    siteName: 'Discover China',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Discover China - Your Ultimate China Travel Guide',
    description:
      'Explore the wonders of China with comprehensive travel guides and personalized AI-powered itinerary planning.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isDev = process.env.COZE_PROJECT_ENV === 'DEV';

  return (
    <html lang="en">
      <body className={`antialiased`}>
        {isDev && <Inspector />}
        {children}
      </body>
    </html>
  );
}
