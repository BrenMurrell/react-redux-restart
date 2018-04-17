import * as types from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';
import { beginAjaxCall, ajaxCallError} from './ajaxStatusActions';


export function loadAuthorsSuccess(authors) {
    return { type: types.LOAD_AUTHORS_SUCCESS, authors };
}


export function updateAuthorSuccess(author) {
    return { type: types.UPDATE_AUTHOR_SUCCESS, author };
}


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

export function saveAuthor(author) {
    return function(dispatch, getState) {
        dispatch(beginAjaxCall());        
        return AuthorApi.saveAuthor(author).then(savedAuthor => {
            author.id ? dispatch(updateAuthorSuccess(savedAuthor)) :
                dispatch(updateAuthorSuccess(savedAuthor));
        }).catch(error => {
            dispatch(ajaxCallError(error));
            throw(error);
        });
    };
}