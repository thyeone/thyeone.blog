import { MDXRemote } from 'next-mdx-remote/rsc';
import Prose from './Prose';
import rehypePrettyCode from 'rehype-pretty-code';
import Callout from './Callout';
import MDXLink from './MDXLink';

const components = {
  Callout,
  MDXLink,
};

export default function PostBodyMDX({ content }: { content: Post['content'] }) {
  return (
    <Prose>
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode]],
          },
        }}
      />
    </Prose>
  );
}
