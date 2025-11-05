import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const poppins = localFont({
  src: [
    {
      path: '../public/fonts/Poppins-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Poppins-Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Poppins-SemiBold.ttf',
      weight: '600',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Expense Tracker',
  description:
    'The project focuses on building a simple expense management application where users can add, edit, delete, and view expenses.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>{children}</body>
    </html>
  );
}
