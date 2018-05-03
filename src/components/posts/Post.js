import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import DetailsHeader from '../details/DetailsHeader';
import IconTextButton from '../buttons/IconTextButton';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import PostContent from './PostContent';
import CommentSection from './CommentSection';
import IconButton from '../buttons/IconButton';

class Post extends Component {

    render() {
        const { type,
            loggedInUser,
            postId,
            authorId,
            authorName,
            authorProfilePictureUrl,
            headline,
            liked,
            text,
            postContent,
            postType,
            handleLikeButton,
            handleCommentButton,
            handleDeletePost,
            showComments,
            comments,
            style,
            ...rest } = this.props;

        return (
            <WhiteWrapper style={styles.base}>
                <IconButton type="close" style={styles.delete} size="sm" onClick={handleDeletePost} />
                <div style={styles.main}>
                    <DetailsHeader
                        img={authorProfilePictureUrl}
                        header={authorName}
                        subHeader={headline}
                        rounded
                        type={type}
                        id={authorId} />
                    <PostContent text={text} postContent={postContent} type={postType} />
                    <div style={styles.buttons} >
                        <IconTextButton name="Like" type="like" onClick={handleLikeButton} style={liked ? styles.likedButton : ''} />
                        <IconTextButton name="Comment" type="comment" onClick={handleCommentButton} />
                    </div>
                </div>
                <CommentSection
                    loggedInUser={loggedInUser}
                    header={authorName}
                    subHeader={headline}
                    rounded
                    type={type}
                    id={authorId}
                    visibility={showComments}
                    comments={comments}
                    postId={postId}
                    {...rest}
                />
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
        position: 'relative'
    },
    buttons: {
        paddingTop: '5px'
    },
    main: {
        padding: paddings.wrapper,
    },
    likedButton: {
        color: colors.darkBlue
    },
    delete: {
        position: 'absolute',
        top: '10px',
        right: '10px',
    }
}

Post = Radium(Post);
export default Post;