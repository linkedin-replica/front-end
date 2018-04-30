import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import { Route, Switch } from 'react-router-dom';
import api from '../api/api';
import Redirect from 'react-router-dom/Redirect';
import MainContainer from './MainContainer';
import Header from '../components/wrappers/Header';
import LoginRegisterationContainer from './LoginRegisterationContainer';

class App extends Component {

  state = {
    loggedInUser: null
  }

  componentDidMount() {
    let loggedInToken = localStorage.getItem('access-token');

    // If user is logged in, get his info
    if (loggedInToken) {
      // api.getLoggedInUserDetails()
      //   .then(res => {
      //     this.setState({
      //       loggedInUser: res.results
      //     });
      //   });
      <Redirect to="/home" />
    } else {
      <Redirect to="/login" />
    }
  }

  render() {
    const { match } = this.props
    return (
      <div className="main-app" style={styles.base}>
        <Switch>
          <Route path="/login" component={LoginRegisterationContainer} exact />
          <Route path="/" component={MainContainer} />
        </Switch>
      </div>);
  }
}

const styles = {
  base: {
    background: colors.whiteGray,
    overflowX: 'hidden'
  }
}

App = Radium(App);
export default App;
