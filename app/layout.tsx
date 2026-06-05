import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/react';
import './globals.css';

export const metadata: Metadata = {
  title: '16タイプ動物診断',
  description: 'Next.jsで作る16タイプ動物診断サイト'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-amber-500 selection:text-slate-950">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
