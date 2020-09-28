import { combineReducers } from 'redux';
import { storiesReducer } from './storiesReducer';
import { commentsReducer } from './commentsReducer';

const rootReducer = combineReducers({
    stories: storiesReducer,
    comments: commentsReducer
}); 
//creates keys inside state 

export default rootReducer;




