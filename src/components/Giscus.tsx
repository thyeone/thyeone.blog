'use client';

import { useColorMode } from '@chakra-ui/react';
import GiscusReact from '@giscus/react';

import type { GiscusProps } from '@giscus/react';

const Giscus = () => {
  const { colorMode } = useColorMode();

  const giscusConfig: GiscusProps = {
    repo: 'thyeone/thyeone.blog',
    repoId: 'R_kgDOKXQbJQ',
    category: 'General',
    categoryId: 'DIC_kwDOKXQbJc4CZ4HM',
    mapping: 'pathname',
    strict: '0',
    reactionsEnabled: '1',
    emitMetadata: '0',
    inputPosition: 'bottom',
    lang: 'ko',
    theme: colorMode,
  };

  return <GiscusReact {...giscusConfig} />;
};

export default Giscus;
