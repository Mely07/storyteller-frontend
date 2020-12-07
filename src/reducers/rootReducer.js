import { combineReducers } from 'redux';
import { storiesReducer } from './storiesReducer';
import { commentsReducer } from './commentsReducer';
import {authReducer} from './authReducer'

const rootReducer = combineReducers({
    stories: storiesReducer,
    comments: commentsReducer,
    auth: authReducer
}); 
//creates keys inside state 

export default rootReducer;




