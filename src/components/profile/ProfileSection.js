import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import ProfileSectionItem from '../profile/ProfileSectionItem';
import ListAdapter from '../wrappers/ListAdapter';

class ProfileSection extends Component {
    render() {
        const { sectionTitle, data, style, size } = this.props;
        return(
        <div style={style}>
            <h3 style={[styles.base, size ? styles[size] : styles['lg']]}> {sectionTitle} </h3>
            <ListAdapter data = {data} listItemView={ProfileSectionItem} verticalSplit />
        </div>
    )};    
}

ProfileSection.propTypes = {
    sectionTitle: PropTypes.string.isRequired, 
    data: PropTypes.object.isRequired, 
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
       paddingLeft: '4%',
       fontWeight: 'normal'
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