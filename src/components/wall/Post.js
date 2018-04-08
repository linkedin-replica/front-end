import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import DetailsHeader from '../details/DetailsHeader';
import IconTextButton from '../buttons/IconTextButton';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import PostContent from './PostContent';

class Posts extends Component {

    render() {
        const { postContent, ...rest } = this.props;
        return (
            <WhiteWrapper style={styles.base}>
                <DetailsHeader {...rest} />
                <PostContent postContent={postContent} />
                <div style={styles.buttons}>
                    <IconTextButton name="Like" type="like" />
                    <IconTextButton name="Comment" type="comment" />
                    <IconTextButton name="Share" type="share" />
                </div>
            </WhiteWrapper>
        )
    };
}

Posts.propTypes = {
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    src: PropTypes.string,
    rounded: PropTypes.bool,
    header: PropTypes.string,
    subHeader: PropTypes.string,
    postContent: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string
};

const styles = {
    base: {
        padding: paddings.wrapper,
    },
    buttons: {
        paddingTop: '5px'
    }
}

Posts = Radium(Posts);
export default Posts;