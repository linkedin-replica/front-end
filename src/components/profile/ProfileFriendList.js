import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import ProfileFriend from '../profile/ProfileFriend';
import ListAdapter from '../wrappers/ListAdapter';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import IconButton from '../buttons/IconButton';

class ProfileFriendList extends Component {
    render() {
        const { sectionTitle, data, style, size } = this.props;
        return (
            <WhiteWrapper style={styles.whiteWrapper} size="lg">
                <div style={style}>
                    <h3 style={[styles.base, size ? styles[size] : styles['lg']]}> {sectionTitle} </h3>
                    <ListAdapter data={data} listItemView={ProfileFriend} />
                </div>
            </WhiteWrapper>
        )
    };
}

ProfileFriendList.propTypes = {
    sectionTitle: PropTypes.string,
    data: PropTypes.array,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
        display: 'inline-block',
        paddingLeft: '2em',
        fontWeight: 'normal',
        width: '100%'
    },
    whiteWrapper: {
        margin: '10px auto',
        paddingTop: '0.5em',
        maxWidth: '80%',
    },
    sm: {
        fontSize: '0.5em'
    },
    md: {
        fontSize: '1em'
    },
    lg: {
        fontSize: '1.5em'
    }
}

ProfileFriendList = Radium(ProfileFriendList);
export default ProfileFriendList;