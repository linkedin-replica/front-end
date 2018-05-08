/**
    The ProfileEducationItem header used in all headers in different sizes,
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
import GrayText from '../typography/GrayText';
import BlackText from '../typography/BlackText';
import AvatarImage from '../images/AvatarImage';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import IconButton from '../buttons/IconButton';

class ProfileEducationItem extends Component {
    render() {
        const { schoolName, degree, fieldOfStudy, startDate, endDate, style, size } = this.props;
        return (
            <div style={[style, styles.base]}>
                <AvatarImage src='data:image/png;base64,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'
                    type="company" id='0' size="lg" style={styles.imgDiv} />
                <span style={styles.textDiv}>
                    <BlackText text={schoolName} size="md" style={[styles.text, styles.title]} />
                    <BlackText text={degree + ", " + fieldOfStudy} size="md" style={styles.text} />
                    <GrayText text={startDate + " - " + endDate} size="sm" style={styles.text} />
                </span>
                <div style={styles.btnDiv}>
                    <IconButton type="edit" onClick={this.incrementCounter} />
                </div>
            </div>
        )
    };
}

ProfileEducationItem.propTypes = {
    schoolName: PropTypes.string,
    startDate: PropTypes.string,
    endDate: PropTypes.string,
    degree: PropTypes.string,
    fieldOfStudy: PropTypes.string,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
        display: 'inline-block',
        marginLeft: '20px',
        width: '100%'
    },
    imgDiv: {
        display: 'inline-block',
        paddingRight: '2%',
        paddingTop: '2%',
        float: 'left'
    },
    textDiv: {
        display: 'inline-block',
        verticalAlign: 'top',
        float: 'left',
    },
    btnDiv: {
        display: 'inline-block',
        float: 'right',
    },
    title: {
        fontWeight: 'bold'
    },
    text: {
        margin: '5px',
    },
    description: {
        margin: '5px',
        wordWrap: 'break-word',
        maxWidth: '500px',
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

ProfileEducationItem = Radium(ProfileEducationItem);
export default ProfileEducationItem;
