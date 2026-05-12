import type { Specialization } from '@/shared/model/type';

type URLQuestionParams = 'specializationId' | 'skills' | 'complexity' | 'rate' | 'page' | 'title';

export type GetQuestionParams = Partial<Record<URLQuestionParams, string>>;

export type QuestionBasa = {
  id: number;
  title: string;
};

export interface QuestionItemProps extends QuestionBasa {
  rate: number;
  complexity: number;
  shortAnswer: string;
  questionSpecializations?: Specialization[];
  keywords?: string[];
}
