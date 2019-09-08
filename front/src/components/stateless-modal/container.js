import Component from './component';
import {
    compose,
    withState,
    hoistStatics,
    withProps,
    withHandlers
} from 'recompose';

const enhance = compose(
    withState('opened', 'setOpened', true),
    withHandlers({ 
        
    }),
    withProps(props =>({
        close:() => { props.setOpened(false)}
    }))
    
);

export default hoistStatics(enhance)(Component);
