import { combineReducers } from 'redux';
import { storiesReducer } from './storiesReducer';
import { commentsReducer } from './commentsReducer';
import { usersReducer } from './usersReducer';
import {authReducer} from './authReducer'

const rootReducer = combineReducers({
    stories: storiesReducer,
    comments: commentsReducer,
    users: usersReducer,
    auth: authReducer
}); 
//creates keys inside state 

export default rootReducer;




