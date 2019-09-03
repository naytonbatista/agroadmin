import { all, takeLatest } from 'redux-saga/effects';

 import { Types as EmpTypes } from '../ducks/empresa';
 import { getListCompanies } from './empresa';

// import { Types as AppTypes } from '../ducks/app';
// import { LoginTypes } from '../ducks/login';

export default function* rootSaga() {
  return yield all([
    takeLatest(EmpTypes.GET_LIST, getListCompanies),
    // takeLatest(LoginTypes.Request, login),
  ]);
}
