import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import ajaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses, // <-- state.course in components. same as courses.courses. Aliasing courseReducer to make it easier to use in components
    authors,
    ajaxCallsInProgress
});

export default rootReducer;