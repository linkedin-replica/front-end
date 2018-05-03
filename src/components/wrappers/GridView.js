/**
 * A grid adapter which is responsible for rendering all types of lists in a grid view
 * takes input data and a single view, then renders a grid containing
 * this view rendered for each data item
 * It can also be split horizontally and vertically to have some spacing
 *  */

import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, borders } from '../../resources/constants';

class GridView extends Component {

    /**
     * render function is what returns the component view
     */
    render() {
        const {
            data,
            gridItemView,
            style,
            size,
            horizontalSplit,
            verticalSplit,
          } = this.props;

        return (
            <ul style={[
                styles.base,
                style,
                horizontalSplit ? styles.horizontalSplit : styles.noSplit,
                verticalSplit ? styles.verticalSplit : styles.noSplit
            ]}>
                {
                    data.map((item, index) => (
                        <li key={`${gridItemView.displayName}${index}`}
                            style={[styles.listItem,
                            size ? styles[size] : styles['md']]}>
                            {React.createElement(gridItemView, { ...item, style: [styles.item] })}
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
GridView.propTypes = {
    data: PropTypes.array.isRequired,
    gridItemView: PropTypes.node.isRequired,
    style: PropTypes.object, // Content style
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    horizontalSplit: PropTypes.bool,
    verticalSplit: PropTypes.bool
};

/**
 * Write here the CSS required for the component, instead of '-' it will be in camelCase
 */
const styles = {
    base: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap'
    },
    listItem: {
        textAlign: 'center'
    },
    item: {
        width: '100%',
    },
    horizontalSplit: {
        margin: 'auto 5px'
    },
    verticalSplit: {
        margin: '5px auto'
    },
    noSplit: {
        margin: 0
    },
    sm: {
        flex: '25%'
    },
    md: {
        flex: '33.33333%',
    },
    lg: {
        flex: '50%'
    }
}

// Wrap it with Radium
GridView = Radium(GridView);

export default GridView;
