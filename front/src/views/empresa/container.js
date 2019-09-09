import React from 'react';
import View from './view';
import FormEmpresa from './form';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as EmpresaActions } from '../../store/ducks/empresa';
import { Creators as ModalActions } from '../../store/ducks/modal';

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
    razao_social: '',
    cnpj: "",
    inscricao_estadual: "",
    homepage: '',
    quantidade_empregados: '',
    socio_administrador: null,
    sede: '1'
}


const mapStateToProps = ({ empresa }) => ({ list: empresa.list });
const mapDispatchToProps = dispatch => bindActionCreators({ ...EmpresaActions, ...ModalActions }, dispatch)

const setValueField = (props) => (fieldName, value) => {
    
    props.setModel({ ...props.model, [fieldName]: value });
}

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('model', 'setModel', model),
    lifecycle({
        componentWillMount() {
            this.props.getList();
        }
    }),
    withHandlers({
        setFieldValue: setValueField,
        saveEmpresa: (props) => (e) => { 
            console.log(props);
            props.save(props.model);
            props.showModal(false) ;
        }
    }),
    withProps(props => ({
        add: () => props.showModal(true, 'Cadastro de Empresa', props.saveEmpresa, <FormEmpresa setFieldValue={props.setFieldValue} initialValues={props.model} />)
    }))

);

export default hoistStatics(enhance)(View);
