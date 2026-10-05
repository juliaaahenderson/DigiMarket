import type { Metadata } from 'next';
import './globals.css';
import { ShopProvider } from '@/context/ShopContext';

export const metadata: Metadata = {
  title: 'DIGIMARKET | Premium Digital Products & Software Marketplace',
  description: 'Buy genuine software licenses, antivirus suites, developer tools, business software, and ebooks with instant digital delivery.',
  icons: {
    icon: '/DigiMarket favicon.png',
    shortcut: '/DigiMarket favicon.png',
    apple: '/DigiMarket favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased selection:bg-[#D97757] selection:text-white">
        <ShopProvider>
          {children}
        </ShopProvider>
      </body>
    </html>
  );
}
