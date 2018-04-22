import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, icons, borders } from '../../resources/constants.js'
import TabButton from '../buttons/TabButton.js';
import TabBar from './TabBar';
import LoginContainer from '../../main/LoginContainer';
import Logo from '../../resources/logo.png';
import UnlabeledInput from '../forms/UnlabeledInput';
class Header extends Component {
    state = {
        searchText: ''
    }

    handleSearchChange = (event) => {
        console.log(event)
        this.setState({
            searchText: event.target.value
        })
    }

    handleSubmitSearch = (event) => {
        event.preventDefault();
        console.log('submitted')

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
        height: '49px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 50px'
    },
    logoContainer: {

    },
    logo: {
    },
    searchContainer: {
        marginLeft: '30px'
    },
    tabs: {
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-end'
    }
}

Header.propTypes = {
    isLoggedIn: PropTypes.bool.isRequired
}

// Wrap it with Radium
Header = Radium(Header);

export default Header;