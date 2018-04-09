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
        const { imgSrc, rounded, boldText, type, id, grayText, style, size } = this.props;
        return(
        <div style={style}>
            <span style={styles.imgDiv}>
                <AvatarImage imgSrc={imgSrc} rounded={rounded} />
            </span>
            <span style={styles.textDiv}>
                <BoldLink text={boldText} type={type} id={id}/>
                <GrayText text={grayText} style={styles.text}/>
            </span>
        </div>
    )};    
}

DetailsHeader.propTypes = {
    imgSrc: PropTypes.string,
    rounded: PropTypes.bool,
    boldText: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    grayText: PropTypes.string,
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    imgDiv: {
        paddingRight:'2%',
        verticalAlign:'top'
    },
    textDiv: {
        display: 'inline-block',
        verticalAlign:'top'
    },
    text: {
        margin:'0px',
        maxWidth:'300px',
        overflow:'hidden',
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