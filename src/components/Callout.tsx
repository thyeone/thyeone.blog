'use client';

import { Box, Flex, Icon, Stack, Text } from '@chakra-ui/react';
import { CircleAlertIcon, CircleCheckBigIcon, InfoIcon } from 'lucide-react';
import { title } from 'process';
import React from 'react';
import { IoWarningOutline } from 'react-icons/io5';
import { MdCheckCircleOutline } from 'react-icons/md';

type CalloutProps = {
  type: 'info' | 'warning' | 'success';
  title: string;
  children: React.ReactNode;
};

const iconMap = {
  info: InfoIcon,
  warning: IoWarningOutline,
  success: CircleCheckBigIcon,
};

const colorMap = {
  info: {
    bg: 'blue.100',
    border: 'blue.400',
    icon: 'blue.400',
    title: 'blue.400',
    content: 'gray.800',
  },
  warning: {
    bg: 'red.100',
    border: 'red.500',
    icon: 'red.500',
    title: 'red.500',
    content: 'gray.800',
  },
  success: {
    bg: 'green.50',
    border: 'green.200',
    icon: 'green.500',
    title: 'green.500',
    content: 'gray.800',
  },
};

export default function Callout({ type, title, children }: CalloutProps) {
  const IconComponent = iconMap[type];
  const colors = colorMap[type];

  return (
    <Stack bg={colors.bg} borderLeft={`5px solid`} borderColor={colors.border} borderRadius='md' p='4' display='flex'>
      <Flex align='center' gap={1}>
        <Flex justify='center' align='center' bg={colors.bg}>
          <Icon as={IconComponent} color={colors.icon} width={18} height={18} />
        </Flex>
        <Text m='0px !important' color={colors.title} fontSize='16px !important' fontWeight='bold !important'>
          {title}
        </Text>
      </Flex>
      {children && <Box color={colors.content}>{children}</Box>}
    </Stack>
  );
}
