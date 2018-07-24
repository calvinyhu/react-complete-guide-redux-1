import React, { Component } from 'react';
// @connect is a hoc function
import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actions from '../../store/actions/index';

class Counter extends Component {
    state = {
        addVal: 5,
        subVal: 5,
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label={"Add " + this.state.addVal} clicked={() => this.props.onAddCounter(this.state.addVal)}  />
                <CounterControl label={"Subtract " + this.state.subVal} clicked={() => this.props.onSubtractCounter(this.state.subVal)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(storedResult => (
                        <li key={storedResult.id} onClick={() => this.props.onDeleteResult(storedResult.id)}>{storedResult.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}


// Which state variables do I want to have access to (use in) this container?
// propName: redux state variable
// propName is user-defined.
// redux @state variable is from the @store.
// @state is our global state from redux
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

// Which actions do I want to dispatch to (use in) this container?
// propName: action
// propName is user-defined.
// If we assign @this.props.onIncrementCounter to an @onClick handler, then
// dispatch() will be executed
const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch(actions.increment()),
        onDecrementCounter: () => dispatch(actions.decrement()),
        onAddCounter: (value) => dispatch(actions.add(value)),
        onSubtractCounter: (value) => dispatch(actions.subtract(value)),
        onStoreResult: (result) => dispatch(actions.storeResult(result)),
        onDeleteResult: (resultId) => dispatch(actions.deleteResult(resultId))
    };
};

// @connect gives us this container with access to the @ctr property.
export default connect(mapStateToProps, mapDispatchToProps)(Counter);