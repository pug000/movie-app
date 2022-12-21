import Head from 'next/head';

interface HeadTitleProps {
  title: string;
}

function Meta({ title }: HeadTitleProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}

export default Meta;
