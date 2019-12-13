import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import MainPage from './components/MainPage/';
import App from './App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Router>
        <Route path="/" component={MainPage} exact/>
        <Route path="/app" component={App} />    
    </Router>,
    document.getElementById('root'));

serviceWorker.unregister();
