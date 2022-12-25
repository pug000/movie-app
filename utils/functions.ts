import { Methods } from 'ts/enums';

const splitArray = <T>(array: T[], size: number): T[][] => {
  if (!array.length) {
    return [];
  }

  const head = array.slice(0, size);
  const tail = array.slice(size);

  return [head, ...splitArray(tail, size)];
};

const addFetchOptions = (
  url: string,
  params: Record<string, string | number> = {},
  method: string = Methods.get
) => ({
  url,
  method,
  params: {
    ...params,
    api_key: process.env.API_KEY,
  },
});

export { splitArray, addFetchOptions };
