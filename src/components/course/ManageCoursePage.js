import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';

class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super (props, context);

        this.state = {
            course: Object.assign({}, this.props.course),
            errors: {}
        };
    }

    render() {
        return (
            <div>
                <h1>Manage Course</h1>
                <CourseForm 
                    allAuthors={[]} //empty arry to start - get from API later
                    course={this.state.course} 
                    errors={this.state.errors}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    //myProp: PropTypes.string.isRequired
    course: PropTypes.obj.isRequired
};

function mapStateToProps(state, ownProps) {
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    return {
        course: course
    };
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

//export default(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
export default ManageCoursePage;