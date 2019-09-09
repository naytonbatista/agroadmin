import React from 'react';
import View from './view';
import FormEmpresa from './form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as PessoaActions } from '../../store/ducks/pessoa';

import {
    compose,
    lifecycle,
    defaultProps,
    withProps,
    withState,
    hoistStatics,
    mapProps,
    withHandlers,
} from 'recompose';

const model = {
    nome: '',
    nacionalidade:'',
    profissao:'',
    rg:'',
    orgao_emissor:'',
    cpf:'',
}


const mapStateToProps = ({ pessoa }) => ({ list: pessoa.list });
const mapDispatchToProps = dispatch => bindActionCreators({ ...PessoaActions }, dispatch)

const setValueField = (props) => (fieldName, ev) => {
    props.setModel({ ...model, [fieldName]: ev.target.value });
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('model', 'setModel', model),
    lifecycle({
        componentWillMount() {
            this.props.getPessoaList();
        }
    }),
    withHandlers({
        setFieldValue: setValueField,
        getValues: (props) => (e) => { console.log(props.model) }
    }),
    withProps(props => ({
       
    }))

);

export default hoistStatics(enhance)(View);
