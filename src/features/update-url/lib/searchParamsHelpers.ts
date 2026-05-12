import type { NameParamsType } from '../model/typeParams';

export const SINGLE_FIELDS = new Set([
  'specializationId',
  'title',
  'page',
  'isFree',
  'titleOrDescriptionSearch',
]);

export type Params = Record<string, string | undefined | null>;

export const toggleParams = (
  current: Params,
  nameParams: NameParamsType,
  value: string,
): Params => {
  const result = { ...current };
  if (nameParams === 'specializationId') {
    return { [nameParams]: value };
  }
  if (SINGLE_FIELDS.has(nameParams)) {
    result[nameParams] = value;
  } else {
    if (typeof result[nameParams] === 'string') {
      const currentParam = new Set(result[nameParams].split(','));
      const newParam = value.split(',');

      newParam.forEach((el) => {
        if (currentParam.has(el)) {
          currentParam.delete(el);
        } else currentParam.add(el);
      });
      result[nameParams] = [...currentParam].join(',');
    } else {
      result[nameParams] = value;
    }
  }
  return result;
};

export const normalizeParams = (params: Params) => {
  return Object.fromEntries(
    Object.entries({ ...params, page: '1' }).filter(([, value]) => {
      if (value === undefined) return;
      if (value === null) return;
      if (value === '') return;

      return true;
    }),
  );
};
