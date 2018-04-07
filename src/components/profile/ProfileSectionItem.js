/**
    The ProfileSectionItem header used in all headers in different sizes,
    sm: Small
    md: Medium
    lg: Large
    By default it's set to md
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import BoldLink from '../typography/BoldLink';
import GrayText from '../typography/GrayText';
import BlackText from '../typography/BlackText';
import AvatarImage from '../images/AvatarImage';

class ProfileSectionItem extends Component {
    render() {
        const { title, company, id, duration, description, style, size } = this.props;
        return(
        <div style={[style, styles.base]}>
            <span style={styles.imgDiv}>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A" 
                rounded="false" type="company" id={id} size="md"/>
            </span>
            <span style={styles.textDiv}>
                <BlackText text={title} size="md" style={[styles.text, styles.title]}/>
                <BlackText text={company} size="md" style={styles.text}/>
                <GrayText text={duration} size="sm" style={styles.text}/>
                <GrayText text={description} size="sm" style={styles.description}/>
            </span>
        </div>
    )};    
}

ProfileSectionItem.propTypes = {
    title: PropTypes.string.isRequired, 
    company: PropTypes.string.isRequired, 
    id: PropTypes.string.isRequired, 
    duration: PropTypes.string, 
    description: PropTypes.string, 
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
        marginLeft:'20px'
    },
    imgDiv: {
        paddingRight:'2%',
        verticalAlign:'top'
    },
    textDiv: {
        display: 'inline-block',
        verticalAlign:'top'
    },
    title: {
       fontWeight:'bold'
    },
    text: {
        margin:'5px',
        maxWidth:'300px'
    },
    description: {
        margin:'5px',
        wordWrap: 'break-word',
        maxWidth:'500px',
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

ProfileSectionItem = Radium(ProfileSectionItem);
export default ProfileSectionItem;
