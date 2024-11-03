import { MDXRemote } from 'next-mdx-remote/rsc';
import Prose from './Prose';

export default function PostBodyMDX({ content }: { content: Post['content'] }) {
  return (
    <Prose>
      <MDXRemote source={content} />
    </Prose>
  );
}
