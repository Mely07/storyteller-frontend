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
                stories: [...state.stories, action.payload],
                loading: false
            }

        case 'FILTER_STORIES':
            return {
                stories: action.payload,
                loading: false
            }

        case 'TOP_STORY':
            return {
                ...state,
                story: action.payload,
                loading: false
            }

        default:
            return state;
    }
}

