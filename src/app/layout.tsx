import Header from '@/components/Header';
import Providers from '@/providers/Providers';
import { Box } from '@chakra-ui/react';
import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'thyeone.blog',
  description: 'thyeone.blog',
  icons: {
    icon: '/favicon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <head>
        <meta name='google-site-verification' content='3dfDj7poerd4EJ_t-PVTuhledlwdWgfc-FpQ_AvMVJE' />
      </head>
      <body>
        <Providers>
          <Header />
          <Box as='main' className='w-full max-w-pc mx-auto min-h-[calc(100dvh-64px)] p-16'>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
