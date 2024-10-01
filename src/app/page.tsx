import { getCategoryList, getPostList } from '@/lib/post';
import dayjs from 'dayjs';
import Link from 'next/link';

export default async function Home() {
  const postList = await getPostList('posts');
  const categoryList = getCategoryList();

  return (
    <div>
      {postList.map(({ url, slug, category, title, description, date, thumbnail }, index) => (
        <Link key={index} href={url}>
          <span>{title}</span>
          <span>{dayjs(date).format('YYYY-MM-DD')}</span>
        </Link>
      ))}
    </div>
  );
}
