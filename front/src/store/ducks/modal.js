import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
    showModal: ['opened', 'title', 'content']
})

const initialState = {
    opened: false, 
    title:''
};

const show = (state = initialState, { opened, title, content }) => ({
    ...state,
    opened,
    title,
    content
})

export default createReducer(initialState, {
    [Types.SHOW_MODAL]: show

})

