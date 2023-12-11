export const createCacheKey = (cacheKey: string, params: object = {}) => {
  const array: string[] = [cacheKey];
  (Object.entries(params) ?? []).forEach(([key, value]) => {
    array.push(`${key}-${value}`);
  });
  return array;
};
