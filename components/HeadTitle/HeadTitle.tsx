import Head from 'next/head';

interface HeadTitleProps {
  title: string;
}

function HeadTitle({ title }: HeadTitleProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default HeadTitle;
