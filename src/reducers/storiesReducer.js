export const storiesReducer = (state = { stories: [], loading: false }, action) => {
    switch (action.type) {
        case 'FETCH_STORIES':
            return {
                stories: action.payload,
                loading: false
            }

        case 'LOADING_STORIES':
            return {
                ...state,
                stories: [...state.stories],
                loading: true
            }

        case 'ADD_STORY':
            return {
                ...state,
                stories: action.payload,
                loading: false
            }

        case 'FILTER_STORIES':
            return {
                stories: action.payload,
                loading: false
            }

        default:
            return state;
    }
}

