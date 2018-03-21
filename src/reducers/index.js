import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses // <-- state.course in components. same as courses.courses
});

export default rootReducer;