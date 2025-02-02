'use client';

import { cn } from '@/lib/cn';
import { Icon } from '@chakra-ui/react';
import { AnimatePresence, motion } from 'framer-motion';
import { CircleXIcon, ClipboardCheck } from 'lucide-react';
import { useEffect, useState } from 'react';
import AnimatePortal from './AnimatePortal';

type Toast = {
  id: number;
  text: string;
  type: 'success' | 'fail';
  duration?: number;
};

type Action =
  | {
      type: 'ADD';
      toast: Toast;
    }
  | {
      type: 'REMOVE';
      id: number;
    };

let toastMemory: Toast[] = [];
let listeners: Array<(toasts: Toast[]) => void> = [];

const reducer = (state: Toast[], action: Action): Toast[] => {
  switch (action.type) {
    case 'ADD':
      return [...state, action.toast];
    case 'REMOVE':
      return state.filter((toast) => toast.id !== action.id);
  }
};

const emitChange = () => {
  for (const listener of listeners) {
    listener(toastMemory);
  }
};

const dispatch = (action: Action) => {
  toastMemory = reducer(toastMemory, action);
  emitChange();
};

export const toast = {
  show: ({ type, text, duration }: Omit<Toast, 'id'>) => {
    const newToast = {
      id: Date.now(),
      type,
      text,
      duration: duration ?? 2500,
    };

    dispatch({ type: 'ADD', toast: newToast });

    setTimeout(() => {
      toast.remove(newToast.id);
    }, newToast.duration);
  },

  remove: (id: number) => {
    dispatch({ type: 'REMOVE', id });
  },

  subscribe: (listener: (toasts: Toast[]) => void) => {
    listeners = [...listeners, listener];
    return () => {
      listeners = listeners.filter((l) => l !== listener);
    };
  },
};

const TOAST_LIMIT_POLICY = 5;

const variants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
};

export default function Toaster() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  console.log(toasts);

  useEffect(() => {
    const unsubscribe = toast.subscribe((state) => {
      setToasts(state.slice(0, TOAST_LIMIT_POLICY));
    });

    return () => unsubscribe();
  }, []);

  return (
    <AnimatePortal isOpen={!!toasts.length}>
      <motion.div
        variants={variants}
        initial='initial'
        animate='animate'
        exit='exit'
        className='max-w-380 fixed inset-x-0 bottom-16 pointer-events-none flex-col gap-4 z-modal mx-auto flex w-full justify-center px-16'
      >
        <AnimatePresence>
          {toasts.map(({ id, type, text }) => (
            <motion.div
              key={id}
              variants={variants}
              initial='initial'
              animate='animate'
              exit='exit'
              className={cn(
                `inline-flex h-48 w-full items-center gap-x-4 rounded-xl bg-[#212123] px-16 py-12 text-sm text-white opacity-80`,
                {
                  'bg-[#FF3333]': type === 'fail',
                }
              )}
            >
              {type === 'success' ? (
                <Icon as={ClipboardCheck} color='green.500' width={5} height={5} />
              ) : (
                <Icon as={CircleXIcon} color='white' width={5} height={5} />
              )}
              {text}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </AnimatePortal>
  );
}
