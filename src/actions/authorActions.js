import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import { beginAjaxCall} from './ajaxStatusActions';


export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}

// can add loadCoursesFailure (using catch below instead for brevity)

export function loadAuthors() {
    //promise >> action
    return function(dispatch) {
        dispatch(beginAjaxCall());        
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error => {
            throw(error);
        });
    };
}