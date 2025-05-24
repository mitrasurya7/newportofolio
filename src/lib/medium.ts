
import Parser from 'rss-parser'

type Post = {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
};

const parser = new Parser();

export async function getMediumPosts(): Promise<Post[]> {
  const feed = await parser.parseURL('https://medium.com/feed/@mitradev.me'); // ganti dengan username kamu
  return feed.items.slice(0, 5) as Post[];
}
