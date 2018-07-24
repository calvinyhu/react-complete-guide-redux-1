// Import redux using node.js syntax
const redux = require('redux');

// Create store function
const createStore = redux.createStore;

// Initalize state
const initialState = {
    counter: 0
}

// Reducer
// @state is set to a default value by using the '=' operating and an assignment.
// Must return a new object where you may first copy the old state using the
// spread operator, THEN overwrite the one property. If @counter is an object,
// then you would first need to copy it too.
const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ('INC_COUNTER'):
            return {
                ...state, // Copy State
                counter: state.counter + 1 // Mutate the copy
            };
        case ('ADD_COUNTER'):
            return {
                ...state,
                counter: state.counter + action.value
            };
        default:
            return state;
    }
};

// Store
// The @store needs a reducer first
const store = createStore(rootReducer);
console.log('[Creating Store]', store.getState());

// Subscription
// @subscribe gets executed whenever the state is updated (whenever an @action reaches a reducer),
// then takes a function as an argument and executes that function.
store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

// Dispatching Action
// The @action object must consist of @type and user-defined data if necessary.
// @type must be passed
store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});
console.log('[Store]', store.getState());
