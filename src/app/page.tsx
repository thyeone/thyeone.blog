import { getCategoryList, getPostList } from '@/lib/getPostList';
import dayjs from 'dayjs';
import Link from 'next/link';

export default async function Home() {
  const postList = await getPostList('posts');
  const categoryList = getCategoryList();

  console.log(categoryList);

  return (
    <div>
      {postList.map(({ url, slug, category, title, description, date, thumbnail }) => (
        <Link key={title} href={url}>
          <span>{title}</span>
          <span>{dayjs(date).format('YYYY-MM-DD')}</span>
        </Link>
      ))}
    </div>
  );
}
