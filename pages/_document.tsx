import { Html, Head, Main, NextScript } from 'next/document';

import type { Metadata } from 'next';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description:
    'The project focuses on building a simple expense management application where users can add, edit, delete, and view expenses.',
};

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className={`antialiased`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
