import type { ResetFilter } from './filteresTypes';
import type { ApiResponse, FetchState, Skill, Specialization } from './apiTypes.ts';

export interface QuestionBasa {
  id: number;
  title: string;
}
export interface QuestionListItem extends QuestionBasa {
  rate: number;
  complexity: number;
  shortAnswer: string;
  questionSpecializations?: Specialization[];
}
export type QuestionInfo = Pick<QuestionListItem, 'id' | 'rate' | 'complexity'>;

export interface QuestionDetails extends QuestionBasa {
  rate: number;
  complexity: number;
  description: string;
  shortAnswer: string;
  longAnswer: string;
  questionSkills: Skill[];
  keywords: string[];
}
export interface QuestionFilter {
  specializationID: number[];
  skillsID: number[];
  complexity: number[];
  rate: number[];
  title: string;
}

export interface QuestionSectionProps extends ResetFilter {
  questionsState: FetchState<ApiResponse<QuestionListItem[]>>;
  titleQuestions: string;
  filterOpen: () => void;
  updatePage: (pageNum: number) => void;
  page: number;
}

export interface AnswerProps {
  answer: string;
}
