import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
};

// Unlike @this.setState, there is no merging when implementing reducer cases (action)
// We must include all state properties first, THEN modify whichever needs updating
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT : return updateObject(state, {results: state.results.concat({id: new Date(), value: action.result})});
        case actionTypes.DELETE_RESULT : return updateObject(state, {results: state.results.filter(result => result.id !== action.resultId)});
        default: return state;
    }
};

export default reducer;