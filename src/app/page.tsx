import ChakraMotion from '@/components/ChakraMotion';
import Post from '@/components/Post';
import { fadeIn } from '@/constants/motions';
import { getPostList } from '@/lib/post';
import GitHub from '@/svgs/GitHub';
import Resume from '@/svgs/Resume';
import { Button, Divider, Flex, Stack, Text, Tooltip } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image';

export default async function Home() {
  const postList = await getPostList('posts');

  return (
    <ChakraMotion variants={fadeIn} initial='hidden' animate='visible'>
      <Flex className='gap-16 py-24'>
        <div className='overflow-hidden rounded-10 aspect-square size-100 phone:size-130 relative'>
          <Image
            src='/avatar.png'
            fill
            placeholder='blur'
            alt='avatar'
            objectFit='cover'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='
          />
        </div>
        <Stack gap={0}>
          <Flex gap='6px'>
            <Text fontSize='x-large' fontWeight={700}>
              김태현
            </Text>
            <Text pos='relative' top='13px' fontSize='small' fontWeight={500}>
              Frontend Developer
            </Text>
          </Flex>
          <Flex className='mt-auto gap-8'>
            <Tooltip label='GitHub' hasArrow>
              <a
                href='https://github.com/thyeone'
                target='_blank'
                className='rounded p-1 transition duration-300 hover:bg-[rgba(0,0,0,0.08)]'
              >
                <GitHub />
              </a>
            </Tooltip>
            <Tooltip label='Resume' hasArrow>
              <a
                href='https://drive.google.com/file/d/1-ZDkotRA7pn2B_EAS3mH9vwdhA9BLqW0/view'
                target='_blank'
                className='rounded p-1 transition duration-300 hover:bg-[rgba(0,0,0,0.08)]'
              >
                <Resume />
              </a>
            </Tooltip>
          </Flex>
        </Stack>
      </Flex>
      <Divider className='my-24' />
      <Flex align='center' justify='space-between'>
        <p className='font-bold text-xl'>최근 포스트</p>
      </Flex>
      <Stack marginTop={2}>
        {postList.slice(0, 3).map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </Stack>
      <Link href='/posts' className='flex justify-center mt-6'>
        <Button
          width={{
            base: '100%',
            lg: 'fit-content',
          }}
        >
          모든 포스트 보기
        </Button>
      </Link>
    </ChakraMotion>
  );
}
