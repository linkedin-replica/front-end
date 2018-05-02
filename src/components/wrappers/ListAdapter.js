/**
 * A list adapter which is responsible for rendering all types of lists
 * takes input data and a single view, then renders a list containing
 * this view rendered for each data item
 * It can also be split vertically to have some spacing
 *  */

import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, borders } from '../../resources/constants';

class ListAdapter extends Component {

    /**
     * render function is what returns the component view
     */
    render() {
        const {
            data,
            listItemView,
            style,
            size,
            verticalSplit
          } = this.props;

        console.log(data)
        return (
            <ul style={[
                styles.base,
                style,
                size ? styles[size] : styles.noSize
            ]}>
                {
                    data.map((item, index) => (
                        <li key={`${listItemView.displayName}${index}`}
                            style={verticalSplit ? styles.split : styles.noSplit}>
                            {React.createElement(listItemView, { ...item })}
                        </li>
                    ))
                }
            </ul>
        );
    }
}

/**
 * Define here what does this component take as props
 */
ListAdapter.propTypes = {
    data: PropTypes.array.isRequired,
    listItemView: PropTypes.node.isRequired,
    style: PropTypes.object, // Content style
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    verticalSplit: PropTypes.bool
};

/**
 * Write here the CSS required for the component, instead of '-' it will be in camelCase
 */
const styles = {
    base: {

    },
    split: {
        margin: '10px auto',
        borderBottom: '1px solid',
        borderBottomColor: colors.lightGray,
        maxWidth: '40em',
    },
    noSplit: {
        margin: 0
    },
    sm: {
        width: '710px'
    },
    md: {
        width: '1050px'
    },
    lg: {
        width: '1500px'
    },
    noSize: {
        width: '100%'
    }
}

// Wrap it with Radium
ListAdapter = Radium(ListAdapter);

export default ListAdapter;
