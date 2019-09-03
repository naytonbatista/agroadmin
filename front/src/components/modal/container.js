import Component from './component';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Creators as ModalActions } from '../../store/ducks/modal';
import {
    compose,
    defaultProps,
    withProps,
    withState,
    hoistStatics,
} from 'recompose';

const mapStateToProps = ({ modal }) => ({ ...modal });
const mapDispatchToProps = dispatch => bindActionCreators({ ...ModalActions }, dispatch)

const enhance = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withProps(props =>({
        close:() => props.showModal(false)
    }))
    
);

export default hoistStatics(enhance)(Component);
