import React, { Suspense } from 'react';
import ResultClient from '@/components/ResultClient';
import BannerLinks from '@/components/BannerLinks';

export default function ResultPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),transparent_20%),linear-gradient(180deg,#050816,#111827)] px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-amber-400/10 bg-slate-950/90 p-8 shadow-soft ring-1 ring-amber-400/10 backdrop-blur-sm">
        <div className="mb-8 rounded-[1.75rem] border border-amber-300/20 bg-slate-900/90 p-8 shadow-[inset_0_0_0_1px_rgba(245,158,11,0.12)]">
          <p className="text-xs uppercase tracking-[0.3em] text-amber-200">鑑定書カード</p>
          <h1 className="mt-4 text-4xl font-semibold text-amber-100">あなたのタイプは</h1>
          <p className="mt-3 max-w-3xl text-slate-300">動物王国の人格図鑑におけるあなたの紋章を、冒険者として明かします。</p>
        </div>

        <Suspense fallback={<div className="p-8 text-center text-slate-400">読み込み中...</div>}>
          <ResultClient />
        </Suspense>
        <BannerLinks />
      </div>
    </main>
  );
}
