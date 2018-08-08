import { combineReducers } from 'redux';
import courses from '../coursesReducers';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;