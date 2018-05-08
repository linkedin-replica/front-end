/**
    The details header used in all headers in different sizes,
    sm: Small
    md: Medium
    lg: Large
    By default it's set to sm
*/
import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import BoldLink from '../typography/BoldLink';
import GrayText from '../typography/GrayText';
import AvatarImage from '../images/AvatarImage';

class DetailsHeader extends Component {
    render() {
        const { img, rounded, header, subHeader, type, id, style, size, imgSize, textSize } = this.props;
        return (
            <div style={[styles.base, style]}>
                <div>
                    <AvatarImage src={img}
                        rounded={rounded}
                        style={styles.img}
                        size={imgSize ? imgSize : size}
                        type={type}
                        id={id}
                    />
                </div>
                <div style={styles.textDiv}>
                    <BoldLink text={header}
                        type={type}
                        id={id}
                        size={textSize ? textSize : size} />
                    <GrayText text={subHeader}
                        style={styles.text}
                        size={textSize ? textSize : size} />
                </div>
            </div>
        )
    };
}

DetailsHeader.propTypes = {
    img: PropTypes.string,
    header: PropTypes.string,
    subHeader: PropTypes.string,
    rounded: PropTypes.bool,
    type: PropTypes.string,
    id: PropTypes.string,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const styles = {
    base: {
        display: 'flex',
    },
    textDiv: {
        display: 'inline-block',
        verticalAlign: 'top',
        paddingLeft: '2%',
        width: '100%'
    },
    text: {
        margin: '0px',
        maxWidth: '60%',
        overflow: 'hidden',
        textOverflow: 'ellipsis'
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

DetailsHeader = Radium(DetailsHeader);
export default DetailsHeader;
