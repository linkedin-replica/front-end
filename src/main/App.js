import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import { Route } from 'react-router-dom';
import api from '../api/api';
import Redirect from 'react-router-dom/Redirect';
import MainContainer from './MainContainer';

class App extends Component {

  state = {
    loggedInUser: null
  }

  componentDidMount() {
    let loggedInToken = localStorage.getItem('access-token');

    // If user is logged in, get his info
    if (loggedInToken) {
      api.getLoggedInUserDetails()
        .then(res => { })
    } else {
      <Redirect to="/login" />
    }
  }

  render() {
    const { match } = this.props
    return (
      <div className="main-app" style={styles.base}>
        <MainContainer />
      </div>);
  }
}

const styles = {
  base: {
    background: colors.whiteGray,
    height: '100%',
    padding: '30px'
  }
}

App = Radium(App);
export default App;
