import expect from 'expect';
import { createStore } from 'redux';
import rootReducer from '../reducers';
import initialState from '../reducers/initialState';
import * as courseActions from '../actions/courseActions';

describe('Store', () => {
    it('Should handle creating courses', function() {
        //arrange
        const store = createStore(rootReducer, initialState); // same as actual createStore call in app.js
        const course = {
            title: 'Clean Code'
        };
        //act
        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action); //could dispatch multiple actions here and assert on result.


        

        //assert
        const actual = store.getState().courses[0];
        const expected = {
            title: "Clean Code"
        };

        expect(actual).toEqual(expected);

        //act again - added this myself to test the theory that you could add multiple actions as per ^^^ comment up there!
        const courseTwo = {
            title: 'Dirty Code'
        };
        const actionTwo = courseActions.createCourseSuccess(courseTwo);
        store.dispatch(actionTwo);

        //assert - again
        const actualTwo = store.getState().courses[1];
        const expectedTwo = {
            title: "Dirty Code"
        };
        expect(actualTwo).toEqual(expectedTwo);



    });
});