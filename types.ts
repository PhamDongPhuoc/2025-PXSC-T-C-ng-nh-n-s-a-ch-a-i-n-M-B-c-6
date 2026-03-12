export enum GameState {
  Landing,
  Quiz,
  Results,
}

export interface UserData {
  name: string;
  email: string;
}

export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Answer {
  selectedOption: number | null;
}

export type QuizPart = '1' | '2' | '3' | '4' | '5' | '6';
