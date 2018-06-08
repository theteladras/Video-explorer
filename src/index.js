import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';
import MainScreen from './Screens/MainScreen';
import VideoScreen from './Screens/VideoScreen';
import RouterComponent from './Routes';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <RouterComponent/>
        </Router>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
