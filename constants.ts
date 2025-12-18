import { Question, QuizResult } from './types';

export const QUESTIONS: Question[] = [
  { id: 1, text: "Do you often feel awkward or 'stupid' when you try to sit still and meditate?" },
  { id: 2, text: "Does closing your eyes for more than a few minutes make you feel uncomfortable?" },
  { id: 3, text: "Do your thoughts seem to speed up immediately when you try to be quiet?" },
  { id: 4, text: "Do you feel overstimulated by the pressure to 'clear your mind'?" },
  { id: 5, text: "Are you afraid of 'doing it wrong' when following traditional meditation instructions?" },
  { id: 6, text: "Do you wish there was a way to meditate with your eyes open?" },
  { id: 7, text: "Do you crave a gentle, visual way to find calm instead of forced mental effort?" },
];

export const RESULTS: QuizResult[] = [
  {
    minScore: 6,
    maxScore: 7,
    title: "The Ready-to-Calm Nervous System",
    description: "You are fully ready to meditate, you just need a method that does not require closing eyes or silence. Slow Art can bring your body into a calm, alpha-state effortlessly. The IKONO app is designed for you."
  },
  {
    minScore: 3,
    maxScore: 5,
    title: "The Gentle Beginner",
    description: "Traditional meditation feels hard because your system needs gentle focus, not rules. Slow Art offers a simple, eye-open pathway into meditation. The IKONO app will help you start effortlessly."
  },
  {
    minScore: 0,
    maxScore: 2,
    title: "The Calm-but-Curious Explorer",
    description: "You are naturally calm or open to meditation. Slow Art can deepen your awareness and offer micro-moments of restoration. The IKONO app will enrich your calm practice."
  }
];