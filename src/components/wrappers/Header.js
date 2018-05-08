import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, icons, borders } from '../../resources/constants.js'
import TabButton from '../buttons/TabButton.js';
import TabBar from './TabBar';
import LoginContainer from '../../main/LoginContainer';
import Logo from '../../resources/logo.png';
import UnlabeledInput from '../forms/UnlabeledInput';
import api from '../../api/api';
import { withRouter } from 'react-router-dom';
import BorderedButton from '../buttons/BorderedButton';
class Header extends Component {
    state = {
        searchKey: ''
    }

    handleSearchChange = (event) => {
        this.setState({
            searchKey: event.target.value
        })
    }

    handleSubmitSearch = (event) => {
        if(event.key === "Enter"){
            event.preventDefault();
            console.log("In Submit handler");
            this.props.history.push('/search-results/'+ this.state.searchKey)
        }
    }

    handleSignOut = (event) => {
        api.removeLoginToken()
        this.props.history.push('/login')
    }
    componentDidMount() {

    }

    render() {
        const { isLoggedIn } = this.props
        return (
            <header
                style={[
                    styles.base,
                    // you can add here additional styles (e.g. style for each size passed as prop)
                ]}>
                <div style={styles.content}>
                    <span style={styles.logoContainer}>
                        <img src={Logo} style={styles.logo} />
                    </span>
                    {isLoggedIn &&
                        <span style={styles.searchContainer}>
                            <UnlabeledInput
                                placeholder="Search"
                                type="search"
                                handleChange={this.handleSearchChange}
                                handleSubmit={this.handleSubmitSearch}
                                size="md"
                            />
                        </span>
                    }
                    <nav style={styles.tabs}>
                        {isLoggedIn ?
                            <TabBar size="sm" /> :
                            <LoginContainer />
                        }
                    </nav>
                    {isLoggedIn &&
                        <BorderedButton name='Sign Out' color='white' onClick={this.handleSignOut}> </BorderedButton>
                    }
                </div>
            </header>
        );
    }
}

/**
 * Define here what does this component take as props
 */
Header.propTypes = {

};

/**
 * Write here the CSS required for the component, instead of '-' it will be in camelCase
 * e.g. background-color will be backgroundColor
 */
const styles = {
    base: {
        background: colors.lightGreen,
        position: 'fixed',
        height: '52px',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: '100',
        padding: '0 60px'
    },
    content: {
        maxWidth: '1128px',
        margin: 'auto',
        display: 'flex',
        alignItems: 'center',
    },

    searchContainer: {
        marginLeft: '30px',
        height: '100%'
    },
    tabs: {
        width: '100%',
        display: 'flex',
        marginLeft: '30px'
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool
}

// Wrap it with Radium
Header = Radium(Header);
Header = withRouter(Header);

export default Header;