import { call, put } from 'redux-saga/effects'
import { Creators as EmpActions } from '../ducks/empresa'
import { getList, save } from '../services/empresa'

export function* getListCompanies(action) {

    try {
        const response = yield call(getList);
        yield put(EmpActions.getListSuccess(response));
    } catch (error) {
        console.log(error);
        yield put(EmpActions.getListFail);

    }
}

export function* saveCompany({ request }) {

    try {
        console.log(request)
        const response = yield call(save, request);
        yield put(EmpActions.saveSuccess(response));
        yield put(EmpActions.getList());

    } catch (error) {
        console.log(error);
        yield put(EmpActions.saveFail);

    }
}
