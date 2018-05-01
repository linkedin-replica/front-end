import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { colors } from '../../resources/constants';
import BorderedButton from '../buttons/BorderedButton';
import GrayTextButton from '../buttons/GrayTextButton';

class AdjacentGreyBorder extends Component {
    render() {
        const { greyText, blueText, size, greyOnClick, blueOnClick } = this.props;
        return (
          <div  style={[styles.base, styles.btnDiv]}>
            <GrayTextButton name={greyText} size={size} type="Button" onClick = {greyOnClick}/>
            <BorderedButton name={blueText} color="blue" size={size} onClick = {blueOnClick} />
          </div>
        )
    };
}

AdjacentGreyBorder.propTypes = {
    greyText: PropTypes.string.isRequired,
    blueText: PropTypes.string.isRequired,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    greyOnClick: PropTypes.func,
    blueOnClick: PropTypes.func,
};

const styles = {
    base: {

    },
    btnDiv: {
        paddingTop: '5px'
    }
}

AdjacentGreyBorder = Radium(AdjacentGreyBorder);
export default AdjacentGreyBorder;
