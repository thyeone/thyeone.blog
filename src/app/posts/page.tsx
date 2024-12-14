import ChakraMotion from '@/components/ChakraMotion';
import Post from '@/components/Post';
import { fadeIn } from '@/constants/motions';
import { getPostList } from '@/lib/post';
import { List } from '@chakra-ui/react';

export default async function PostPage() {
  const postList = await getPostList('posts');
  return (
    <ChakraMotion variants={fadeIn} initial='hidden' animate='visible'>
      {postList.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </ChakraMotion>
  );
}
