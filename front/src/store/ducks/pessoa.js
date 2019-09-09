import { createActions, createReducer } from "reduxsauce";
//import Immutable from "seamless-immutable";

export const { Types, Creators } = createActions({
    getPessoaList: [], //futuramenteFiltros
    getPessoaListSuccess: ['pessoas'],
    getPessoaListFail:[]
})

const initialState = {
    list: [],
    error: false,
};

const getList = (state = initialState, { }) => ({
    ...state,
    list: [],
    error:false,
})

const getSuccess = (state = initialState, { pessoas }) => ({
    ...state,
    list: pessoas,
    error:false
})

const getFail = (state = initialState, { }) => ({
    ...state,
    list: [],
    error: true,
    
})

export default createReducer(initialState, {
    [Types.GET_PESSOA_LIST]: getList,
    [Types.GET_PESSOA_LIST_SUCCESS]: getSuccess,
    [Types.GET_PESSOA_LIST_FAIL]: getFail,

})

