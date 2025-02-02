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
    styles: {
      global: (props: any) => ({
        body: {
          bg: props.colorMode === 'dark' ? '#0A0A0A' : '#FFFFFF', // 다크모드일 때의 배경색을 여기서 설정
        },
      }),
    },
  },
  withProse({
    baseStyle: (props: any) => ({
      a: {
        color: props.colorMode === 'dark' ? 'blue.400' : 'blue.500',
        textDecoration: 'underline',
        textUnderlineOffset: '3px',
        textDecorationThickness: '0.5px',
      },
    }),
  })
);
