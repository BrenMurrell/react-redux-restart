import expect from 'expect';
import * as courseActions from './courseActions';
import * as types from './actionTypes';

//lots of work to create a test for the most basic of things. worth it? hrmmm....

//test async action 
describe('Course actions', () => {
    describe('createCourseSucces', () => {
        it('should create a CREATE_COURSE_SUCCESS action', () => {
            //arrange
            const course = { id: 'clean-code', title: 'Clean Code'};
            const expectedAction = {
                type: types.CREATE_COURSE_SUCCESS,
                course: course
            };
            //act
            const action = courseActions.createCourseSuccess(course);

            //assert
            expect(action).toEqual(expectedAction);
        });
    });
});