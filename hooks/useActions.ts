import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import movieSlice from 'redux/slices/movieSlice';

const allActions = {
  ...movieSlice.actions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

export default useActions;
