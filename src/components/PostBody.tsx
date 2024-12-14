import { MDXRemote } from 'next-mdx-remote/rsc';
import Prose from './Prose';
import rehypePrettyCode from 'rehype-pretty-code';

export default function PostBodyMDX({ content }: { content: Post['content'] }) {
  return (
    <Prose>
      <MDXRemote
        source={content}
        options={{
          mdxOptions: {
            rehypePlugins: [[rehypePrettyCode]],
          },
        }}
      />
    </Prose>
  );
}
