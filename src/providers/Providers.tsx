'use client';

import Toaster from '@/components/Toaster';
import { theme } from '@/styles';
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import type { PropsWithChildren } from 'react';
import { MantineProvider } from '@mantine/core';

export default function Providers({ children }: PropsWithChildren) {
  return (
    <MantineProvider>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        {children}
        <Toaster />
      </ChakraProvider>
    </MantineProvider>
  );
}
