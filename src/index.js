import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux'; //higher order component to attachs our store to our react container components. 
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import { loadCourses} from './actions/courseActions';
import { loadAuthors} from './actions/authorActions';

import './styles/styles.css'; //webpack can import these too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); //can put initialState in as a function param if you're passing state from server / localStorage etc.

store.dispatch(loadCourses());
store.dispatch(loadAuthors());


render (
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    document.getElementById('app')
);