import Image from 'next/image';
import Link from 'next/link';
import BannerLinks from '@/components/BannerLinks';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.18),transparent_20%),linear-gradient(180deg,#050816,#111827)] px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-4xl rounded-[2rem] border border-amber-400/10 bg-slate-950/90 p-8 shadow-soft ring-1 ring-amber-400/10 backdrop-blur-sm">
        <div className="space-y-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-300/20 bg-slate-900/90 p-4 shadow-soft">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.75rem] bg-slate-800">
              <Image
                src="/images/hero-guild.png"
                alt="動物王国のギルド"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute inset-x-6 bottom-6 rounded-[1.75rem] border border-amber-400/20 bg-slate-950/90 px-4 py-3 text-sm text-slate-300 shadow-[0_20px_40px_rgba(0,0,0,0.2)]">
              動物王国の図鑑ページをめくり、あなたの所属を紐解こう。
            </div>
          </div>

          <div className="space-y-6 rounded-[2rem] border border-amber-300/20 bg-slate-900/90 p-8 text-center shadow-[inset_0_0_0_1px_rgba(245,158,11,0.12)]">
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-amber-300/30 bg-slate-800/80 px-4 py-2 text-xs uppercase tracking-[0.3em] text-amber-200">
              動物王国の人格図鑑
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-amber-100">16タイプ動物診断</h1>
            <p className="mx-auto max-w-2xl text-base leading-8 text-slate-300">
              古の図書館の扉を開き、あなたの人格を動物王国の紋章として解き明かします。
            </p>
            <div className="mx-auto max-w-xl rounded-[1.75rem] border border-amber-300/15 bg-slate-950/80 p-6 text-slate-300 shadow-[inset_0_0_0_1px_rgba(248,209,0,0.08)]">
              <p className="text-sm leading-6">
                20問の問いを紐解き、あなたの最も近い動物タイプを鑑定書に仕立てます。
              </p>
            </div>
            <Link
              href="/questions"
              className="inline-flex items-center justify-center rounded-full border border-amber-300 bg-gradient-to-b from-amber-400 via-amber-300 to-amber-200 px-8 py-4 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_rgba(245,158,11,0.25)] transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              診断をはじめる
            </Link>
          </div>
        </div>
        <BannerLinks />
      </div>
    </main>
  );
}
