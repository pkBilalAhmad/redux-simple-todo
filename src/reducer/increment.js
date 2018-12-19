const initialState = {
    count: 0
}

const incrementRed = (state = initialState, action) => {
    if (action.type === 'ADD') {
        return { ...state, count: state.count + 1 }
    } return state;
}

export default incrementRed;