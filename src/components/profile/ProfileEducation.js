import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import ProfileEducationItem from '../profile/ProfileEducationItem';
import ListAdapter from '../wrappers/ListAdapter';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import IconButton from '../buttons/IconButton';

class ProfileEducation extends Component {
    render() {
        const { sectionTitle, data, style, size, addEducation } = this.props;
        return (
            <WhiteWrapper style={styles.base} size="lg">
                <h3 style={[styles.text, size ? styles[size] : styles['lg']]}> {sectionTitle} </h3>
                <IconButton style={styles.addButton} type="add" onClick={addEducation} />
                <ListAdapter data={data} listItemView={ProfileEducationItem} verticalSplit />
            </WhiteWrapper>
        )
    };
}

ProfileEducation.propTypes = {
    sectionTitle: PropTypes.string,
    data: PropTypes.array,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
        margin: '10px auto',
        paddingTop: '0.5em',
        width: '100%',
        position: 'relative',
    },
    text: {
        display: 'inline-block',
        paddingLeft: '2em',
        paddingRight: '20em',
        fontWeight: 'normal'
    },
    addButton: {
        position: 'absolute',
        right: '20px',
        top: '20px'
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

ProfileEducation = Radium(ProfileEducation);
export default ProfileEducation;