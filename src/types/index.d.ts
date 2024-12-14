type PostMatter = {
  title: string;
  date: Date;
  dateString: string;
  thumbnail: string;
  description: string;
};

type Post = PostMatter & {
  url: string;
  slug: string;
  category: string;
  content: string;
  readingMinutes: number;
};
