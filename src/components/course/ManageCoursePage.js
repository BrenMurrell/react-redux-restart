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
            errors: {},
            saving: false //local state - doesn't need to go thru redux workflow
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if(this.props.course.id != nextProps.course.id) {
            //necessary to populat form when existing course is loaded directly
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event) {
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    saveCourse(event) {
        event.preventDefault();
        this.setState({saving: true});
        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect());
        
    }
    redirect() {
        this.setState({saving: false});        
        this.context.router.push('/courses');
    }
    render() {
        return (
            <CourseForm 
                allAuthors={this.props.authors} 
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                course={this.state.course} 
                errors={this.state.errors}
                saving={this.state.saving}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    //myProp: PropTypes.string.isRequired
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is availabel on this.context.router
ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.id == id);
    if (course) return course[0]; //filter returns an array, so get first item.
    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.params.id; //from the path `/course/:id`
    let course = { id: '', watchHref: '', title: '', authorId: '', length: '', category: '' };
    if(courseId && state.courses.length) {
        course = getCourseById(state.courses, courseId);
    }
    const authorsFormattedForDropdown = state.authors.map(author => {
        return {
            value: author.id,
            text: author.firstName + ' ' + author.lastName
        };
    });

    return {
        course: course,
        authors: authorsFormattedForDropdown
    };
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
