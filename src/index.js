import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import './styles/styles.css'; //webpack can import these too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();
render (
    <Router history={browserHistory} routes={routes} />,
    document.getElementById('app')
);