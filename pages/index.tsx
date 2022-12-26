import { memo } from 'react';
import Link from 'next/link';
import { v4 } from 'uuid';

import {
  getMoviePosters,
  getMoviePostersSelector,
  getRunningQueriesThunk,
  useGetMoviePostersQuery,
} from 'redux/services/moviesApiSlice';
import { wrapper } from 'redux/store';

import useAppSelector from 'hooks/useAppSelector';

import { imageUrl } from 'utils/constants';
import { loadImage } from 'utils/functions';

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

function Home() {
  const moviePosters = useAppSelector(getMoviePostersSelector);
  useGetMoviePostersQuery(null);

  return (
    <Layout title="Home">
      <StyledPosterSection>
        <StyledWrapper>
          <StyledContainer>
            {moviePosters.map((chunk) => (
              <StyledStack direction="row" key={v4()}>
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

export const getServerSideProps = wrapper.getServerSideProps(
  ({ dispatch }) =>
    async () => {
      dispatch(getMoviePosters.initiate(null));

      await Promise.all(dispatch(getRunningQueriesThunk()));

      return {
        props: {},
      };
    }
);
