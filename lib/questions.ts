export type QuizOption = {
  label: string;
  scores: {
    e: number;
    s: number;
    t: number;
    j: number;
  };
};

export type QuizQuestion = {
  id: number;
  question: string;
  options: QuizOption[];
};

export const questions: QuizQuestion[] = [
  {
    id: 1,
    question: '新しい人と会ったとき、まず何をしますか？',
    options: [
      { label: '自分から話しかけて仲良くなる', scores: { e: 1, s: 0, t: 0, j: 0 } },
      { label: '相手の雰囲気を見てから動く', scores: { e: -1, s: 0, t: 0, j: 0 } }
    ]
  },
  {
    id: 2,
    question: '仕事や予定はどんな進め方が多いですか？',
    options: [
      { label: '前もって計画を立てて進める', scores: { e: 0, s: 0, t: 0, j: 1 } },
      { label: 'その日の流れに合わせて対応する', scores: { e: 0, s: 0, t: 0, j: -1 } }
    ]
  },
  {
    id: 3,
    question: '新しい情報を得るとき、どちらを重視しますか？',
    options: [
      { label: '実際の体験や事実を大事にする', scores: { e: 0, s: 1, t: 0, j: 0 } },
      { label: '可能性やひらめきを大事にする', scores: { e: 0, s: -1, t: 0, j: 0 } }
    ]
  },
  {
    id: 4,
    question: '何かを決めるとき、どちらが優先ですか？',
    options: [
      { label: '論理的で筋の通った選択', scores: { e: 0, s: 0, t: 1, j: 0 } },
      { label: '相手の気持ちや雰囲気', scores: { e: 0, s: 0, t: -1, j: 0 } }
    ]
  },
  {
    id: 5,
    question: '休日はどちらの過ごし方が多いですか？',
    options: [
      { label: 'あらかじめ予定を立てて行動する', scores: { e: 1, s: 1, t: 0, j: 0 } },
      { label: '気分でゆったり過ごす', scores: { e: -1, s: -1, t: 0, j: 0 } }
    ]
  },
  {
    id: 6,
    question: '新しいアイデアが出たとき、どう動きたいですか？',
    options: [
      { label: 'まず試してみたくなる', scores: { e: 1, s: -1, t: -1, j: 0 } },
      { label: '実現できるかを考えてから進める', scores: { e: -1, s: 1, t: 1, j: 0 } }
    ]
  },
  {
    id: 7,
    question: 'グループではどんな役割が多いですか？',
    options: [
      { label: '先頭に立ってまとめる', scores: { e: 1, s: 0, t: 1, j: 0 } },
      { label: '周りを見て調整する', scores: { e: -1, s: 0, t: -1, j: 1 } }
    ]
  },
  {
    id: 8,
    question: '新しい場所に行くとき、あなたはどうしていますか？',
    options: [
      { label: 'すぐに人に声をかける', scores: { e: 1, s: 0, t: 0, j: -1 } },
      { label: 'まず周囲の様子を見守る', scores: { e: -1, s: 1, t: 0, j: 0 } }
    ]
  },
  {
    id: 9,
    question: '意見が分かれたとき、どちらを重視しますか？',
    options: [
      { label: '事実と合理性を大事にする', scores: { e: 0, s: 1, t: 1, j: 0 } },
      { label: '人間関係や気持ちを大事にする', scores: { e: 0, s: -1, t: -1, j: 0 } }
    ]
  },
  {
    id: 10,
    question: '身の回りの片付けはどうしていますか？',
    options: [
      { label: 'いつもきちんと整えておきたい', scores: { e: 0, s: 1, t: 0, j: 1 } },
      { label: '必要なときにだけ片付ける', scores: { e: 0, s: -1, t: 0, j: -1 } }
    ]
  },
  {
    id: 11,
    question: '誰かに頼まれごとをされたら、まずどうしますか？',
    options: [
      { label: 'すぐに対応したい', scores: { e: 1, s: 0, t: -1, j: 0 } },
      { label: '自分のスケジュールを確認してから決める', scores: { e: -1, s: 0, t: 1, j: 0 } }
    ]
  },
  {
    id: 12,
    question: '悩みごとはどう整理しますか？',
    options: [
      { label: 'まず自分の中でじっくり考える', scores: { e: -1, s: -1, t: 0, j: 0 } },
      { label: '誰かと話しながら整理する', scores: { e: 1, s: 1, t: 0, j: 0 } }
    ]
  },
  {
    id: 13,
    question: '将来のことを考えるとき、どちらに近いですか？',
    options: [
      { label: '楽しいことや理想を想像する', scores: { e: 0, s: -1, t: 0, j: -1 } },
      { label: '実際にできることを重視する', scores: { e: 0, s: 1, t: 0, j: 1 } }
    ]
  },
  {
    id: 14,
    question: '問題を解決するとき、あなたは？',
    options: [
      { label: '論理的に整理して進める', scores: { e: 0, s: 0, t: 1, j: 1 } },
      { label: '周りの人が安心できる方法を選ぶ', scores: { e: 0, s: 0, t: -1, j: -1 } }
    ]
  },
  {
    id: 15,
    question: '集まりのとき、自分はどちらですか？',
    options: [
      { label: '前に出て動くことが多い', scores: { e: 1, s: 0, t: 0, j: 0 } },
      { label: '裏方で支えることが多い', scores: { e: -1, s: 0, t: 0, j: 0 } }
    ]
  },
  {
    id: 16,
    question: '時間の使い方はどちらに近いですか？',
    options: [
      { label: '期限を意識して動く', scores: { e: 0, s: 1, t: 0, j: 1 } },
      { label: '興味のあることを優先する', scores: { e: 0, s: -1, t: 0, j: -1 } }
    ]
  },
  {
    id: 17,
    question: '直感と情報、どちらを信じやすいですか？',
    options: [
      { label: '直感を大事にする', scores: { e: 0, s: -1, t: 0, j: 0 } },
      { label: '経験やデータを重視する', scores: { e: 0, s: 1, t: 0, j: 0 } }
    ]
  },
  {
    id: 18,
    question: '新しいルールができたとき、あなたはどうしますか？',
    options: [
      { label: 'まずは素早く慣れる', scores: { e: 0, s: 1, t: 0, j: 1 } },
      { label: '意味を考えてから動く', scores: { e: 0, s: -1, t: 0, j: -1 } }
    ]
  },
  {
    id: 19,
    question: '話すとき、どちらが近いですか？',
    options: [
      { label: '事実を中心に話す', scores: { e: 0, s: 1, t: 1, j: 0 } },
      { label: '感情や雰囲気も伝える', scores: { e: 0, s: -1, t: -1, j: 0 } }
    ]
  },
  {
    id: 20,
    question: 'あなたはどちらの進め方がしっくりきますか？',
    options: [
      { label: '計画を立てて着実に進める', scores: { e: 0, s: 0, t: 0, j: 1 } },
      { label: 'その場の流れに合わせて柔軟に動く', scores: { e: 0, s: 0, t: 0, j: -1 } }
    ]
  }
];
