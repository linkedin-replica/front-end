import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, borders } from '../../resources/constants.js'

class ProfileSectionItem extends Component {
    render() {
        //   const { text } = this.props;
        return (
            <div>

            </div>
        );
    }
}

ProfileSectionItem.propTypes = {
    title: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
    duration: PropTypes.string,
    imgSrc: PropTypes.string
};

const styles = {
    img: {
        align: "left",

    },
    textBox: {

    }
}

ProfileSectionItem = Radium(ProfileSectionItem);
export default ProfileSectionItem;