'use client';

import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { Button, useColorMode } from '@chakra-ui/react';

export default function DarkModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button variant='ghost' size='md' onClick={toggleColorMode} className='ml-auto'>
      {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
