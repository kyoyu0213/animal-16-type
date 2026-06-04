"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { getTypeInfo } from '@/lib/diagnosis';

type ContentBlock =
  | { type: 'heading'; level: number; text: string }
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'blockquote'; text: string };

const parseDescription = (text: string): ContentBlock[] => {
  const lines = text.split(/\r?\n/);
  const blocks: ContentBlock[] = [];
  let paragraphLines: string[] = [];
  let listItems: string[] = [];
  let blockquoteLines: string[] = [];

  const flushParagraph = () => {
    if (paragraphLines.length > 0) {
      blocks.push({ type: 'paragraph', text: paragraphLines.join(' ') });
      paragraphLines = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      blocks.push({ type: 'list', items: listItems });
      listItems = [];
    }
  };

  const flushQuote = () => {
    if (blockquoteLines.length > 0) {
      blocks.push({ type: 'blockquote', text: blockquoteLines.join(' ') });
      blockquoteLines = [];
    }
  };

  const pushParagraphLine = (line: string) => {
    paragraphLines.push(line.replace(/\*\*/g, '').trim());
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line === '---') {
      flushParagraph();
      flushList();
      flushQuote();
      continue;
    }

    const headingMatch = line.match(/^(#{1,6})\s*(.*)$/);
    if (headingMatch) {
      flushParagraph();
      flushList();
      flushQuote();
      blocks.push({
        type: 'heading',
        level: headingMatch[1].length,
        text: headingMatch[2].replace(/\*\*/g, '').trim(),
      });
      continue;
    }

    const listMatch = line.match(/^[-*]\s+(.*)$/);
    if (listMatch) {
      flushParagraph();
      flushQuote();
      listItems.push(listMatch[1].replace(/\*\*/g, '').trim());
      continue;
    }

    const quoteMatch = line.match(/^>\s*(.*)$/);
    if (quoteMatch) {
      flushParagraph();
      flushList();
      blockquoteLines.push(quoteMatch[1].replace(/\*\*/g, '').trim());
      continue;
    }

    pushParagraphLine(line);
  }

  flushParagraph();
  flushList();
  flushQuote();

  return blocks;
};

const renderDescription = (description: string) => {
  const blocks = parseDescription(description);
  return blocks.map((block, index) => {
    if (block.type === 'heading') {
      return (
        <div key={index} className="mt-6 text-lg font-semibold text-amber-100">
          {block.text}
        </div>
      );
    }

    if (block.type === 'paragraph') {
      return (
        <p key={index} className="mt-4 text-slate-200 leading-7">
          {block.text}
        </p>
      );
    }

    if (block.type === 'list') {
      return (
        <ul key={index} className="mt-4 list-inside list-disc space-y-2 text-slate-200">
          {block.items.map((item, itemIndex) => (
            <li key={itemIndex} className="ml-4">
              {item}
            </li>
          ))}
        </ul>
      );
    }

    return (
      <div key={index} className="mt-4 rounded-3xl border-l-4 border-amber-400/70 bg-slate-900/80 px-4 py-3 text-slate-200">
        {block.text}
      </div>
    );
  });
};

export default function ResultClient() {
  const [copied, setCopied] = useState(false);
  const [openImage, setOpenImage] = useState(false);
  const searchParams = useSearchParams();
  const typeId = searchParams?.get('type');
  const result = typeId ? getTypeInfo(typeId) : null;

  const currentUrl = typeof window !== 'undefined' ? window.location.href : '';

  const handleShare = async () => {
    if (!result) return;
    const shareData = {
      title: `${result.name} - 診断結果`,
      text: `${result.name} の診断結果をチェックしてみてください！`,
      url: currentUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // ignore
      }
      return;
    }

    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(currentUrl);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // ignore
      }
    }
  };

  const handleCopyLink = async () => {
    if (!navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(currentUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  return (
    <>
      {result ? (
        <div className="space-y-8">
          <div className="grid gap-8 rounded-[2rem] border border-amber-300/15 bg-slate-900/90 p-6 shadow-soft md:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 rounded-full border border-amber-300/20 bg-slate-800/75 px-4 py-2 text-sm text-amber-200">
                <span>🪄 紋章鑑定</span>
                <span className="text-slate-400">{result.label}</span>
              </div>
              <div className="rounded-[1.75rem] border border-amber-300/20 bg-slate-950/90 p-6 shadow-[inset_0_0_0_1px_rgba(245,158,11,0.08)]">
                <div className="text-3xl font-semibold text-amber-100">{result.name}</div>
              </div>
              <div className="rounded-[1.75rem] border border-amber-300/20 bg-slate-950/95 p-6 text-slate-100">
                {renderDescription(result.description)}
              </div>
            </div>
            <div className="space-y-6 order-first md:order-last">
              <div className="overflow-hidden rounded-[1.75rem] border border-amber-300/20 bg-slate-950/95 p-4 shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
                <button
                  type="button"
                  onClick={() => setOpenImage(true)}
                  className="relative block w-full cursor-zoom-in focus:outline-none"
                  aria-label="画像を拡大表示"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[1.5rem] bg-slate-800">
                    <Image src={result.image} alt={result.label} fill className="object-contain" />
                  </div>
                </button>
              </div>
              <div className="rounded-[1.75rem] border border-amber-300/15 bg-slate-900/90 p-5 text-slate-300">
                <p className="text-sm uppercase tracking-[0.22em] text-amber-200">鑑定書メモ</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">この紋章は、あなたの冒険に必要な強みと、気をつけるべき注意点を教えてくれます。ゆっくりと読み解いてください。</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-[1.75rem] border border-amber-300/20 bg-slate-950/90 p-8 text-center text-slate-300">診断結果が見つかりません。もう一度診断を受けてください。</div>
      )}

      {openImage && result && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4" onClick={() => setOpenImage(false)}>
          <div className="relative mx-auto w-[90vw] max-w-3xl h-[70vh]">
            <Image src={result.image} alt={result.label} fill className="object-contain" />
          </div>
        </div>
      )}

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <button
          type="button"
          onClick={handleShare}
          className="inline-flex w-full items-center justify-center rounded-full border border-amber-300 bg-gradient-to-r from-amber-400 to-amber-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_20px_40px_rgba(245,158,11,0.25)] transition hover:-translate-y-0.5"
        >
          シェアする
        </button>
        <button
          type="button"
          onClick={handleCopyLink}
          className="inline-flex w-full items-center justify-center rounded-full border border-amber-300 bg-slate-900 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-slate-800"
        >
          リンクをコピー
        </button>
      </div>
      {copied && <div className="mt-4 text-center text-sm text-emerald-500">リンクをコピーしました！</div>}
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Link href="/questions" className="inline-flex w-full items-center justify-center rounded-full border border-amber-300 bg-slate-900 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-slate-800">もう一度診断する</Link>
        <Link href="/" className="inline-flex w-full items-center justify-center rounded-full border border-amber-300 bg-slate-900 px-6 py-3 text-sm font-semibold text-amber-100 transition hover:bg-slate-800">トップに戻る</Link>
      </div>
    </>
  );
}
