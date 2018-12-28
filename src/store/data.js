const myData = ['Bilal', 'Ahmad ', 'Aasim', 'Saim'];

export const data = (state = myData, action) => {
    switch (action.type) {
        case 'TODO':
            return [...state, state = action.user];
        default:
    }return state;
}