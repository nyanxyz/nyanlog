import path from 'path';
import fs from 'fs/promises';
import matter from 'gray-matter';
import { SidebarFiles } from '@/components/SidebarFiles';
import { css } from 'styled-system/css';
import { SidebarHeader } from '@/components/SidebarHeader';

async function getPosts() {
  const PATH = path.join(process.cwd(), 'src', 'md');
  let files: { title: string; postId: string; parentDir: string }[] = [];

  async function recurse(dir: string) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (let entry of entries) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        await recurse(fullPath);
      } else if (path.extname(entry.name) === '.md') {
        const file = await fs.readFile(fullPath, 'utf8');
        const fileData = matter(file).data;
        files.push({
          title: fileData.Title,
          postId: path.basename(fullPath, path.extname(fullPath)),
          parentDir: path.basename(path.dirname(fullPath)),
        });
      }
    }
  }

  await recurse(PATH);

  const folderMap: Record<string, { title: string; postId: string }[]> = {};
  files.forEach((file) => {
    if (!folderMap[file.parentDir]) {
      folderMap[file.parentDir] = [];
    }
    folderMap[file.parentDir].push({
      title: file.title,
      postId: file.postId,
    });
  });

  return Object.entries(folderMap)
    .map(([folder, posts]) => ({ folder, posts }))
    .filter((folder) => folder.folder !== 'md');
}

export async function Sidebar({ postId }: { postId: string }) {
  const folders = await getPosts();

  return (
    <>
      <div className={styles.mobileSidebar}>
        <SidebarHeader folders={folders} postId={postId} />
      </div>
      <div className={styles.desktopSidebar}>
        <SidebarFiles folders={folders} postId={postId} />
      </div>
    </>
  );
}

const styles = {
  mobileSidebar: css({
    display: 'block',
    md: {
      display: 'none',
    },
  }),
  desktopSidebar: css({
    display: 'none',
    md: {
      display: 'block',
      borderRight: '1px solid',
      borderColor: 'base30',
      w: 250,
    },
  }),
};
