'use client';

import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { CircleCheckBigIcon, InfoIcon } from 'lucide-react';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';

type CalloutProps = {
  type: 'info' | 'warning' | 'success';
  title: string;
  children: React.ReactNode;
};

const ICON_MAP = {
  info: InfoIcon,
  warning: IoWarningOutline,
  success: CircleCheckBigIcon,
};

const COLOR_MAP = {
  info: {
    bg: {
      light: 'blue.100',
      dark: 'blue.900',
    },
    border: {
      light: 'blue.900',
      dark: 'blue.100',
    },
    icon: {
      light: 'blue.900',
      dark: 'blue.100',
    },
    title: {
      light: 'blue.900',
      dark: 'blue.100',
    },
    content: {
      light: 'blue.100',
      dark: 'blue.900',
    },
  },
  warning: {
    bg: {
      light: 'red.100',
      dark: 'red.100',
    },
    border: {
      light: 'red.500',
      dark: 'red.500',
    },
    icon: {
      light: 'red.500',
      dark: 'red.500',
    },
    title: {
      light: 'red.500',
      dark: 'red.500',
    },
    content: {
      light: 'gray.800',
      dark: 'gray.800',
    },
  },
  success: {
    bg: {
      light: 'green.50',
      dark: 'green.50',
    },
    border: {
      light: 'green.200',
      dark: 'green.200',
    },
    icon: {
      light: 'green.500',
      dark: 'green.500',
    },
    title: {
      light: 'green.500',
      dark: 'green.500',
    },
    content: {
      light: 'gray.800',
      dark: 'gray.800',
    },
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const IconComponent = ICON_MAP[type];
  const colors = COLOR_MAP[type];

  return (
    <Stack
      bg={colors.bg.light}
      _dark={{
        bg: colors.bg.dark,
        borderColor: colors.border.dark,
      }}
      border='0.5px solid'
      borderColor={colors.border.light}
      borderRadius='md'
      p='4'
      display='flex'
    >
      <Flex align='center' gap={1}>
        <Flex justify='center' align='center' bg={colors.bg}>
          <Icon
            as={IconComponent}
            color={colors.icon.light}
            _dark={{
              color: colors.icon.dark,
            }}
            width={18}
            height={18}
          />
        </Flex>
        <Text
          m='0px !important'
          color={colors.title.light}
          _dark={{
            color: colors.title.dark,
          }}
          fontSize='16px !important'
        >
          {title}
        </Text>
      </Flex>
      {children && (
        <Box
          color={colors.content.light}
          _dark={{
            color: colors.content.dark,
          }}
        >
          {children}
        </Box>
      )}
    </Stack>
  );
}
