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
import { colors } from '../../resources/constants'

class AvatarImage extends Component {
    render() {
        // Directly get the passed parameters from the props
        const { src, rounded, type, id, style, size } = this.props;
        return (
            <Link to={`/${type}/${id}`}>
                <img src={src}
                    // ref={img => this.img = img}
                    // onError={() => this.img.src = 'http://api.sportrocket.net/wp-content/themes/sr-theme/assets/images/blank-user-l.jpg'}
                    style={[style,
                        rounded ? styles.imgRounded : styles.imgSquared,
                        size ? styles[size] : styles['md'], { style }
                    ]} />
            </Link >
        );
    }
}

// Define the passed input types for this component
AvatarImage.propTypes = {
    src: PropTypes.string,
    rounded: PropTypes.bool,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg", "xl"]),
};


const styles = {
    imgRounded: {
        borderRadius: '50%',
    },
    imgSquared: {
        borderRadius: '0%',
    },
    sm: {
        height: '2em',
        width: '2em'
    },
    md: {

        height: '3em',
        width: '3em'
    },
    lg: {
        height: '5em',
        width: '5em'
    },
    xl: {
        height: '8em',
        width: '8em'
    }
}

AvatarImage = Radium(AvatarImage);
export default AvatarImage;
