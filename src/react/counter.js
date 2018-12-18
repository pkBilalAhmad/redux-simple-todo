import React from 'react';
import { connect } from 'react-redux';

const Counter = (props) => {    
    return (
        <div>
            <h1>Counter App</h1>
            <h2> Count :{props.count}</h2>
            <button onClick={props.clickToIncrement}>Click to Increment Counter</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    console.log(state)
    return {
        count: state.red.count
    }
}
const mapDispatchToProps = (dispatch, state) => {
    return {
        clickToIncrement: () => {
            // console.log('state', state)
            const action = {
                type: 'ADD'
            }
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);