import type { Access, Complexity, Rate } from '../model/type';

export const SPECIALIZATION_LIMIT = 28;
export const SPECIALIZATION_PAGE = 1;
export const DEFAULT_SPECIALIZATION_ID = 11;

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
export const access: Access[] = [
  { title: 'Для участников', level: 'true' },
  { title: 'Для всех', level: 'false' },
];
