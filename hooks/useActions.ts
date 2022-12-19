import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

import testSlice from 'redux/slices/testSlice';

const allActions = {
  ...testSlice.actions,
};

const useActions = () => {
  const dispatch = useDispatch();

  return bindActionCreators(allActions, dispatch);
};

export default useActions;
