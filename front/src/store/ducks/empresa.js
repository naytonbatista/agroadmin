import { createActions, createReducer } from "reduxsauce";
//import Immutable from "seamless-immutable";

export const { Types, Creators } = createActions({
    getList: [], //futuramenteFiltros
    getListSuccess: ['companies'],
    getListFail:[]
})

const initialState = {
    list: [],
    error: false,
};

const getCompanyList = (state = initialState, { }) => ({
    ...state,
    list: [],
    error:false,
})

const getCompanySuccess = (state = initialState, { companies }) => ({
    ...state,
    list: companies,
    error:false
})

const getCompanyFail = (state = initialState, { }) => ({
    ...state,
    list: [],
    error: true,
    
})

export default createReducer(initialState, {
    [Types.GET_LIST]: getCompanyList,
    [Types.GET_LIST_SUCCESS]: getCompanySuccess,
    [Types.GET_LIST_FAIL]: getCompanyFail,



})

