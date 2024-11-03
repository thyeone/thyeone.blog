import PostBodyMDX from '@/components/PostBody';
import { getPostDetail } from '@/lib/post';
import { Code } from '@chakra-ui/react';

export default async function PostDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPostDetail('posts', slug);

  return (
    <>
      <PostBodyMDX content={post.content} />
    </>
  );
}
