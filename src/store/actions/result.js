import * as actionTypes from './actionTypes';

export const saveResult = (result) => {
    // action creators should not update the state (contain the logic) 
    // as much as the reducers, as below:
    // const updatedResult = result * 2;
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    };
};

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
            dispatch(saveResult(result));
        }, 2000);
    };
};

export const deleteResult = (resultId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultId: resultId
    };
};