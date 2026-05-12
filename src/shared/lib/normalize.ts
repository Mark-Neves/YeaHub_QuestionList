import type { FetchState, Skill, Specialization } from '../model/type';

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

export const parseIDs = (name: string): string[] => {
  return name ? name?.split(',').map((el) => el) : [];
};

export const normalizeDataFilter = <T>(body: T): FetchState<T> => {
  return { data: body, isLoading: false, error: undefined };
};
