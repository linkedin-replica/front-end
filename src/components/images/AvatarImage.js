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
        const { src, rounded, type, id, style, size } = this.props;
        return (
            <Link to={`/${type}/${id}`}>
                <img src={src}
                    style={[
                        styles.base,
                        style,
                        rounded ? styles.imgRounded : styles.imgSquared,
                        size ? styles[size] : styles['md']
                    ]} />
            </Link>
        );
    }
}

// Define the passed input types for this component
AvatarImage.propTypes = {
    src: PropTypes.string.isRequired,
    rounded: PropTypes.bool,
    type: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};


const styles = {
    base: {

    },
    imgRounded: {
        borderRadius: '50%'
    },
    imgSquared: {
        borderRadius: '0%'
    },
    sm: {
        height: '1.5em',
        width: '1.5em'
    },
    md: {

        height: '2em',
        width: '2em'
    },
    lg: {
  height: '5em',
  width: '5em'
    },
    xl: {
      height: '16%',
      width: '16%'
    }
}

AvatarImage = Radium(AvatarImage);
export default AvatarImage;
