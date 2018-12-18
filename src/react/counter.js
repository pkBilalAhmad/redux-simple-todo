import React from 'react';


const Counter = (props)=>{
    return (
        <div>
            <h1>Counter App</h1>
            <h2> Count :{ props.count}</h2>            
            <button>Click to Increment Counter</button>
        </div>
    )
}

export default Counter;