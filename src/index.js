import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './main/App';
import Test from './tests/Test';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/test" component={Test} />
            <Route path="/" component={App} />
        </Switch>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
