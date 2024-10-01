import { Avatar, Flex } from '@chakra-ui/react';
import DarkModeSwitch from './DarkModeSwitch';
import NavTabs from './NavTabs';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='w-full fixed top-0'>
        <Flex as='nav' align='center' justify='space-between' className='w-full h-64 max-w-pc px-16 mx-auto'>
          <Link href='/'>
            <Avatar ignoreFallback src='https://avatars.githubusercontent.com/u/48711263?v=4' size='sm' />
          </Link>
          <NavTabs />
          <DarkModeSwitch />
        </Flex>
      </header>
      <Header.Margin />
    </>
  );
}

function Margin() {
  return <div className='h-64' />;
}

Header.Margin = Margin;
