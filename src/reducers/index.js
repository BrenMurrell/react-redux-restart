import {combineReducers} from 'redux';
import courses from './courseReducer';

const rootReducer = combineReducers({
    courses // <-- state.course in components. same as courses.courses. Aliasing courseReducer to make it easier to use in components
});

export default rootReducer;