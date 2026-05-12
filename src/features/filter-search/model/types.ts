import type { NameParamsType } from '@/features/update-url/model/typeParams';

export type FilterSearchProps = {
  text: string | null | undefined;
  updateSearch: (name: NameParamsType, value: string) => void;
  isCollection?: boolean;
};
