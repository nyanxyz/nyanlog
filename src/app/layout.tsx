import type { Metadata } from 'next';
import { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'nyanlog',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="kr">
      <body>{children}</body>
    </html>
  );
}
