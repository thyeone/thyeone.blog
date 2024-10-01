import { MDXRemote } from 'next-mdx-remote/rsc';

export default function PostBodyMDX({ content }: { content: Post['content'] }) {
  return <MDXRemote source={content} />;
}
