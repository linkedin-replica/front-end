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
            <WhiteWrapper style={styles.whiteWrapper}>
                <div style={styles.textDiv}>
                    {skill}
                </div>
            </WhiteWrapper>
        )
    };
}

ProfileSkill.propTypes = {
    skill: PropTypes.string,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const styles = {
    whiteWrapper: {
        margin: '10px auto',
        textAlign: 'left',
        width: '50%',
        height: '30px',
        display: 'inline-block',
    },
    textDiv: {
        textAlign: 'center',
        fontSize: '18px',
    }
}

ProfileSkill = Radium(ProfileSkill);
export default ProfileSkill;