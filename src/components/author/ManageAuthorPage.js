import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
//import * as courseActions from '../../actions/courseActions';
//import CourseForm from './CourseForm';
//import { authorsFormattedForDropdown } from '../../selectors/selectors';
import toastr from 'toastr';

export class ManageAuthorPage extends React.Component {
    constructor(props, context) {
        super (props, context);
    }

    render() {
        return (
            <div>
                <h1>Author placeholder</h1>
            </div>
        );
    }
}

export default ManageAuthorPage;