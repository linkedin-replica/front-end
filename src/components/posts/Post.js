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

    render() {
        const { type,
            loggedInUser,
            authorId,
            authorName,
            authorProfilePictureUrl,
            headLine,
            liked,
            text,
            postContent,
            postType,
            handleLikeButton,
            handleCommentButton,
            showComments,
            comments,
            style,
            ...rest } = this.props;

        return (
            <WhiteWrapper style={styles.base}>
                <DetailsHeader
                    img={authorProfilePictureUrl}
                    header={authorName}
                    subHeader={headLine}
                    rounded
                    type={type}
                    id={authorId} />
                <PostContent text={text} postContent={postContent} type={postType} />
                <div style={styles.buttons} >
                    <IconTextButton name="Like" type="like" onClick={handleLikeButton} style={liked ? styles.likedButton : ''} />
                    <IconTextButton name="Comment" type="comment" onClick={handleCommentButton} />
                </div>
                <div>
                    <CommentSection
                        {...loggedInUser}
                        header={authorName}
                        subHeader={headLine}
                        rounded
                        type={type}
                        id={authorId}
                        visibility={showComments}
                        comments={comments}
                        {...rest}
                    />
                </div>
            </WhiteWrapper>
        )
    };
}

Post.propTypes = {
    style: PropTypes.object, // Content defined styles
    authorId: PropTypes.string,
    authorProfilePictureUrl: PropTypes.string,
    authorName: PropTypes.string,
    headline: PropTypes.string,
    postContent: PropTypes.string,
    type: PropTypes.string,
    liked: PropTypes.bool,
    showComments: PropTypes.bool,
    comments: PropTypes.array,
    handleLikeButton: PropTypes.func,
    handleCommentButton: PropTypes.func,

};

const styles = {
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