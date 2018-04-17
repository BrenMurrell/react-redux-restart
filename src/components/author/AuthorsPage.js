import React, {PropTypes } from 'react';
import { Link, browserHistory } from 'react-router';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';

class AuthorsPage extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.redirectToAddAuthorsPage = this.redirectToAddAuthorsPage.bind(this);
    }

    redirectToAddAuthorsPage() {
        browserHistory.push('/author');
    }

    render() {
        const { authors } = this.props;

        return ( 
            <div>
                <h1>Authors</h1>
                <input 
                    type="submit"
                    value="Add author"
                    className="btn btn-primary"
                    onClick={this.redirectToAddAuthorsPage} />
                <AuthorList authors={authors} />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        authors: state.authors
    };
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
