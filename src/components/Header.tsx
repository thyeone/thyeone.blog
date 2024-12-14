import { Avatar, Flex } from '@chakra-ui/react';
import DarkModeSwitch from './DarkModeSwitch';
import NavTabs from './NavTabs';
import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='w-full fixed inset-x-0 top-0 bg-inherit z-50'>
        <Flex
          as='nav'
          align='center'
          justify='center'
          className='w-full relative h-64 inset-x-0 z-50 max-w-pc px-16 mx-auto'
        >
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
