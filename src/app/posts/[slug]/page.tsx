import PostBodyMDX from '@/components/PostBody';
import { getPostDetail } from '@/lib/post';

export default async function PostDetailPage({ params }: { params: { slug: string } }) {
  const post = await getPostDetail('posts', params.slug);

  return <PostBodyMDX content={post.content} />;
}
