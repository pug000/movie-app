import { Router } from 'next/router';
import { useCallback, useEffect, useState } from 'react';

const usePageLoading = () => {
  const [isPageLoading, setPageLoading] = useState(false);

  const routeEventStart = useCallback(() => {
    setPageLoading(true);
  }, []);

  const routeEventEnd = useCallback(() => {
    setPageLoading(false);
  }, []);

  useEffect(() => {
    Router.events.on('routeChangeStart', routeEventStart);
    Router.events.on('routeChangeComplete', routeEventEnd);
    Router.events.on('routeChangeError', routeEventEnd);

    return () => {
      Router.events.on('routeChangeStart', routeEventStart);
      Router.events.on('routeChangeComplete', routeEventEnd);
      Router.events.on('routeChangeError', routeEventEnd);
    };
  }, [routeEventStart, routeEventEnd]);

  return { isPageLoading };
};

export default usePageLoading;
