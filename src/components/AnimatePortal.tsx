import { AnimatePresence } from 'framer-motion';
import Portal from './Portal';
import { type PropsWithChildren } from 'react';

export default function AnimatePortal({ children, isOpen }: PropsWithChildren<{ isOpen: boolean }>) {
  return (
    <Portal>
      <AnimatePresence>{isOpen && children}</AnimatePresence>
    </Portal>
  );
}
