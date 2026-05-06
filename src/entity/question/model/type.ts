import type { Specialization, URLParams } from '@/shared/model/type';

export type GetQuestionParams = Partial<Record<URLParams, string>>;

export type QuestionSectionProps = {
  filters: GetQuestionParams;
  filterOpen: () => void;
};

export type QuestionBasa = {
  id: number;
  title: string;
};

export interface QuestionItemProps extends QuestionBasa {
  rate: number;
  complexity: number;
  shortAnswer: string;
  questionSpecializations?: Specialization[];
}
