import { combineReducers } from 'redux';
import { storiesReducer } from './storiesReducer';
import { commentsReducer } from './commentsReducer';
import { usersReducer } from './usersReducer'

const rootReducer = combineReducers({
    stories: storiesReducer,
    comments: commentsReducer,
    users: usersReducer
}); 
//creates keys inside state 

export default rootReducer;




