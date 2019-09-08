import Component from './component';

import {
    compose,
    defaultProps,
    withProps,
    withState,
    hoistStatics,
} from 'recompose';

const enhance = compose(
    withState('modalOpen', 'setModalOpen', ''),
    withProps(props =>({
        show:() => alert('oi')
    }))
    
);

export default hoistStatics(enhance)(Component);
