import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import ProfileSectionItem from '../profile/ProfileSectionItem';

class ProfileSection extends Component {
    render() {
        const { sectionTitle, style, size } = this.props;
        return(
        <div style={[style, styles.base]}>
          <ProfileSectionItem/>
        </div>
    )};    

}

ProfileSectionItem.propTypes = {
    sectionTitle: PropTypes.string.isRequired, 
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

ProfileSection = Radium(ProfileSection);
export default ProfileSection;