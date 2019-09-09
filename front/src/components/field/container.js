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
    withState('value', 'setValue', {}),
    withProps(props => ({

        setCustomValue: (fieldname, item) => {
            
            props.setValue(item && { field: fieldname, value: item.id, description: item.nome } || null );
            props.setModalOpen(false);
            props.onChange(fieldname, item && item.id)
            
        }

    }))

);

export default hoistStatics(enhance)(Component);
