import { MDXRemote } from 'next-mdx-remote/rsc';
import rehypePrettyCode from 'rehype-pretty-code';
import Callout from './Callout';
import MDXLink from './MDXLink';
import Prose from './Prose';
import CodeBlock from './CodeBlock';

const components = {
  Callout,
  MDXLink,
  pre: CodeBlock,
};

export default function PostBodyMDX({ content }: { content: Post['content'] }) {
  return (
    <Prose>
      <MDXRemote
        source={content}
        components={components}
        options={{
          mdxOptions: {
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  keepBackground: true,
                  theme: 'github-dark',
                  onVisitLine(node: any) {
                    if (node.line) {
                      node.properties.className = ['line'];
                    }
                  },
                  onVisitHighlightedLine(node: any) {
                    node.properties.className = ['line', 'highlighted'];
                  },
                },
              ],
            ],
          },
        }}
      />
    </Prose>
  );
}
