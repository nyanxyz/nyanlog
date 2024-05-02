import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { Content } from '@/components/Content';

export const dynamicParams = false;

export async function generateStaticParams() {
  const PATH = path.join(process.cwd(), 'src', 'md');
  let fileNames: string[] = [];

  async function recurse(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (let entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await recurse(fullPath);
      } else if (path.extname(entry.name) === '.md') {
        fileNames.push(fullPath);
      }
    }
  }

  await recurse(PATH);
  return fileNames.map((file) => {
    return { postId: path.basename(file, path.extname(file)) };
  });
}

async function getPost(postId: string) {
  const PATH = path.join(process.cwd(), 'src', 'md');
  const targetPostId = postId;

  async function recurse(dir: string): Promise<string | null> {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (let entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        const result = await recurse(fullPath);
        if (result) return result;
      } else if (
        path.extname(entry.name) === '.md' &&
        path.basename(entry.name, '.md') === targetPostId
      ) {
        return await fs.readFile(fullPath, 'utf8');
      }
    }

    return null;
  }

  const md = await recurse(PATH);
  const { data, content } = matter(md ?? '');
  const markedContent = content.replace(/==(.*?)==/g, '<mark>$1</mark>');
  const parsedContent = await marked.parse(markedContent);

  return { data, content: parsedContent };
}

export default async function PostPage({
  params,
}: {
  params: { postId: string };
}) {
  const post = await getPost(params.postId);

  return <Content post={post} />;
}
