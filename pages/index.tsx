/* eslint-disable react/no-array-index-key */
import { memo } from 'react';
import { ImageLoaderProps } from 'next/image';
import Link from 'next/link';

import {
  getMoviePosters,
  getRunningQueriesThunk,
  useGetMoviePostersQuery,
} from 'redux/services/moviesApiSlice';
import { wrapper } from 'redux/store';

import imageUrl from 'utils/constants';

import Layout from 'components/Layout/Layout';

import {
  StyledPosterSection,
  StyledWrapper,
  StyledContainer,
  StyledStack,
  ImageWrapper,
  StyledImage,
  PosterBackground,
  StyledTitleContainer,
  Title,
  StyledButton,
} from './Home.style';

const loadImage = ({ src, width, quality = 75 }: ImageLoaderProps) =>
  `${src}?w=${width}px&q=${quality}`;

function Home() {
  const { data: moviePosters } = useGetMoviePostersQuery(null);

  return (
    <Layout title="Home">
      <StyledPosterSection>
        <StyledWrapper>
          <StyledContainer>
            {moviePosters &&
              moviePosters.map((chunk, index) => (
                <StyledStack direction="row" key={index}>
                  {chunk.map(
                    ({ id, poster_path, backdrop_path, title, original_title }) => (
                      <ImageWrapper key={id}>
                        <StyledImage
                          loader={loadImage}
                          src={`${imageUrl}w500${poster_path ?? backdrop_path}`}
                          priority
                          alt={title ?? original_title}
                          width={0}
                          height={0}
                        />
                      </ImageWrapper>
                    )
                  )}
                </StyledStack>
              ))}
            <PosterBackground />
          </StyledContainer>
          <StyledTitleContainer>
            <Title variant="h1">Movie App</Title>
            <StyledButton
              variant="contained"
              size="large"
              LinkComponent={Link}
              href="/main"
            >
              Enter
            </StyledButton>
          </StyledTitleContainer>
        </StyledWrapper>
      </StyledPosterSection>
    </Layout>
  );
}

export default memo(Home);

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  const { isError } = await store.dispatch(getMoviePosters.initiate(null));

  await Promise.all(store.dispatch(getRunningQueriesThunk()));

  if (isError) {
    return {
      notFound: true,
    };
  }

  return {
    props: {},
  };
});
