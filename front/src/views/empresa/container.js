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
} from 'recompose';

const mapStateToProps = ({ empresa }) => ({ list: empresa.list });
const mapDispatchToProps = dispatch => bindActionCreators({ ...EmpresaActions, ...ModalActions }, dispatch)


const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    defaultProps({
        list: [],
        error: false
    }),
    lifecycle({
        componentWillMount() {
            this.props.getList();
        }
    }),
    withProps(props => ({
        add: () => props.showModal(true, 'Cadastro de Empresa', <FormEmpresa />)
    }))

);

export default hoistStatics(enhance)(View);
