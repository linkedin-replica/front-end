import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import DetailsHeader from '../details/DetailsHeader';
import IconTextButton from '../buttons/IconTextButton';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import PostContent from './PostContent';
import CommentSection from './CommentSection';

class Post extends Component {
    constructor(props) {
        super(props)
        this.likeButtonHandler = this.likeButtonHandler.bind(this);
        this.commentButtonHandler = this.commentButtonHandler.bind(this);
        this.shareButtonHandler = this.shareButtonHandler.bind(this);
        this.state = {
            likeCounter: 0,
            isLiked: false,
            visibility: false,
            shareCounter: 0
        };
    }

    render() {
        const { postContent, ...rest } = this.props;
        return (
            <div style={styles.test}>
                <WhiteWrapper style={styles.base}>
                    <DetailsHeader {...rest} />
                    <PostContent postContent={postContent} />
                    <div style={styles.buttons} >
                        <IconTextButton name="Like" type="like" onClick={this.likeButtonHandler} style={this.state.isLiked ? styles.likedButton : ''} />
                        <IconTextButton name="Comment" type="comment" onClick={this.commentButtonHandler} />
                    </div>
                    <div>
                        <CommentSection {...rest} visibility={this.state.visibility} />
                    </div>
                </WhiteWrapper>
            </div>
        )
    };
}

Post.propTypes = {
    style: PropTypes.object, // Content defined styles
    size: PropTypes.oneOf(["sm", "md", "lg"]),
    img: PropTypes.string,
    rounded: PropTypes.bool,
    header: PropTypes.string,
    subHeader: PropTypes.string,
    postContent: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    action: PropTypes.func
};

const styles = {
    test: {
        align: 'justify'
    },
    base: {
        padding: paddings.wrapper,
    },
    buttons: {
        paddingTop: '5px'
    },
    likedButton: {
        color: colors.darkBlue
    }
}

Post = Radium(Post);
export default Post;