import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import GrayText from '../typography/GrayText';
import WhiteWrapper from '../wrappers/WhiteWrapper';

class ProfileSkill extends Component {
    render() {
        const { skill, style, size } = this.props;
        return (
            <WhiteWrapper style={styles.whiteWrapper} size="lg">
                <div style={styles.blueDiv}>
                </div>
                <div style={[styles.blueDiv, styles.textDiv]}>
                    {skill}
                </div>
            </WhiteWrapper>
        )
    };
}

ProfileSkill.propTypes = {
    skill: PropTypes.string.isRequired,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const styles = {
    whiteWrapper: {
        margin: '10px auto',
        textAlign: 'left',
        maxWidth: '10%',
        height: '15%',
    },
    blueDiv: {
        backgroundColor: colors.mediumBlue,
        maxWidth: '20px',
        height: '100%',
    },
    textDiv: {
        textAlign: 'center',  
        fontSize: '18px',
        paddingLeft: '20%',
    }
}

ProfileSkill = Radium(ProfileSkill);
export default ProfileSkill;