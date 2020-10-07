export const storiesReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_STORIES':
            return action.payload;

        case 'ADD_STORY':
            return [...state, action.payload];

        case 'FILTER_STORIES':
            return action.payload;

        default:
            return state;
    }
}


