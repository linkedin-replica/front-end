import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import ProfileSection from '../profile/ProfileSection';
import ListAdapter from '../wrappers/ListAdapter';

class Profile extends Component {
    render() {
        const { data, style, size } = this.props;
        return(
        <div style={style}>   
            <ListAdapter data = {data} listItemView={ProfileSection} />
        </div>
    )};    
}

Profile.propTypes = {
    data: PropTypes.object.isRequired, 
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
      
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

Profile = Radium(Profile);
export default Profile;