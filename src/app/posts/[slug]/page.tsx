import PostBodyMDX from '@/components/PostBody';
import { getPostDetail } from '@/lib/getPostList';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostDetail('posts', params.slug);

  return <PostBodyMDX content={post.content} />;
}
