export const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_CURRENT_USER':
            return action.payload;

        default:
        return state;
    }
}
