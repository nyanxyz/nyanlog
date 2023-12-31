'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { css } from 'styled-system/css';
import { SidebarFiles } from '@/components/SidebarFiles';
import { Portal } from '@radix-ui/react-portal';
import Link from 'next/link';

export function SidebarHeader({
  folders,
  postId,
}: {
  folders: { folder: string; posts: { title: string; postId: string }[] }[];
  postId: string;
}) {
  return (
    <Dialog.Root>
      <div className={styles.headerFallback} />
      <div className={styles.header}>
        <Dialog.Trigger className={styles.trigger}>
          <img src={'/menu.svg'} alt={'menu'} width={24} height={24} />
        </Dialog.Trigger>
        <Link href={'/Home'}>nyanlog</Link>
      </div>

      <Dialog.Portal>
        <Dialog.Content className={styles.content}>
          <SidebarFiles folders={folders} postId={postId} />
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

const styles = {
  headerFallback: css({
    h: 50,
  }),
  header: css({
    h: 50,
    w: '100%',
    p: '0 8px',
    display: 'flex',
    alignItems: 'center',
    borderBottom: '1px solid',
    borderColor: 'base30',
    bg: 'base00',
    position: 'fixed',
    top: 0,
    fontSize: '18px',
    color: 'base100',
    fontWeight: 'bold',

    '& button': {
      cursor: 'pointer',
      mr: 6,
    },

    md: {
      display: 'none',
    },
  }),
  trigger: css({
    p: 6,
  }),
  content: css({
    position: 'fixed',
    h: 'calc(100vh - 50px)',
    top: 50,
    w: '100%',

    '&[data-state="open"]': {
      animation: 'slideIn 0.2s ease-in-out',
    },
  }),
};
