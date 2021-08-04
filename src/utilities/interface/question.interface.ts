import { CheckboxValueType } from 'antd/lib/checkbox/Group';
import { Answer } from './answer.interface';

export interface Question {
  id: number;
  question: string;
  multiSelect: boolean;
  critical: boolean;
  questionOrder: number;
  answers: Answer[];
}

export interface QResponse {
  questionId: number;
  answers: CheckboxValueType[];
}
