'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

export default function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant='ghost' size='md' onClick={toggleColorMode} position='absolute' right={4}>
      {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
