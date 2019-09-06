import { createActions, createReducer } from "reduxsauce";

export const { Types, Creators } = createActions({
    showModal: ['opened', 'title', 'save', 'content']
})

const initialState = {
    opened: false,
    title: ''
};

const show = (state = initialState, { opened, title, save, content }) => ({
    ...state,
    opened,
    title,
    save,
    content
    
})

export default createReducer(initialState, {
    [Types.SHOW_MODAL]: show

})

