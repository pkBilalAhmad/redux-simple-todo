const incrementReducer = (state = { count: 0 }, action) => {
    if (action.tyep === 'ADD') {
        return Object.assign({}, state, { count: state.count + 1 })
    } return state;
}

export default incrementReducer;