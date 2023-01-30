/* eslint-disable @typescript-eslint/no-var-requires */
import type { NextRouter } from 'next/router';

const mockUseNextRouter = jest.spyOn(require('next/router'), 'useRouter');

const createMockRouter = (overrides: Partial<NextRouter> = {}): NextRouter => ({
  basePath: '',
  pathname: '/',
  route: '/',
  query: {},
  asPath: '/',
  back: jest.fn(),
  beforePopState: jest.fn(),
  prefetch: jest.fn(),
  push: jest.fn(),
  reload: jest.fn(),
  replace: jest.fn(),
  forward: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: false,
  isReady: true,
  locale: undefined,
  locales: undefined,
  domainLocales: undefined,
  defaultLocale: undefined,
  isPreview: false,
  ...overrides,
});

const mockNextRouter = (overrides: Partial<NextRouter>) => {
  const mockRouter = createMockRouter(overrides);
  mockUseNextRouter.mockReturnValue(mockRouter);
  return mockRouter;
};

export default mockNextRouter;
