import type { GetPaginationRangeReturn } from './types';
const SIBLING_COUNT = 2;

const paginationArray = (length: number, start: number): number[] =>
  Array.from({ length: length }, (_, i) => start + i);

export const getPaginationRange = (page: number, total: number): GetPaginationRangeReturn[] => {
  const currentRange = SIBLING_COUNT;
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
