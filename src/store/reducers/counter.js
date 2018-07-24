import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    counter: 0
};

// Unlike @this.setState, there is no merging when implementing reducer cases (action)
// We must include all state properties first, THEN modify whichever needs updating
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT : return updateObject(state, {counter: state.counter + 1});
        case actionTypes.DECREMENT : return updateObject(state, {counter: state.counter - 1});
        case actionTypes.ADD : return updateObject(state, {counter: state.counter + action.value});
        case actionTypes.SUBTRACT : return updateObject(state, {counter: state.counter - action.value});
        default: return state;
    }
};

export default reducer;