export const SITE_URL = 'https://multiplication-times-tables.com';
export const SITE_NAME = 'Multiplication Times Tables';
export const GA4_ID = 'G-WGPJW1K7RT';

export interface TableColors {
  accent: string;
  accentDark: string;
  accentSoft: string;
  accentRing: string;
  accentSoftNav: string;
  accentBorderNav: string;
}

export interface TableTip {
  introParagraph: string;
  bulletPoints: string[];
  editorialParagraph: string;
}

export interface TableFaq {
  question: string;
  answer: string;
}

export interface TableData {
  number: number;
  slug: string;
  label: string;
  pageTitle: string;
  metaDescription: string;
  canonicalPath: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  introParagraph: string;
  aboutH2: string;
  colors: TableColors;
  tips: TableTip;
  faqs: TableFaq[];
  prevTable: number | null;
  nextTable: number | null;
}

export interface HomepageData {
  pageTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  h1: string;
  introParagraph: string;
  aboutH2: string;
  faqs: TableFaq[];
}

export const homepageData: HomepageData = {
  pageTitle: 'Mixed Times Table Practice (1–12) | Free Multiplication Practice',
  metaDescription: 'Free mixed times tables practice for multiplication facts 1–12. Answer quick questions, build confidence, and grow your streak.',
  ogTitle: 'Mixed Times Table Practice (1–12)',
  ogDescription: 'Free times tables practice for mixed 1–12 multiplication facts with quick questions to build confidence.',
  h1: 'Mixed Times Table Practice (1–12)',
  introParagraph: 'Practice multiplication facts by answering questions and building a streak.',
  aboutH2: 'About This Multiplication Practice (1–12)',
  faqs: [
    {
      question: 'What is this times tables practice?',
      answer: 'This free online multiplication practice helps students review and memorize multiplication facts from 1 through 12. Questions are mixed across all tables so learners can build fluency and confidence one problem at a time.',
    },
    {
      question: 'Who is this times tables practice for?',
      answer: 'This times tables practice is great for elementary students learning multiplication, and it also helps parents and teachers support practice at home or in the classroom. It can be used for quick warmups, homework support, or extra review.',
    },
    {
      question: 'How should I practice multiplication tables?',
      answer: 'Try to answer each question without guessing, and focus on accuracy first. As recall improves, aim to build a longer streak. Regular short practice sessions are usually more effective than one long session.',
    },
    {
      question: 'Does this multiplication practice work on phones, tablets, and computers?',
      answer: 'Yes. This multiplication tables practice works on desktop and mobile devices in your browser, and you do not need an account. Your best streak is saved locally on your device.',
    },
  ],
};

export const tables: TableData[] = [
  {
    number: 1,
    slug: '1-times-table',
    label: '1 Times Table',
    pageTitle: '1 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 1 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/1-times-table/',
    ogTitle: '1 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 1 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '1 Times Table Practice',
    introParagraph: 'Practice the 1 times table by answering questions and building a streak.',
    aboutH2: 'About This 1 Times Table Practice',
    colors: {
      accent: '#ef4444',
      accentDark: '#dc2626',
      accentSoft: 'rgba(239, 68, 68, 0.14)',
      accentRing: 'rgba(239, 68, 68, 0.28)',
      accentSoftNav: 'rgba(239,68,68,0.09)',
      accentBorderNav: 'rgba(239,68,68,0.35)',
    },
    tips: {
      introParagraph: 'Good news: the 1 times table is the easiest one.',
      bulletPoints: [
        '1 × any number is the same number.',
        'Example: 1 × 9 = 9.',
        'If you know the other number, you already know the answer.',
      ],
      editorialParagraph: 'The 1× table demonstrates the identity property of multiplication — any number times 1 equals itself. This rule extends into algebra and beyond. Since the answer is always the other number, students who understand this principle never need to guess.',
    },
    faqs: [
      {
        question: 'What is 1 times table practice?',
        answer: 'This page provides focused 1 times table practice to help students learn and memorize multiplication facts that include 1. Each question uses the 1 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 1 times table?',
        answer: '1 × any number is the same number. Example: 1 × 9 = 9. If you know the other number, you already know the answer.',
      },
      {
        question: 'Who should practice the 1 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 1 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 1 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 1 times table.',
      },
      {
        question: 'Is this 1 times table practice free?',
        answer: 'Yes. This is a free online 1 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: null,
    nextTable: 2,
  },
  {
    number: 2,
    slug: '2-times-table',
    label: '2 Times Table',
    pageTitle: '2 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 2 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/2-times-table/',
    ogTitle: '2 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 2 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '2 Times Table Practice',
    introParagraph: 'Practice the 2 times table by answering questions and building a streak.',
    aboutH2: 'About This 2 Times Table Practice',
    colors: {
      accent: '#f97316',
      accentDark: '#ea580c',
      accentSoft: 'rgba(249, 115, 22, 0.14)',
      accentRing: 'rgba(249, 115, 22, 0.28)',
      accentSoftNav: 'rgba(249,115,22,0.09)',
      accentBorderNav: 'rgba(249,115,22,0.35)',
    },
    tips: {
      introParagraph: 'The 2 times table is all about doubling.',
      bulletPoints: [
        '2 × a number means "double it".',
        'Example: double 7 is 14, so 2 × 7 = 14.',
        'You can also count by 2s: 2, 4, 6, 8, 10…',
      ],
      editorialParagraph: 'The 2× table is the foundation of doubling, one of the most useful mental math skills. Knowing it well also makes the 4× table (double twice) and 8× table (double three times) much easier. Every multiple of 2 is an even number — if the answer is odd, something has gone wrong.',
    },
    faqs: [
      {
        question: 'What is 2 times table practice?',
        answer: 'This page provides focused 2 times table practice to help students learn and memorize multiplication facts that include 2. Each question uses the 2 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 2 times table?',
        answer: '2 × a number means "double it". Example: double 7 is 14, so 2 × 7 = 14. You can also count by 2s: 2, 4, 6, 8, 10…',
      },
      {
        question: 'Who should practice the 2 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 2 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 2 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 2 times table.',
      },
      {
        question: 'Is this 2 times table practice free?',
        answer: 'Yes. This is a free online 2 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 1,
    nextTable: 3,
  },
  {
    number: 3,
    slug: '3-times-table',
    label: '3 Times Table',
    pageTitle: '3 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 3 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/3-times-table/',
    ogTitle: '3 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 3 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '3 Times Table Practice',
    introParagraph: 'Practice the 3 times table by answering questions and building a streak.',
    aboutH2: 'About This 3 Times Table Practice',
    colors: {
      accent: '#b45309',
      accentDark: '#92400e',
      accentSoft: 'rgba(180, 83, 9, 0.14)',
      accentRing: 'rgba(180, 83, 9, 0.28)',
      accentSoftNav: 'rgba(180,83,9,0.09)',
      accentBorderNav: 'rgba(180,83,9,0.35)',
    },
    tips: {
      introParagraph: 'With the 3 times table, you can count by 3s.',
      bulletPoints: [
        'Count by 3s: 3, 6, 9, 12, 15…',
        'Example: 3, 6, 9, 12 — so 3 × 4 = 12.',
        'Think "three groups of the number".',
      ],
      editorialParagraph: 'There is a handy divisibility rule for the 3× table: if the digits of a number add up to a multiple of 3, that number is divisible by 3. For example, 27: 2 + 7 = 9, which is divisible by 3. This is a useful way to spot multiples of 3 and check your answers quickly.',
    },
    faqs: [
      {
        question: 'What is 3 times table practice?',
        answer: 'This page provides focused 3 times table practice to help students learn and memorize multiplication facts that include 3. Each question uses the 3 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 3 times table?',
        answer: 'Count by 3s: 3, 6, 9, 12, 15… Example: 3, 6, 9, 12 — so 3 × 4 = 12. Think "three groups of the number".',
      },
      {
        question: 'Who should practice the 3 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 3 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 3 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 3 times table.',
      },
      {
        question: 'Is this 3 times table practice free?',
        answer: 'Yes. This is a free online 3 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 2,
    nextTable: 4,
  },
  {
    number: 4,
    slug: '4-times-table',
    label: '4 Times Table',
    pageTitle: '4 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 4 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/4-times-table/',
    ogTitle: '4 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 4 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '4 Times Table Practice',
    introParagraph: 'Practice the 4 times table by answering questions and building a streak.',
    aboutH2: 'About This 4 Times Table Practice',
    colors: {
      accent: '#22c55e',
      accentDark: '#16a34a',
      accentSoft: 'rgba(34, 197, 94, 0.14)',
      accentRing: 'rgba(34, 197, 94, 0.28)',
      accentSoftNav: 'rgba(34,197,94,0.09)',
      accentBorderNav: 'rgba(34,197,94,0.35)',
    },
    tips: {
      introParagraph: 'The 4 times table is double… and double again.',
      bulletPoints: [
        '4 × a number = double it, then double it again.',
        'Example: double 6 is 12, double 12 is 24 — so 4 × 6 = 24.',
        'You can also count by 4s: 4, 8, 12, 16…',
      ],
      editorialParagraph: 'Since 4 = 2 × 2, the 4× table is a natural extension of the 2× table — just double twice. Every multiple of 4 is even, and the last digits follow a repeating pattern: 4, 8, 2, 6, 0. Knowing the 4× table also makes the 8× table (one more doubling step) much easier to learn.',
    },
    faqs: [
      {
        question: 'What is 4 times table practice?',
        answer: 'This page provides focused 4 times table practice to help students learn and memorize multiplication facts that include 4. Each question uses the 4 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 4 times table?',
        answer: '4 × a number = double it, then double it again. Example: double 6 is 12, double 12 is 24 — so 4 × 6 = 24. You can also count by 4s: 4, 8, 12, 16…',
      },
      {
        question: 'Who should practice the 4 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 4 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 4 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 4 times table.',
      },
      {
        question: 'Is this 4 times table practice free?',
        answer: 'Yes. This is a free online 4 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 3,
    nextTable: 5,
  },
  {
    number: 5,
    slug: '5-times-table',
    label: '5 Times Table',
    pageTitle: '5 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 5 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/5-times-table/',
    ogTitle: '5 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 5 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '5 Times Table Practice',
    introParagraph: 'Practice the 5 times table by answering questions and building a streak.',
    aboutH2: 'About This 5 Times Table Practice',
    colors: {
      accent: '#14b8a6',
      accentDark: '#0d9488',
      accentSoft: 'rgba(20, 184, 166, 0.14)',
      accentRing: 'rgba(20, 184, 166, 0.28)',
      accentSoftNav: 'rgba(20,184,166,0.09)',
      accentBorderNav: 'rgba(20,184,166,0.35)',
    },
    tips: {
      introParagraph: 'The 5 times table has an easy pattern.',
      bulletPoints: [
        'Answers usually end in 0 or 5.',
        'Count by 5s: 5, 10, 15, 20, 25…',
        'Example: 5, 10, 15, 20 — so 5 × 4 = 20.',
      ],
      editorialParagraph: 'The 5× table is closely linked to telling time — the minute marks on a clock are multiples of 5. Since 5 is exactly half of 10, every 5× answer is also exactly half the corresponding 10× answer. For example, 5 × 8 = 40, and 10 × 8 = 80.',
    },
    faqs: [
      {
        question: 'What is 5 times table practice?',
        answer: 'This page provides focused 5 times table practice to help students learn and memorize multiplication facts that include 5. Each question uses the 5 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 5 times table?',
        answer: 'Answers usually end in 0 or 5. Count by 5s: 5, 10, 15, 20, 25… Example: 5, 10, 15, 20 — so 5 × 4 = 20.',
      },
      {
        question: 'Who should practice the 5 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 5 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 5 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 5 times table.',
      },
      {
        question: 'Is this 5 times table practice free?',
        answer: 'Yes. This is a free online 5 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 4,
    nextTable: 6,
  },
  {
    number: 6,
    slug: '6-times-table',
    label: '6 Times Table',
    pageTitle: '6 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 6 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/6-times-table/',
    ogTitle: '6 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 6 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '6 Times Table Practice',
    introParagraph: 'Practice the 6 times table by answering questions and building a streak.',
    aboutH2: 'About This 6 Times Table Practice',
    colors: {
      accent: '#0ea5e9',
      accentDark: '#0284c7',
      accentSoft: 'rgba(14, 165, 233, 0.14)',
      accentRing: 'rgba(14, 165, 233, 0.28)',
      accentSoftNav: 'rgba(14,165,233,0.09)',
      accentBorderNav: 'rgba(14,165,233,0.35)',
    },
    tips: {
      introParagraph: 'The 6 times table is like the 3 times table, but doubled.',
      bulletPoints: [
        'If you know 3 × a number, you can double it to get 6 × a number.',
        'Example: 3 × 4 = 12, double 12 is 24 — so 6 × 4 = 24.',
        'Count by 6s: 6, 12, 18, 24, 30…',
      ],
      editorialParagraph: 'The 6× table has a neat pattern when you multiply 6 by an even number: the last digit of the answer matches the even number itself. For example, 6 × 2 = 12, 6 × 4 = 24, 6 × 6 = 36, 6 × 8 = 48. If you already know the 3× table, simply doubling those answers gives you the full 6× table.',
    },
    faqs: [
      {
        question: 'What is 6 times table practice?',
        answer: 'This page provides focused 6 times table practice to help students learn and memorize multiplication facts that include 6. Each question uses the 6 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 6 times table?',
        answer: 'If you know 3 × a number, you can double it to get 6 × a number. Example: 3 × 4 = 12, double 12 is 24 — so 6 × 4 = 24. Count by 6s: 6, 12, 18, 24, 30…',
      },
      {
        question: 'Who should practice the 6 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 6 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 6 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 6 times table.',
      },
      {
        question: 'Is this 6 times table practice free?',
        answer: 'Yes. This is a free online 6 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 5,
    nextTable: 7,
  },
  {
    number: 7,
    slug: '7-times-table',
    label: '7 Times Table',
    pageTitle: '7 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 7 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/7-times-table/',
    ogTitle: '7 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 7 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '7 Times Table Practice',
    introParagraph: 'Practice the 7 times table by answering questions and building a streak.',
    aboutH2: 'About This 7 Times Table Practice',
    colors: {
      accent: '#6366f1',
      accentDark: '#4f46e5',
      accentSoft: 'rgba(99, 102, 241, 0.14)',
      accentRing: 'rgba(99, 102, 241, 0.28)',
      accentSoftNav: 'rgba(99,102,241,0.09)',
      accentBorderNav: 'rgba(99,102,241,0.35)',
    },
    tips: {
      introParagraph: 'The 7 times table can feel tricky — practice helps a lot.',
      bulletPoints: [
        'Try to remember a few "anchor" facts like 7 × 5 = 35 and 7 × 10 = 70.',
        'Example: 7 × 6 is one more 7 than 7 × 5, so 35 + 7 = 42.',
        'Count by 7s: 7, 14, 21, 28, 35…',
      ],
      editorialParagraph: 'The 7× table is widely considered the hardest because 7 has fewer obvious patterns. The best approach is to memorise a small set of key facts — 7 × 7 = 49 and 7 × 8 = 56 are the two that trip people up most. From any anchor fact, you can count up or down by 7 to reach any nearby answer.',
    },
    faqs: [
      {
        question: 'What is 7 times table practice?',
        answer: 'This page provides focused 7 times table practice to help students learn and memorize multiplication facts that include 7. Each question uses the 7 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 7 times table?',
        answer: 'Try to remember a few anchor facts like 7 × 5 = 35 and 7 × 10 = 70. Example: 7 × 6 is one more 7 than 7 × 5, so 35 + 7 = 42. Count by 7s: 7, 14, 21, 28, 35…',
      },
      {
        question: 'Who should practice the 7 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 7 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 7 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 7 times table.',
      },
      {
        question: 'Is this 7 times table practice free?',
        answer: 'Yes. This is a free online 7 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 6,
    nextTable: 8,
  },
  {
    number: 8,
    slug: '8-times-table',
    label: '8 Times Table',
    pageTitle: '8 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 8 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/8-times-table/',
    ogTitle: '8 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 8 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '8 Times Table Practice',
    introParagraph: 'Practice the 8 times table by answering questions and building a streak.',
    aboutH2: 'About This 8 Times Table Practice',
    colors: {
      accent: '#8b5cf6',
      accentDark: '#7c3aed',
      accentSoft: 'rgba(139, 92, 246, 0.14)',
      accentRing: 'rgba(139, 92, 246, 0.28)',
      accentSoftNav: 'rgba(139,92,246,0.09)',
      accentBorderNav: 'rgba(139,92,246,0.35)',
    },
    tips: {
      introParagraph: 'The 8 times table is all about doubling.',
      bulletPoints: [
        'To do 8 × a number, double the number three times.',
        'Example: double 3 is 6, double 6 is 12, double 12 is 24 — so 8 × 3 = 24.',
        'Count by 8s: 8, 16, 24, 32, 40…',
      ],
      editorialParagraph: 'Since 8 = 2 × 2 × 2, the 8× table is the third step in the doubling chain (2×, 4×, 8×). An alternative strategy is to use 10× minus 2×: for example, 8 × 7 = 70 − 14 = 56. All multiples of 8 are even, and their last digits follow the pattern 8, 6, 4, 2, 0.',
    },
    faqs: [
      {
        question: 'What is 8 times table practice?',
        answer: 'This page provides focused 8 times table practice to help students learn and memorize multiplication facts that include 8. Each question uses the 8 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 8 times table?',
        answer: 'To do 8 × a number, double the number three times. Example: double 3 is 6, double 6 is 12, double 12 is 24 — so 8 × 3 = 24. Count by 8s: 8, 16, 24, 32, 40…',
      },
      {
        question: 'Who should practice the 8 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 8 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 8 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 8 times table.',
      },
      {
        question: 'Is this 8 times table practice free?',
        answer: 'Yes. This is a free online 8 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 7,
    nextTable: 9,
  },
  {
    number: 9,
    slug: '9-times-table',
    label: '9 Times Table',
    pageTitle: '9 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 9 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/9-times-table/',
    ogTitle: '9 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 9 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '9 Times Table Practice',
    introParagraph: 'Practice the 9 times table by answering questions and building a streak.',
    aboutH2: 'About This 9 Times Table Practice',
    colors: {
      accent: '#d946ef',
      accentDark: '#c026d3',
      accentSoft: 'rgba(217, 70, 239, 0.14)',
      accentRing: 'rgba(217, 70, 239, 0.28)',
      accentSoftNav: 'rgba(217,70,239,0.09)',
      accentBorderNav: 'rgba(217,70,239,0.35)',
    },
    tips: {
      introParagraph: 'The 9 times table has a handy trick.',
      bulletPoints: [
        'To do 9 × a number, try 10 × the number and then subtract the number once.',
        'Example: 10 × 7 = 70, 70 − 7 = 63 — so 9 × 7 = 63.',
        'Count by 9s: 9, 18, 27, 36…',
      ],
      editorialParagraph: 'The 9× table has one of the most satisfying patterns in multiplication: the digits of every answer from 9 × 1 through 9 × 10 always add up to 9. For example, 9 × 4 = 36 and 3 + 6 = 9. There is also a finger trick: hold up 10 fingers, fold down the Nth finger, and the fingers to the left give the tens digit while the fingers to the right give the units digit.',
    },
    faqs: [
      {
        question: 'What is 9 times table practice?',
        answer: 'This page provides focused 9 times table practice to help students learn and memorize multiplication facts that include 9. Each question uses the 9 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 9 times table?',
        answer: 'To do 9 × a number, try 10 × the number and then subtract the number once. Example: 10 × 7 = 70, 70 − 7 = 63 — so 9 × 7 = 63. Count by 9s: 9, 18, 27, 36…',
      },
      {
        question: 'Who should practice the 9 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 9 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 9 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 9 times table.',
      },
      {
        question: 'Is this 9 times table practice free?',
        answer: 'Yes. This is a free online 9 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 8,
    nextTable: 10,
  },
  {
    number: 10,
    slug: '10-times-table',
    label: '10 Times Table',
    pageTitle: '10 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 10 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/10-times-table/',
    ogTitle: '10 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 10 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '10 Times Table Practice',
    introParagraph: 'Practice the 10 times table by answering questions and building a streak.',
    aboutH2: 'About This 10 Times Table Practice',
    colors: {
      accent: '#ec4899',
      accentDark: '#db2777',
      accentSoft: 'rgba(236, 72, 153, 0.14)',
      accentRing: 'rgba(236, 72, 153, 0.28)',
      accentSoftNav: 'rgba(236,72,153,0.09)',
      accentBorderNav: 'rgba(236,72,153,0.35)',
    },
    tips: {
      introParagraph: 'The 10 times table is very fast.',
      bulletPoints: [
        '10 × a number ends with a 0.',
        'Example: 10 × 6 = 60.',
        'Count by 10s: 10, 20, 30, 40…',
      ],
      editorialParagraph: 'The 10× table is the simplest in mathematics — just add a zero. This works because our number system is base-10, so multiplying by 10 shifts every digit one place value higher. A strong grasp of the 10× table is the foundation of estimation and mental math across all other tables.',
    },
    faqs: [
      {
        question: 'What is 10 times table practice?',
        answer: 'This page provides focused 10 times table practice to help students learn and memorize multiplication facts that include 10. Each question uses the 10 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 10 times table?',
        answer: '10 × a number ends with a 0. Example: 10 × 6 = 60. Count by 10s: 10, 20, 30, 40…',
      },
      {
        question: 'Who should practice the 10 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 10 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 10 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 10 times table.',
      },
      {
        question: 'Is this 10 times table practice free?',
        answer: 'Yes. This is a free online 10 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 9,
    nextTable: 11,
  },
  {
    number: 11,
    slug: '11-times-table',
    label: '11 Times Table',
    pageTitle: '11 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 11 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/11-times-table/',
    ogTitle: '11 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 11 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '11 Times Table Practice',
    introParagraph: 'Practice the 11 times table by answering questions and building a streak.',
    aboutH2: 'About This 11 Times Table Practice',
    colors: {
      accent: '#a855f7',
      accentDark: '#9333ea',
      accentSoft: 'rgba(168, 85, 247, 0.14)',
      accentRing: 'rgba(168, 85, 247, 0.28)',
      accentSoftNav: 'rgba(168,85,247,0.09)',
      accentBorderNav: 'rgba(168,85,247,0.35)',
    },
    tips: {
      introParagraph: 'The 11 times table has a fun pattern for smaller numbers.',
      bulletPoints: [
        'For 11 × 1 to 11 × 9, the digits repeat: 11 × 4 = 44.',
        'Example: 11 × 7 = 77.',
        'Keep practicing for bigger ones like 11 × 12.',
      ],
      editorialParagraph: 'For 11 × 1 through 11 × 9, the answer is simply the digit repeated twice: 11 × 3 = 33, 11 × 7 = 77. For 11 × 10 through 11 × 12, think of it as 10× plus 1× more: 11 × 12 = 120 + 12 = 132. The repeating-digit shortcut makes the 11× table one of the fastest to memorise.',
    },
    faqs: [
      {
        question: 'What is 11 times table practice?',
        answer: 'This page provides focused 11 times table practice to help students learn and memorize multiplication facts that include 11. Each question uses the 11 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 11 times table?',
        answer: 'For 11 × 1 to 11 × 9, the digits repeat: 11 × 4 = 44. Example: 11 × 7 = 77. Keep practicing for bigger ones like 11 × 12.',
      },
      {
        question: 'Who should practice the 11 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 11 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 11 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 11 times table.',
      },
      {
        question: 'Is this 11 times table practice free?',
        answer: 'Yes. This is a free online 11 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 10,
    nextTable: 12,
  },
  {
    number: 12,
    slug: '12-times-table',
    label: '12 Times Table',
    pageTitle: '12 Times Table Practice | Free Chart & Tips',
    metaDescription: 'Free 12 times table practice with an easy chart and quick questions to build confidence and streaks.',
    canonicalPath: '/12-times-table/',
    ogTitle: '12 Times Table Practice | Free Chart & Tips',
    ogDescription: 'Free 12 times table practice with an easy chart and quick questions to build confidence and streaks.',
    h1: '12 Times Table Practice',
    introParagraph: 'Practice the 12 times table by answering questions and building a streak.',
    aboutH2: 'About This 12 Times Table Practice',
    colors: {
      accent: '#84cc16',
      accentDark: '#65a30d',
      accentSoft: 'rgba(132, 204, 22, 0.14)',
      accentRing: 'rgba(132, 204, 22, 0.28)',
      accentSoftNav: 'rgba(132,204,22,0.09)',
      accentBorderNav: 'rgba(132,204,22,0.35)',
    },
    tips: {
      introParagraph: 'The 12 times table can be broken into easier pieces.',
      bulletPoints: [
        'Think of 12 × a number as 10 × plus 2 ×.',
        'Example: 10 × 6 = 60 and 2 × 6 = 12, 60 + 12 = 72 — so 12 × 6 = 72.',
        'Count by 12s: 12, 24, 36, 48…',
      ],
      editorialParagraph: 'The 12× table appears constantly in everyday life — 12 months in a year, 12 items in a dozen, 12 hours on a clock face. Breaking 12 into 10 + 2 makes any question manageable: multiply by 10 (add a zero), multiply by 2 (double), then add the results together.',
    },
    faqs: [
      {
        question: 'What is 12 times table practice?',
        answer: 'This page provides focused 12 times table practice to help students learn and memorize multiplication facts that include 12. Each question uses the 12 times table so learners can improve recall through repeated practice.',
      },
      {
        question: 'What are some tips for learning the 12 times table?',
        answer: 'Think of 12 × a number as 10 × plus 2 ×. Example: 10 × 6 = 60 and 2 × 6 = 12, 60 + 12 = 72 — so 12 × 6 = 72. Count by 12s: 12, 24, 36, 48…',
      },
      {
        question: 'Who should practice the 12 times table?',
        answer: 'This practice is helpful for elementary students learning multiplication, as well as anyone who wants extra review of the 12 times table. Parents and teachers can use it for quick drills, warmups, or homework help.',
      },
      {
        question: 'How do I get better at the 12 times table?',
        answer: 'Practice a little each day and focus on accuracy first. When you miss a question, take a moment to learn the correct fact and try again. Building a streak can help you stay motivated while you practice the 12 times table.',
      },
      {
        question: 'Is this 12 times table practice free?',
        answer: 'Yes. This is a free online 12 times table practice tool that runs in your browser. Your best streak is saved locally on your device.',
      },
    ],
    prevTable: 11,
    nextTable: null,
  },
];

export function getTableByNumber(n: number): TableData | undefined {
  return tables.find((t) => t.number === n);
}

export function getTableBySlug(slug: string): TableData | undefined {
  return tables.find((t) => t.slug === slug);
}
