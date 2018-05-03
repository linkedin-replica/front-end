import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import DetailsHeader from '../details/DetailsHeader';
import IconTextButton from '../buttons/IconTextButton';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import PostContent from './PostContent';
import WriteAComment from './WriteAComment';
import ReplySection from './ReplySection';
import IconButton from '../buttons/IconButton';


class Comment extends Component {
    constructor(props) {
        super(props)
        this.stateHandler = this.stateHandler.bind(this);
        this.state = {

        };
    }

    stateHandler = () => {
        this.setState({

        });

    }

    render() {
        const { type,
            loggedInUser,
            authorId,
            authorName,
            authorProfilePictureUrl,
            headline,
            liked,
            text,
            handleLikeButton,
            handleReplyButton,
            handleDeleteComment,
            handleDeleteReply,
            showReplies,
            replies,
            style,
            ...rest } = this.props;

        return (
            <section style={styles.base}>
                <IconButton type="close" style={styles.delete} size="sm" onClick={handleDeleteComment} />
                <DetailsHeader
                    img={authorProfilePictureUrl}
                    header={authorName}
                    subHeader={headline}
                    rounded
                    type={type}
                    imgSize="sm"
                    id={authorId} />
                <div style={styles.details}>
                    <p style={styles.text}>{text}</p>
                    <div style={styles.buttons} >
                        <IconTextButton name="Like" type="like" size="sm" onClick={handleLikeButton} style={liked ? styles.likedButton : ''} />
                        <IconTextButton name="Reply" type="comment" size="sm" onClick={handleReplyButton} />
                    </div>
                    <ReplySection
                        {...loggedInUser}
                        header={authorName}
                        subHeader={headline}
                        rounded
                        type={type}
                        id={authorId}
                        visibility={showReplies}
                        replies={replies}
                        {...rest}
                        style={styles.replies}
                    />
                </div>
            </section>
        )
    };
}

Comment.propTypes = {
    commentId: PropTypes.string,
    authorId: PropTypes.string,
    parentCommentId: PropTypes.string,
    repliesCount: PropTypes.number,
    text: PropTypes.string,
    timestamp: PropTypes.number,
    likers: PropTypes.array,
    authorName: PropTypes.string,
    authorProfilePictureUrl: PropTypes.string,
};

const styles = {
    base: {
        padding: paddings.wrapper,
        background: 'none',
        width: '100%',
        borderBottom: `1px solid ${colors.lightGray}`,
        position: 'relative',
    },
    buttons: {
        paddingTop: '2px'
    },
    likedButton: {
        color: colors.darkBlue
    },
    details: {
        margin: '0 0 0 8%'
    },
    text: {
        margin: 0,
        paddingTop: '3%'
    },
    delete: {
        position: 'absolute',
        top: '10px',
        right: '10px',
    }
}

Comment = Radium(Comment);
export default Comment;