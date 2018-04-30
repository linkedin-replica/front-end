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
      api.getLoggedInUserDetails()
        .then(({ data }) => {
          this.setState({
            loggedInUser: data.results
          });
        });
      <Redirect to="/home" />
    } else {
      <Redirect to="/login" />
    }
  }

  render() {
    const { match } = this.props
    const { loggedInUser } = this.state
    return (
      <div className="main-app" style={styles.base}>
        <Switch>
          <Route path="/login" render={() => <LoginRegisterationContainer {...loggedInUser} />} exact />
          <Route path="/" render={() => <MainContainer {...loggedInUser} />} />
        </Switch>
      </div>);
  }
}

const styles = {
  base: {
    background: colors.whiteGray,
  }
}

App = Radium(App);
export default App;
