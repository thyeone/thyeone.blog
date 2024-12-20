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
            color={isActive(href) ? 'white' : 'gray.600'}
            textDecoration='none'
            _dark={{
              color: isActive(href) ? 'white' : 'gray.600',
              _hover: {
                color: 'white',
              },
            }}
            _hover={{
              textUnderlineOffset: 0,
              color: !isActive(href) && 'teal.600',
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
                bg: 'teal.600',
              }}
              bg='teal.600'
              style={{
                originY: '0px',
              }}
              className='size-full absolute rounded-full'
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}
