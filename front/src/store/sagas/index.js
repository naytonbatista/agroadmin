import { all, takeLatest } from 'redux-saga/effects';

 import { Types as EmpTypes } from '../ducks/empresa';
 import { Types as Pessoaypes } from '../ducks/pessoa';

 import { getListCompanies, saveCompany } from './empresa';
 import { getListPessoa } from './pessoa';


export default function* rootSaga() {
  return yield all([
    takeLatest(EmpTypes.GET_LIST, getListCompanies),
    takeLatest(EmpTypes.SAVE, saveCompany),

    takeLatest(Pessoaypes.GET_PESSOA_LIST, getListPessoa),
    
  ]);
}
