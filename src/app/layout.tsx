import type { Metadata } from 'next';
import './globals.css';
import { ShopProvider } from '@/context/ShopContext';

export const metadata: Metadata = {
  title: 'DIGIMARKET | Premium Digital Products & Software Marketplace',
  description: 'Buy genuine software licenses, antivirus suites, developer tools, business software, and ebooks with instant digital delivery.',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/Glossy_Digital_D_Shopping_Logo.png', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: '/Glossy_Digital_D_Shopping_Logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/Glossy_Digital_D_Shopping_Logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/Glossy_Digital_D_Shopping_Logo.png" />
      </head>
      <body className="antialiased selection:bg-[#D97757] selection:text-white">
        <ShopProvider>
          {children}
        </ShopProvider>
      </body>
    </html>
  );
}
