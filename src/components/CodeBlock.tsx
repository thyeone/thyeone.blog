'use client';

import { Button, Icon, Text } from '@chakra-ui/react';
import { ClipboardCheckIcon, ClipboardIcon } from 'lucide-react';
import { useRef, useState } from 'react';
import { toast } from './Toaster';

const LANGUAGE_MAP = {
  tsx: 'typescript',
  ts: 'typescript',
  json: 'JSON',
};

const CodeBlock = ({
  children,
  ...props
}: React.ComponentPropsWithoutRef<'pre'> & {
  'data-language'?: string;
}) => {
  const codeRef = useRef<HTMLPreElement>(null);

  const [copied, setCopied] = useState(false);

  const language = props['data-language'];

  const onCopy = async () => {
    const code = codeRef.current?.querySelector('code')?.innerText;
    if (!code) return;

    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      toast.show({
        type: 'success',
        text: '코드를 복사했어요.',
      });
    } catch (e) {
      toast.show({
        type: 'fail',
        text: '코드를 복사하는데 실패했어요.',
      });
    }
  };

  return (
    <pre {...props} ref={codeRef} className='group relative'>
      {language && (
        <Text
          fontSize='12px !important'
          color='gray.500'
          pos='absolute'
          m='0px !important'
          right={4}
          top={1}
          className='group-hover:opacity-0 opacity-100 transition-all'
        >
          {LANGUAGE_MAP[language as keyof typeof LANGUAGE_MAP]}
        </Text>
      )}
      <Button
        variant='outline'
        pos='absolute'
        right={4}
        top={4}
        width={10}
        height={10}
        p={0}
        className='group-hover:opacity-100 opacity-0'
        onClick={onCopy}
      >
        {copied ? (
          <Icon as={ClipboardCheckIcon} color='gray.300' width='20px' height='20px' />
        ) : (
          <Icon as={ClipboardIcon} color='gray.300' width='20px' height='20px' />
        )}
      </Button>
      {children}
    </pre>
  );
};
export default CodeBlock;
