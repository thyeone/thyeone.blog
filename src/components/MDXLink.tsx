import { Link as NextLink } from '@chakra-ui/next-js';
import { type AnchorHTMLAttributes } from 'react';

const MDXLink = ({ href, ...props }: AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/');
  const isMDXLink = href && href.startsWith('20');
  const isAnchorLink = href && href.startsWith('#');

  if (isInternalLink || isMDXLink) {
    return <NextLink href={href} {...props} />;
  }

  if (isAnchorLink) {
    return (
      <a
        {...props}
        href={href}
        style={{
          color: 'inherit',
          textDecoration: 'none',
          fontWeight: 'inherit',
        }}
        className='anchor'
      />
    );
  }

  return <a target='_blank' rel='noopener noreferrer' href={href} {...props} />;
};

export default MDXLink;
