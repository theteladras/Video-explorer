import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MainScreen from './Screens/MainScreen';
import VideoScreen from './Screens/VideoScreen';


export default class RouterComponent extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={MainScreen} />
                <Route exact path="/:videokey" component={VideoScreen} />
            </div>
        );
    }
}
