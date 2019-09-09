import { createActions, createReducer } from "reduxsauce";
//import Immutable from "seamless-immutable";

export const { Types, Creators } = createActions({
    getList: [], //futuramenteFiltros
    getListSuccess: ['companies'],
    getListFail:[],
    save: ['request'],
    saveFail:[],
    saveSuccess:[],
})

const initialState = {
    list: [],
    error: false,
    empresa:{
        razao_social: '',
        cnpj: "",
        inscricao_estadual: "",
        homepage: '',
        quantidade_empregados: '',
        socio_administrador: '',
        sede: ''
    }
};

const save = (state = initialState, { request }) => ({
    ...state,
    empresa: request
    
})

const saveSuccess = (state = initialState, {  }) => ({
    ...state,
    error:false
    
})

const saveError = (state = initialState, {  }) => ({
    ...state,
    error:true
    
})

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
    [Types.SAVE]: save,
    [Types.SAVE_SUCCESS]: saveSuccess,
    [Types.SAVE_FAIL]: saveError

})

