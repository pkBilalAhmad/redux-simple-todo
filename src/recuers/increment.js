const initialState = {
    count: 0
}

// export const MyState = (state = initialState) => {
//     return state;
// }



export const incrementReducer = (state = initialState, action) => {
    if (action.type === 'ADD') {
        return Object.assign({}, state, { count: state.count + 1 })
    } return state;
}

// export default incrementReducer;