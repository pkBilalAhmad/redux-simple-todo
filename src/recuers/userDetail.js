const userDetail = (state = null, action) => {
    switch (action.type) {
        case 'NAME':
            return action.payload
            // return Object.assign({}, state, { ok: action.payload })
        // return { ...state, obj: action.payload }
        default:
            return state;
    }
}

export default userDetail;