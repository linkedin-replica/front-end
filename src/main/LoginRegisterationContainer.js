import React, { Component } from 'react';
import Radium from 'radium';
import { Route, withRouter } from 'react-router-dom';
import RegistrationContainer from './RegistrationContainer';
import Header from '../components/wrappers/Header';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

class LoginRegisterationContainer extends Component {

    render() {
        const { match } = this.props
        return (
            <div className="main-app" style={styles.base}>
                <Header />
                <main className="main-details" style={styles.details}>
                    <RegistrationContainer />
                </main>
                <ToastContainer position='bottom-left' style={styles.toast} autoClose={4000} />
            </div>);
    }
}

const styles = {
    details: {
        padding: '80px 30px',
        display: 'flex',
        justifyContent: 'center',
        height: '100%'
    },
    toast: {
        height: '50px',
        fontWeight: 'bold',
    }
}

LoginRegisterationContainer = Radium(LoginRegisterationContainer);
export default LoginRegisterationContainer;
