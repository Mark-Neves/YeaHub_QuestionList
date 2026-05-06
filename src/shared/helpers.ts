import type { Complexity, FetchState, Rate, Skill, Specialization } from './model/type';

export const SPECIALIZATION_LIMIT = 28;
export const SPECIALIZATION_PAGE = 1;
export const DEFAULT_SPECIALIZATION_ID = 11;
export const SINGLE_FIELDS = new Set(['specializationId', 'title', 'page']);

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
  if (!data) return undefined;
  return data
    .filter((value) => value.createdBy === null && !/^[A-Z]+$/.test(value.title))
    .map((value) => ({
      id: value.id,
      title: value.title,
      slug: value.slug,
      description: value.description,
    }));
};

export const parseIDs = (name: string): number[] => {
  return name.split(',').map((el) => Number(el));
};

export const normalizeDataFilter = <T>(body: T): FetchState<T> => {
  return { data: body, isLoading: false, error: undefined };
};

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
