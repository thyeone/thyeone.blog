'use client';

import { cn } from '@/lib/cn';
import { List, ListItem, Tab, TabIndicator, TabList, Tabs } from '@chakra-ui/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
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
        <ListItem key={href} position='relative' className='px-16 py-8'>
          <Link
            href={href}
            className={cn('font-normal', {
              'font-bold': isActive(href),
            })}
          >
            {label}
          </Link>
          {isActive(href) && (
            <ChakraMotion
              layoutId='font-bold'
              bg='teal.600'
              className='w-full absolute bg-white bottom-0 h-2 left-0'
              style={{
                originY: 0,
              }}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
}
