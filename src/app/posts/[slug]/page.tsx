import PostBodyMDX from '@/components/PostBody';
import { getPostDetail } from '@/lib/post';
import Calendar from '@/svgs/Calendar';
import Clock from '@/svgs/Clock';
import { Code, Divider, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Image from 'next/image';

export default async function PostDetailPage({ params: { slug } }: { params: { slug: string } }) {
  const post = await getPostDetail('posts', slug);

  return (
    <>
      <Stack
        align='center'
        justify='center'
        className='relative backdrop-blur-sm px-16 min-h-250 rounded-xl overflow-hidden h-fit py-36'
      >
        <Heading as='h2' className='z-10 mb-4 text-center '>
          {post.title}
        </Heading>
        <Text fontSize='sm' zIndex='10' fontWeight={600} textAlign='center'>
          {post.description}
        </Text>
        <Flex position='absolute' bottom={6} align='center' className='z-10'>
          <Calendar width={12} height={12} />
          <Text fontSize='sm' fontWeight={500} zIndex='10' marginX={1}>
            {dayjs(post.date).format('YYYY-MM-DD')} |
          </Text>
          <Clock width={12} height={12} />
          <Text fontSize='sm' fontWeight={500} marginX={1} zIndex='10'>
            {post.readingMinutes}분
          </Text>
        </Flex>
        <Image src={post.thumbnail} fill objectFit='cover' alt='' className='blur-[10px] opacity-70' />
      </Stack>
      <PostBodyMDX content={post.content} />
    </>
  );
}
