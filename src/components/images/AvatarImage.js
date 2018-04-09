/**
    The avatar image used in all headers in different sizes,
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


class AvatarImage extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { imgSrc, rounded, style, size } = this.props;
        return (
            <span style={style}>
                <img src={imgSrc} style={[rounded ? styles.img : styles.imgSqaured,
                size ? styles[size] : styles['md']]} />
            </span>
        );
    }
}

// Define the passed input types for this component
AvatarImage.propTypes = {
    imgSrc: PropTypes.string,
    rounded: PropTypes.bool,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};


const styles = {
    img: {
        borderRadius: '50%'
    },
    imgSqaured: {
        borderRadius: '0%'
    },
    sm: {
        height: '2%',
        width: '2%'
    },
    md: {
        height: '4%',
        width: '4%'
    },
    lg: {
        height: '8%',
        width: '8%'
    }
}

AvatarImage = Radium(AvatarImage);
export default AvatarImage;