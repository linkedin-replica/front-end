import React, { Component } from 'react';
import Radium from 'radium';
import { colors } from '../resources/constants';
import { Route, Switch } from 'react-router-dom';
import api from '../api/api';
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
      this.props.history.push('/')
      let route = this.props.location.pathname

      api.getLoggedInUserDetails()
        .then(({ data }) => {
          this.setState({
            loggedInUser: data.results
          }, () => this.props.history.push(route))

        })
        .catch(err => {
          api.removeLoginToken()
          this.props.history.push('/login')
        })
    } else {
      this.props.history.push('/login')
    }
  }

  render() {
    const { match } = this.props
    const { loggedInUser } = this.state


    return (
      <div className="main-app" style={styles.base}>
        <Switch>
          <Route path="/login" render={() => <LoginRegisterationContainer />} exact />
          {loggedInUser &&
            <Route path="/" render={() => <MainContainer loggedInUser={loggedInUser} />} />
          }
        </Switch>
      </div>);
  }
}

const styles = {
  base: {
    background: colors.whiteGray,
  },
}

App = Radium(App);
export default App;
