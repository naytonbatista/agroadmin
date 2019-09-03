import { combineReducers } from 'redux';
import empresa from './empresa';
import modal from './modal';

import { reducer as toastrReducer } from 'react-redux-toastr'

const reducers = combineReducers({
  empresa,
  toastr: toastrReducer,
  modal
});

export default reducers;
