import { getCategoryList, getPostList } from '@/lib/post';
import GitHub from '@/svgs/GitHub';
import Resume from '@/svgs/Resume';
import { Divider, Flex, Stack, Tooltip } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

export default async function Home() {
  const postList = await getPostList('posts');
  const categoryList = getCategoryList();

  return (
    <>
      <Flex className='gap-16 py-24'>
        <div className='overflow-hidden rounded-10 aspect-square size-100 phone:size-130 relative'>
          <Image
            src='https://avatars.githubusercontent.com/u/48711263?v=4'
            fill
            placeholder='blur'
            alt='avatar'
            className='obejct-cover'
            blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII='
          />
        </div>
        <Stack>
          <p className='text-3xl font-bold'>김태현</p>
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
      <p className='font-bold text-xl'>최근 포스트</p>
      <Stack marginTop='24px'>
        {postList.slice(0, 3).map(({ url, title, description, date, thumbnail }, index) => (
          <Link
            key={index}
            href={url}
            className='flex phone:flex-row group gap-24 py-24 flex-col-reverse phone:items-center w-full'
          >
            <div className='flex flex-col flex-1'>
              <span className='text-2xl font-bold group-hover:text-teal-600 transition'>{title}</span>
              <span className='mt-8 text-sm phone:text-15 phone:leading-24 text-gray-500'>{description}</span>
              <span className='mt-16 text-xs text-gray-500'>{dayjs(date).format('YYYY년 MM월 DD일')}</span>
            </div>
            <div className='relative rounded-10 phone:rounded-12 shrink-0 w-full h-200 phone:w-130 phone:h-90 overflow-hidden'>
              <Image
                src={thumbnail}
                fill
                alt='thumbnail'
                className='group-hover:scale-110 duration-300 transition-transform'
              />
            </div>
          </Link>
        ))}
      </Stack>
    </>
  );
}
