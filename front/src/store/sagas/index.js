import { all, takeLatest } from 'redux-saga/effects';

 import { Types as EmpTypes } from '../ducks/empresa';
 import { Types as Pessoaypes } from '../ducks/pessoa';

 import { getListCompanies } from './empresa';
 import { getListPessoa } from './pessoa';


// import { Types as AppTypes } from '../ducks/app';
// import { LoginTypes } from '../ducks/login';

export default function* rootSaga() {
  return yield all([
    takeLatest(EmpTypes.GET_LIST, getListCompanies),
    takeLatest(Pessoaypes.GET_PESSOA_LIST, getListPessoa),

    // takeLatest(LoginTypes.Request, login),
  ]);
}
