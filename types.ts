export interface Question {
  id: number;
  text: string;
}

export interface QuizResult {
  minScore: number;
  maxScore: number;
  title: string;
  description: string;
}

export enum QuizStep {
  START = 'START',
  QUIZ = 'QUIZ',
  RESULT = 'RESULT',
}
