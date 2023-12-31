'use client';

import dompurify from 'dompurify';
import { css } from 'styled-system/css';

export function Content({
  post,
}: {
  post: { data: { [p: string]: any }; content: string };
}) {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <header>{post.data.Title}</header>
          {post.data.Date && (
            <div className={styles.date}>- {post.data.Date}</div>
          )}
        </div>
        <div
          dangerouslySetInnerHTML={{ __html: dompurify.sanitize(post.content) }}
        />
      </div>
    </div>
  );
}

const styles = {
  container: css({
    flex: 1,
  }),
  header: css({
    display: 'flex',
    flexDir: 'column',
    gap: 4,
    mb: 16,
  }),
  date: css({
    fontSize: 'smaller',
    color: 'base60',
  }),
  content: css({
    p: 32,
    fontSize: '16px',
    fontWeight: 'medium',
    lineHeight: '1.5',
    maxW: 700,
    margin: '0 auto',

    '& header': {
      fontSize: '1.802em',
      lineHeight: '1.2',
      fontWeight: 'extrabold',
    },

    '& h1': {
      fontSize: 'h1',
      lineHeight: 'h1',
      fontWeight: 'h1',
      p: '16px 0 6px',

      '& + h2': {
        paddingTop: '10px',
      },
    },

    '& h2': {
      fontSize: 'h2',
      lineHeight: 'h2',
      fontWeight: 'h2',
      p: '0 0 5px',
    },

    '& h3': {
      fontSize: 'h3',
      lineHeight: 'h3',
      fontWeight: 'h3',
      p: '0 0 4px',
    },

    '& p': {
      paddingBottom: '16px',
    },

    '& hr': {
      border: 'none',
      borderTop: '2px solid',
      borderColor: 'base30',
      margin: '11px 0',
    },

    '& mark': {
      bg: 'highlight',
      fontWeight: 'medium',
      color: 'base100',
    },

    '& a': {
      color: 'accent',
      textDecoration: 'underline',
      '&:hover': {
        color: 'accent2',
      },
    },
  }),
};
