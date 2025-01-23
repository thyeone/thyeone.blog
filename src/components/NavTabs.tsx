'use client';

import { Link } from '@chakra-ui/next-js';
import { List, ListItem } from '@chakra-ui/react';
import { usePathname } from 'next/navigation';
import ChakraMotion from './ChakraMotion';

const nav_links = [
  {
    href: '/',
    label: 'Home',
  },
  {
    href: '/posts',
    label: 'Posts',
  },
];

export default function NavTabs() {
  const pathname = usePathname();

  const isActive = (path: string) => `/${pathname.split('/')[1]}` === path;

  return (
    <List display='flex' alignItems='center' gap='24px'>
      {nav_links.map(({ href, label }) => (
        <ListItem key={href} position='relative' className='px-16 flex items-center justify-center py-6 z-10'>
          <Link
            fontSize='sm'
            href={href}
            color='#0A0A0A'
            textDecoration='none'
            _dark={{
              color: isActive(href) ? '#0A0A0A' : '#FFFFFF',
              _hover: {
                color: !isActive(href) ? 'white' : '#0A0A0A',
              },
            }}
            _hover={{
              textUnderlineOffset: 0,
              opacity: !isActive(href) && 0.7,
            }}
            fontWeight={700}
            zIndex='10'
          >
            {label}
          </Link>
          {isActive(href) && (
            <ChakraMotion
              layout
              layoutId='line'
              _dark={{
                bg: 'white',
              }}
              bg='gray.100'
              style={{
                originY: '0px',
              }}
              rounded='md'
              className='size-full absolute'
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}
