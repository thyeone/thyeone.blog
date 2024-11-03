import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

export const theme = extendTheme(
  {
    config,
  },
  withProse()
);
