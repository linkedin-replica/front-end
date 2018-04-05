import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Test from './components/Test';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Route path="/" component={App} />
        <Route path="/test" component={Test} />
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
