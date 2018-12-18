const userDetail = (state = null, action) => {
    switch (action.type) {
        case 'NAME':
            return action.payload
        // return Object.assign({}, ...state, { name: action.payload })
        default:
            return state;
    }
}

export default userDetail;