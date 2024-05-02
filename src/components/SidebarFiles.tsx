'use client';

import Link from 'next/link';
import { css, cva } from 'styled-system/css';
import * as Collapsible from '@radix-ui/react-collapsible';

export function SidebarFiles({
  folders,
  postId,
}: {
  folders: { folder: string; posts: { title: string; postId: string }[] }[];
  postId: string;
}) {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>nyanlog</div>

      <Link href="/" className={styles.file({ active: postId === 'Home' })}>
        Home
      </Link>
      {folders.map(({ folder, posts }) => (
        <Collapsible.Root
          key={folder}
          className={styles.root}
          defaultOpen={true}
        >
          <Collapsible.Trigger className={styles.file({ active: false })}>
            <img
              src="/arrow.svg"
              alt=""
              width={10}
              height={10}
              className={styles.arrow}
            />
            {folder}
          </Collapsible.Trigger>
          <Collapsible.Content className={styles.content}>
            {posts.map((post) => (
              <Link
                key={post.postId}
                href={`/${post.postId}`}
                className={styles.file({
                  active: post.postId === postId,
                  depth: 1,
                })}
              >
                {post.title}
              </Link>
            ))}
          </Collapsible.Content>
        </Collapsible.Root>
      ))}
    </div>
  );
}

const styles = {
  sidebar: css({
    w: '100%',
    h: '100vh',
    bg: 'base20',
    p: '42px 12px',
    display: 'flex',
    flexDir: 'column',
    gap: 2,
    flexShrink: 0,
    position: 'sticky',
    top: 0,
  }),
  header: css({
    p: '4px 8px 4px 24px',
    fontSize: '15px',
    color: 'base100',
    fontWeight: 'bold',
  }),
  arrow: css({
    position: 'absolute',
    left: 8,
    top: 0,
    bottom: 0,
    m: 'auto 0',
    transition: 'transform 0.2s ease-in-out',
  }),
  root: css({
    display: 'flex',
    flexDir: 'column',
    gap: 2,
  }),
  content: css({
    display: 'flex',
    flexDir: 'column',
    gap: 2,
    overflow: 'hidden',

    '&[data-state="open"]': {
      animationName: 'slideDown',
      animationDuration: '0.05s',
      animationTimingFunction: 'ease-in',
    },
    '&[data-state="closed"]': {
      animationName: 'slideUp',
      animationDuration: '0.05s',
      animationTimingFunction: 'ease-in',
    },
  }),
  file: cva({
    base: {
      w: '100%',
      p: '4px 8px 4px 24px',
      fontSize: '14px',
      fontWeight: 'normal',
      rounded: '4px',
      textAlign: 'left',
      position: 'relative',
      cursor: 'default',
      outline: 'none',
      transition: 'background-color 0.1s',

      md: {
        '&:hover': {
          bg: 'rgba(0, 0, 0, 0.075)',
          color: 'base100',
        },
      },

      '&[data-state="closed"] img': {
        transform: 'rotate(-90deg)',
      },
    },

    variants: {
      active: {
        true: {
          bg: 'rgba(0, 0, 0, 0.075)',
          color: 'base100',
          fontWeight: 'medium',
        },
        false: {
          color: 'base70',
        },
      },
      depth: {
        0: {
          pl: 24,
        },
        1: {
          pl: 40,
        },
      },
    },
  }),
};
