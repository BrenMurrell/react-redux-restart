import React, {PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursesPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
        
    }
    courseRow(course, index) {
        return <div key={index}>{course.title}</div>;
    }
    
    redirectToAddCoursePage() {
        browserHistory.push('/course');
    }
    

    render() {
        const { courses } = this.props;

        return (
            <div>
                <h1>Courses</h1>
                <input 
                    type="submit"
                    value="Add course"
                    className="btn btn-primary"
                    onClick={this.redirectToAddCoursePage} />
                <CourseList courses={courses} />
            </div>
        );
    }
}

//validation
CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//export default CoursesPage;
function mapStateToProps( state, ownProps) {
    return {
        courses: state.courses
    };
}
function mapDispatchToProps(dispatch) {
    return {
        //createCourse: course => dispatch(courseActions.createCourse(course))
        actions: bindActionCreators(courseActions, dispatch) //map ALL of the actions from courseActions.js
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);

//above is short hand for:
//const connectedStateAndProps = connect(mapStateToProps, mapDispatchToProps);
//export default connectedStateAndProps(CoursesPage);