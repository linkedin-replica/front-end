/**
 * The connections view holding 3 main components
 */

import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
// import { object from constants } from '../../resources/constants.js'

class Connections extends Component {

    /**
     * render function is what returns the component view
     */
    render() {
        const {
            //  Select the needed props only
            friendRequestsData,
            friendRecommendationsData,
            friendsData,
            ...rest } = this.props;

        return (
            <div
                style={[
                    styles.base,
                ]}>
                <FriendRequests data={friendRequestsData} />
                <FriendRecommendations data={friendRecommendationsData} />
                <MyFriends data={friendsData} />
            </div>
        );
    }
}

/**
 * Define here what does this component take as props
 */
Connections.propTypes = {
    friendRequestsData = PropTypes.array.isRequired,
    friendRecommendationsData = PropTypes.array.isRequired,
    friendsData = PropTypes.array.isRequired
};

/**
 * Write here the CSS required for the component, instead of '-' it will be in camelCase
 * e.g. background-color will be backgroundColor
 */
const styles = {
    base: {

    },
    text: {

    },
}

// Wrap it with Radium
Connections = Radium(Connections);

export default Connections;