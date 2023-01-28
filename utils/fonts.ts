import { Montserrat, Open_Sans } from '@next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['500', '700'],
  style: 'normal',
  preload: true,
});

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: '400',
  style: 'normal',
  preload: true,
});

export { montserrat, openSans };
