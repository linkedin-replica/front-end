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

class DetailsHeader extends Component {
    render() {
        <div>

        </div>
    };
}

DetailsHeader.propTypes = {

    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};