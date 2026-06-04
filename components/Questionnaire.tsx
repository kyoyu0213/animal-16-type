'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { questions } from '@/lib/questions';
import { calculateType } from '@/lib/diagnosis';

export default function Questionnaire() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);

  const currentQuestion = questions[currentIndex];
  const progressLabel = useMemo(
    () => `${currentIndex + 1} / ${questions.length}`,
    [currentIndex]
  );
  const progressPercent = useMemo(
    () => Math.round(((currentIndex + 1) / questions.length) * 100),
    [currentIndex]
  );

  const onSelect = (optionIndex: number) => {
    setSelectedIndex(optionIndex);
  };

  const onNext = () => {
    if (selectedIndex === null) return;
    const nextAnswers = [...answers, selectedIndex];

    if (currentIndex + 1 === questions.length) {
      const resultType = calculateType(nextAnswers);
      router.push(`/result?type=${resultType}`);
      return;
    }

    setAnswers(nextAnswers);
    setCurrentIndex(currentIndex + 1);
    setSelectedIndex(null);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-[2rem] border border-amber-300/20 bg-amber-50/90 p-6 shadow-[inset_0_0_0_1px_rgba(245,158,11,0.12)]">
        <div className="flex items-center justify-between text-sm uppercase tracking-[0.2em] text-amber-700">
          <span>質問 {progressLabel}</span>
          <span>{currentQuestion.question}</span>
        </div>
        <div className="mt-4 h-3 overflow-hidden rounded-full bg-slate-900/20">
          <div className="h-full rounded-full bg-gradient-to-r from-amber-400 to-amber-500 transition-all" style={{ width: `${progressPercent}%` }} />
        </div>
      </div>

      <div className="grid gap-4">
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedIndex === index;
          return (
            <button
              key={option.label}
              type="button"
              className={`rounded-[1.75rem] border px-5 py-5 text-left text-sm transition duration-200 ${
                isSelected
                  ? 'border-amber-300 bg-slate-900 text-amber-100 shadow-[0_20px_40px_rgba(245,158,11,0.15)]'
                  : 'border-amber-200 bg-slate-950/80 text-slate-100 hover:border-amber-300 hover:bg-slate-900/90'
              }`}
              onClick={() => onSelect(index)}
            >
              {option.label}
            </button>
          );
        })}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-300">選択した回答を進めてください。</div>
        <button
          type="button"
          onClick={onNext}
          disabled={selectedIndex === null}
          className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_rgba(245,158,11,0.25)] transition disabled:cursor-not-allowed disabled:bg-slate-700/60"
        >
          {currentIndex + 1 === questions.length ? '診断結果へ' : '次へ'}
        </button>
      </div>
    </div>
  );
}
