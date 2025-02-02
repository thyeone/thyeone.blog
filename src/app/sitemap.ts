import { getPostList } from '@/lib/post';
import { MetadataRoute } from 'next';
import { use } from 'react';

const sitemap = (): MetadataRoute.Sitemap => {
  const allPost = use(getPostList());

  const posts: MetadataRoute.Sitemap = allPost.map((post) => ({
    url: `https://thyeone.blog/${post.slug}/`,
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
