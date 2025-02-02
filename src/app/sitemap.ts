import { getPostList } from '@/lib/post';
import { MetadataRoute } from 'next';

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const allPost = await getPostList();

  const posts: MetadataRoute.Sitemap = allPost.map((post) => ({
    url: `https://thyeone.blog/posts/${post.slug}/`,
    lastModified: new Date(post.date).toISOString().split('T')[0],
  }));

  return [
    {
      url: `https://thyeone.blog/`,
      lastModified: new Date().toISOString().split('T')[0],
      priority: 1,
    },
    ...posts,
  ];
};

export default sitemap;
