import { render } from '@testing-library/react';

import Meta from 'components/Meta/Meta';

jest.mock('next/head', () => {
  return {
    __esModule: true,
    default: ({ children }: { children: React.ReactNode }) => {
      return <>{children}</>;
    },
  };
});

const mockTitle = 'test';

describe('Meta component', () => {
  test('check page title', () => {
    render(<Meta title={mockTitle} />, {
      container: document.head,
    });

    expect(document.title).toBe(mockTitle);
  });
});
