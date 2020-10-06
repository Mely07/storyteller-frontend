export const commentsReducer = (state = [], action) => {
    switch (action.type) {
        case 'FETCH_COMMENTS':
            return action.payload;

        case 'ADD_COMMENT':
            return [...state, action.payload]
        
        case 'INCREASE_LIKES':
            return state.map(comment => {
                if (comment.id == action.payload.id) {
                    return action.payload;
                }
                return comment;
            });

            // const index = state.findIndex(comment => comment.id == action.payload.id);
            // state[index] = action.payload;
            // return [...state];

        case 'INCREASE_DISLIKES':
            return state.map(comment => {
                if (comment.id == action.payload.id) {
                    return action.payload;
                }
                return comment;
            });

        default:
            return state;
    }
}
