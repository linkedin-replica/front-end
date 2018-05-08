import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors } from '../../resources/constants';
import GridView from '../wrappers/GridView';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import GrayText from '../typography/GrayText';
import FriendRecommendationItem from '../connections/FriendRecommendationItem';

class FriendRecommendations extends Component {
    render() {
        const { data,
            style,
            size,
            horizontalSplit,
            verticalSplit } = this.props;
        return (
            <WhiteWrapper>
                <div style={styles.center}>
                    <GrayText
                        text="People You May Know"
                        size="lg"
                    />
                </div>
                <GridView
                    data={this.props.data}
                    gridItemView={FriendRecommendationItem} />
            </WhiteWrapper>
        )
    };
}



FriendRecommendations.propTypes = {
    data: PropTypes.array,
    style: PropTypes.object, // Content style
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    horizontalSplit: PropTypes.bool,
    verticalSplit: PropTypes.bool,

};

const styles = {
    base: {

    },
    whiteWrapper: {

    },
    title: {
        size: "md"
    },
    center: {
        paddingLeft: '20px',
        paddingTop: '2px'
    }
}

FriendRecommendations = Radium(FriendRecommendations);
export default FriendRecommendations;