/* eslint-disable react-hooks/exhaustive-deps */
import { ActionCreatorsMapObject, bindActionCreators } from '@reduxjs/toolkit';
import { useMemo } from 'react';
import { useDispatch } from 'react-redux';

const useActions = <A extends ActionCreatorsMapObject>(actions: A) => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(actions, dispatch), []);
};

export default useActions;
