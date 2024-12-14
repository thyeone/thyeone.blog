'use client';

import { useColorMode } from '@chakra-ui/react';
import GiscusReact from '@giscus/react';

import type { GiscusProps } from '@giscus/react';

const Giscus = () => {
  const { colorMode } = useColorMode();

  const giscusConfig: GiscusProps = {
    repo: 'thyeone/thyeone.blog',
    repoId: 'R_kgDOM5O_EA',
    category: 'General',
    categoryId: 'DIC_kwDOM5O_EM4ClOlN',
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
