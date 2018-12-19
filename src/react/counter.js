import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux'



const Counter = (props) => {
    if (props.count === null) {
        return (
            null
        )
    }
    return (
        <div>
            <h1>Counter App</h1>
            <h2> Count :{props.count}</h2>

            <button onClick={() => (props.cli(props.count))}>Click to Increment Counter</button>
        </div>
    )
}


function as(st) {
    return {
        count: st.secRed.count,
    }
}

// const actions = bindActionCreators({mapD})

const mapD = (disp) => {
    // console.log(disp)
    return {
        cli: (data) => {
            const ac = {
                type: 'ADD',
                payload: data
            }
            disp(ac)
        }
    }
}
export default connect(as, mapD)(Counter);