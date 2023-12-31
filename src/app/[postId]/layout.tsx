import { Sidebar } from '@/components/Sidebar';
import { css } from 'styled-system/css';
import { ReactNode } from 'react';

export default function PostLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { postId: string };
}) {
  return (
    <div className={styles.root}>
      <Sidebar postId={params.postId} />
      {children}
    </div>
  );
}

const styles = {
  root: css({
    display: 'flex',
    flexDir: 'column',
    minH: '100vh',

    md: {
      flexDir: 'row',
    },
  }),
};
