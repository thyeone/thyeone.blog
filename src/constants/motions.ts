import type { AnimationProps, Variants } from 'framer-motion';

export const fadeIn: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

export const fadeInOut: AnimationProps = {
  initial: { opacity: 0, willChange: 'opacity' },
  animate: { opacity: 1, willChange: 'opacity' },
  exit: { opacity: 0, willChange: 'opacity' },
  transition: { ease: 'easeOut', duration: 0.25, willChange: 'opacity' },
};

export const staggerOne: Variants = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export const staggerTwo: Variants = {
  animate: {
    transition: { staggerChildren: 0.6 },
  },
};
