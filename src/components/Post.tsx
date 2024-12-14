import { Box, Text } from '@chakra-ui/react';
import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';

type PostProps = {
  post: Post;
};

export default function Post({ post }: PostProps) {
  const { url, title, description, date, thumbnail } = post;

  return (
    <Link href={url} className='flex phone:flex-row group gap-24 py-24 flex-col-reverse phone:items-center w-full'>
      <div className='flex flex-col flex-1'>
        <span className='text-2xl font-bold group-hover:text-teal-600 transition'>{title}</span>
        <Text fontSize='sm' className='mt-8 '>
          {description}
        </Text>
        <span className='mt-16 text-xs text-gray-500'>{dayjs(date).format('YYYY년 MM월 DD일')}</span>
      </div>
      <div className='relative rounded-10 phone:rounded-12 shrink-0 w-full h-180 phone:w-130 phone:h-90 overflow-hidden'>
        {thumbnail && (
          <Image
            src={thumbnail}
            fill
            alt='thumbnail'
            objectFit='cover'
            className='group-hover:scale-110 duration-300 transition-transform'
          />
        )}
      </div>
    </Link>
  );
}
