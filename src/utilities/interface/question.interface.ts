import { Answer } from './answer.interface';

export interface Question {
  id: number;
  question: string;
  multiSelect: boolean;
  critical: boolean;
  questionOrder: number;
  answers: Answer[];
}
