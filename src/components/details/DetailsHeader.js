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
        const { style, size } = this.props;
        return(
        <div style={[style, styles.base]}>
            <span style={styles.imgDiv}>
                <AvatarImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A" 
                rounded="false" />
            </span>
            <span style={styles.textDiv}>
                <BoldLink text="Mahmoud" type="profile" id="1"/>
                <GrayText text="Mahmoud ANd9GcRJcydiwgknIwVFh6Ltea5yDFzOGU_pP1b9DmuaBrh3TVoo2dAA6A" style={styles.text}/>
            </span>
        </div>
    )};    
}

DetailsHeader.propTypes = {
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"])
};

const styles = {
    base: {
        
    },
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
