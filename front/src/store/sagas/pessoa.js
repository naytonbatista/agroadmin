import { call, put } from 'redux-saga/effects'
import { Creators as PessoaActions } from '../ducks/pessoa'
import { getList } from '../services/pessoa'

export function* getListPessoa(action) {

    try {
        const response = yield call(getList);
        yield put(PessoaActions.getPessoaListSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(PessoaActions.getPessoaListFail);

    }
}
