import type { ImageLoaderProps } from 'next/image';
import { Methods } from 'ts/enums';
import { imageUrl } from './constants';

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

const getImage = (
  image: string | null,
  width: string,
  placeholderWidth = 200,
  placeholderHeight = 300
) =>
  image
    ? `${imageUrl}${width}${image}`
    : `https://via.placeholder.com/${placeholderWidth}x${placeholderHeight}`;

const loadImage = ({ src, width, quality = 75 }: ImageLoaderProps) =>
  `${src}?w=${width}px&q=${quality}`;

export { splitArray, addFetchOptions, getImage, loadImage };
