import Image from 'next/image';

const banners = [
  {
    href: 'https://mbti-darkside.vercel.app/',
    src: '/images/MBTI.png',
    alt: 'MBTI ダークサイド',
    width: 1774,
    height: 469
  },
  {
    href: 'https://note.com/intj_analyst',
    src: '/images/INTJ.png',
    alt: 'INTJ アナリスト note',
    width: 1774,
    height: 410
  }
];

export default function BannerLinks() {
  return (
    <div className="mt-12">
      <p className="text-center text-sm uppercase tracking-[0.4em] text-amber-200/70">RELATED</p>
      <div className="mx-auto mt-6 grid max-w-md gap-4">
        {banners.map((banner) => (
          <a
            key={banner.href}
            href={banner.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block overflow-hidden rounded-[1.25rem] border border-amber-300/20 bg-slate-900/90 shadow-soft transition hover:-translate-y-0.5 hover:border-amber-300/50"
          >
            <Image
              src={banner.src}
              alt={banner.alt}
              width={banner.width}
              height={banner.height}
              className="h-auto w-full transition duration-300 group-hover:scale-105"
              sizes="(max-width: 480px) 100vw, 448px"
            />
          </a>
        ))}
      </div>
    </div>
  );
}
