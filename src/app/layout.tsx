import type { Metadata } from 'next';
import './globals.css';
import Providers from '@/providers/Providers';
import Header from '@/components/Header';
import { Box } from '@chakra-ui/react';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='ko' suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          <Box as='main' className='w-full transition duration-300 max-w-pc mx-auto min-h-[calc(100dvh-64px)] p-16'>
            {children}
          </Box>
        </Providers>
      </body>
    </html>
  );
}
