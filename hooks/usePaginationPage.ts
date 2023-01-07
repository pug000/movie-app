import { ChangeEvent, useCallback, useState } from 'react';

const usePaginationPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const changePaginationPageOnClick = useCallback(
    (_event: ChangeEvent<unknown>, value: number) => setCurrentPage(value),
    []
  );

  return {
    currentPage,
    totalPages,
    setTotalPages,
    changePaginationPageOnClick,
  };
};

export default usePaginationPage;
