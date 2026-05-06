import type { Skill } from '@/shared/model/type';

type AnswerBasa = {
  id: number;
  title: string;
};

export interface AnswerDetails extends AnswerBasa {
  rate: number;
  complexity: number;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  questionSkills: Skill[];
  keywords: string[];
}

export interface AnswerProps {
  answer: string;
}

export type AnswerWithAction = {
  answer: AnswerDetails;
  onClick: () => void;
};
