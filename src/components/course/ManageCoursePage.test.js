import expect from 'expect';
import React from 'react';
import { mount, shallow } from 'enzyme';
import { ManageCoursePage } from './ManageCoursePage'; //add curly braces and set export on component in its code

describe('Manage Course Page', () => {
    it('Sets error message when trying to save empty title', () => {
        const props = {
            authors: [],
            actions: { saveCourse: () => { return Promise.resolve(); }}, //mock for actions (no operations performed)
            course: { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' } //copied from ManageCoursePage.js
        };
        
        //const wrapper = mount(<ManageCoursePage/>); //use mount for interactions between components - needs props though! (see below)
        //const wrapper = mount(<Provider store={store}><ManageCoursePage/></Provider>); //possible approach

        const wrapper = mount(<ManageCoursePage {...props} />); 
        const saveButton = wrapper.find('input').last();
        expect(saveButton.prop('type')).toBe('submit');
        //simulate click
        saveButton.simulate('click');
        expect(wrapper.state().errors.title).toBe('Title must be at least 5 characters.'); // test first, feature next
    });
});