import { Code as ChakraCode } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const MDXContent = {};

function Code({ children }: PropsWithChildren) {
  return <ChakraCode>{children}</ChakraCode>;
}

export default MDXContent;
