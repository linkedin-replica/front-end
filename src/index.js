import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import Test from './components/Test';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import 'font-awesome/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/" component={App} exact />
            <Route path="/test" component={Test} />
        </Switch>
    </Router>,
    document.getElementById('root'));
registerServiceWorker();
