import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { withProse } from '@nikolovlazar/chakra-ui-prose';

const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: true,
};

const components = {
  Link: {
    baseStyle: {
      color: 'blue.600',
      fontWeight: 'bold',
      textDecoration: 'underline',
      _hover: {
        color: 'blue.800',
      },
    },
  },
};

export const theme = extendTheme(
  {
    config,
    components,
  },
  withProse({
    baseStyle: (props: any) => ({
      a: {
        color: props.colorMode === 'dark' ? 'cyan.300' : 'blue.500',
      },
    }),
  })
);
