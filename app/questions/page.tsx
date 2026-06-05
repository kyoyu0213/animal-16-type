import Questionnaire from '@/components/Questionnaire';
import BannerLinks from '@/components/BannerLinks';

export default function QuestionsPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(245,158,11,0.14),transparent_20%),linear-gradient(180deg,#050816,#111827)] px-4 py-10 text-slate-100">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-amber-400/10 bg-slate-950/90 p-8 shadow-soft ring-1 ring-amber-400/10 backdrop-blur-sm">
        <div className="mb-8 rounded-[1.75rem] border border-amber-300/20 bg-slate-900/90 p-8 shadow-[inset_0_0_0_1px_rgba(245,158,11,0.12)]">
          <p className="text-xs uppercase tracking-[0.35em] text-amber-200">冒険者ギルドの質問書</p>
          <h1 className="mt-4 text-4xl font-semibold text-amber-100">動物王国の人格図鑑</h1>
          <p className="mt-3 max-w-2xl text-slate-300">
            20問の選択肢で、あなたの本質に近い動物タイプを紋章として明かします。
          </p>
        </div>
        <Questionnaire />
        <BannerLinks />
      </div>
    </main>
  );
}
