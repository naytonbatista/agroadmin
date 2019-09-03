import { call, put } from 'redux-saga/effects'
import { Creators as EmpActions } from '../ducks/empresa'
import { getList } from '../services/empresa'

export function* getListCompanies(action) {

    try {
        const response = yield call(getList);
        yield put(EmpActions.getListSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(EmpActions.getListFail);

    }
}
