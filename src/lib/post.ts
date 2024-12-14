import dayjs from 'dayjs';
import fs from 'fs';
import { sync } from 'glob';
import matter from 'gray-matter';
import path from 'path';
import readingTime from 'reading-time';

const BASE_PATH = 'contents';
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

const parsePost = async (postPath: string): Promise<Post> => {
  const postAbstract = parsePostAbstract(postPath);
  const postDetail = await parsePostDetail(postPath);
  return {
    ...postAbstract,
    ...postDetail,
  };
};

export const parsePostAbstract = (postPath: string) => {
  const filePath = postPath.slice(postPath.indexOf(BASE_PATH)).replace(`${BASE_PATH}/`, '').replace('.mdx', '');

  const [category, slug] = filePath.split('/');
  const url = `/${category}/${slug}`;

  return { url, category, slug };
};

const parsePostDetail = async (postPath: string) => {
  const file = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const readingMinutes = Math.ceil(readingTime(content).minutes);
  const dateString = dayjs(grayMatter.date).locale('ko').format('YYYY년 MM월 DD일');
  return { ...grayMatter, dateString, content, readingMinutes };
};

export const getCategoryPublicName = (dirPath: string) =>
  dirPath
    .split('_')
    .map((token) => token[0].toUpperCase() + token.slice(1, token.length))
    .join(' ');

const sortPostList = (PostList: Post[]) => {
  return PostList.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export const getPostPaths = (category?: string) => {
  const folder = category || '**';
  const paths: string[] = sync(`${POSTS_PATH}/${folder}/**/*.mdx`);
  return paths;
};

export const getPostList = async (category?: string): Promise<Post[]> => {
  const paths: string[] = getPostPaths(category);

  const posts = await Promise.all(paths.map((postPath) => parsePost(postPath)));
  return sortPostList(posts);
};

export const getCategoryList = () => {
  const cgPaths: string[] = sync(`${POSTS_PATH}/*`);
  const cgList = cgPaths.map((path) => path.split('/').slice(-1)?.[0]);
  return cgList;
};

export const getPostDetail = async (category: string, slug: string) => {
  const filePath = `${POSTS_PATH}/${category}/${slug}.mdx`;
  const detail = await parsePost(filePath);
  return detail;
};
