import type { GetPaginationRangeReturn } from '../types/paginationTypes';
import type {
  Complexity,
  LinkList,
  Rate,
  ResponseResult,
  Skill,
  Specialization,
} from '../types/apiTypes.ts';

export const DEFAULT_SPECIALIZATION_ID = 11;
export const SPECIALIZATION_PAGE = 1;
export const SPECIALIZATION_LIMIT = 28;
export const SINGLE_FIELDS = new Set(['specializationID', 'title', 'page']);

export const normalizeParapm = (name: string, params: URLSearchParams): number[] => {
  return (
    params
      .get(name)
      ?.split(',')
      .map(Number)
      .filter((n: number) => !Number.isNaN(n) && n !== 0) || []
  );
};
export const toggleMultiParams = (arr: number[], itemToggle: number[]): string => {
  const result = new Set(arr);
  itemToggle.forEach((el) => {
    if (result.has(el)) result.delete(el);
    else {
      result.add(el);
    }
  });
  return [...result].join(',');
};

export const normalizeData = <T extends Specialization | Skill>(data: T[]) => {
  if (!data) return [];
  return data
    .filter((value) => value.createdBy === null && !/^[A-Z]+$/.test(value.title))
    .map((value) => ({
      id: value.id,
      title: value.title,
      slug: value.slug,
      description: value.description,
    }));
};

export const parseIDs = (name: string | null): number[] => {
  return name ? name.split(',').map((el) => Number(el)) : [];
};

export const normalizeDataFilter = <T>(body: T): ResponseResult<T> => {
  return { data: body, isLoading: false, error: null };
};

export const navList: LinkList[] = [
  { name: 'База вопросов', path: '/questions' },
  { name: 'Тренажёр', path: '/1' },
  { name: 'Материалы', path: '/2' },
  { name: 'Навыки (hh)', path: '/3' },
];
export const footerLinkList: LinkList[] = [
  { name: 'Документы', path: '/' },
  { name: 'Медиа', path: '/' },
  { name: 'Figma', path: '/', logo: '/SocialMedia/Figma.png' },
  { name: 'GitHub', path: '/', logo: '/SocialMedia/Github_white.png' },
  { name: 'Youtube', path: '/', logo: '/SocialMedia/Youtube.svg' },
  { name: 'TikTok', path: '/', logo: '/SocialMedia/tiktok.png' },
  { name: 'Telegtam', path: '/', logo: '/SocialMedia/Telegram.png' },
];

export const complexity: Complexity[] = [
  { title: '1-3', level: [1, 2, 3] },
  { title: '4-6', level: [4, 5, 6] },
  { title: '7-8', level: [7, 8] },
  { title: '9-10', level: [9, 10] },
];

export const rate: Rate[] = [
  { title: '1', level: 1 },
  { title: '2', level: 2 },
  { title: '3', level: 3 },
  { title: '4', level: 4 },
  { title: '5', level: 5 },
];

export const questionDitalies: string[] = ['Подробнее'];

const paginationArray = (length: number, start: number): number[] =>
  Array.from({ length: length }, (_, i) => start + i);

export const getPaginationRange = (page: number, total: number): GetPaginationRangeReturn[] => {
  const currentRange = 2;
  const result: GetPaginationRangeReturn[] = [1];
  if (total === 1) return result;
  else if (total <= currentRange * 2 + 1)
    result.push(...paginationArray(total - currentRange, currentRange), total);
  else if (page < currentRange * 2 + 1) {
    result.push(...paginationArray(currentRange * 2 + 1, currentRange), '...', total);
  } else if (page + currentRange > total - currentRange + 1) {
    result.push('...', ...paginationArray(currentRange * 2 + 1, total - currentRange * 2));
  } else {
    result.push('...', ...paginationArray(currentRange * 2 + 1, page - currentRange), '...', total);
  }
  return result;
};
