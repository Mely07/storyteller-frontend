export const storiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STORIES':
            return action.payload;

        default:
            return state;
    }
}


