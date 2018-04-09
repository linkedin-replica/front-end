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
import BorderedButton from '../buttons/BorderedButton';
import GrayTextButton from '../buttons/GrayTextButton';

class AdjacentGreyBorder extends Component {
    render() {
        const { greyText, blueText, size } = this.props;
        return (
            <div  style={styles.base}>
              <GrayTextButton name={greyText} size={size} type="Button"/>
              <BorderedButton name={blueText} color="blue" size={size} />
            </div>
        )
    };
}

AdjacentGreyBorder.propTypes = {
    greyText: PropTypes.string.isRequired,
    blueText: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const styles = {
    base: {

    },
    btnDiv: {
        display: 'inline-block',
        verticalAlign: 'top',
        paddingLeft: '1%',
        width: '50%'
    }
}

AdjacentGreyBorder = Radium(AdjacentGreyBorder);
export default AdjacentGreyBorder;
