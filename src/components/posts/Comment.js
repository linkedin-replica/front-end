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
            headLine,
            liked,
            text,
            handleLikeButton,
            handleReplyButton,
            showReplies,
            replies,
            style,
            ...rest } = this.props;

        return (
            <section style={styles.base}>
                <DetailsHeader
                    img={authorProfilePictureUrl}
                    header={authorName}
                    subHeader={headLine}
                    rounded
                    type={type}
                    imgSize="sm"
                    id={authorId} />
                <p style={styles.text}>{text}</p>
                <div style={styles.buttons} >
                    <IconTextButton name="Like" type="like" onClick={handleLikeButton} style={liked ? styles.likedButton : ''} />
                    <IconTextButton name="Reply" type="comment" onClick={handleReplyButton} />
                </div>
                <ReplySection
                    {...loggedInUser}
                    header={authorName}
                    subHeader={headLine}
                    rounded
                    type={type}
                    id={authorId}
                    visibility={showReplies}
                    replies={replies}
                    {...rest}
                    style={styles.replies}
                />
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
        borderBottom: `1px solid ${colors.lightGray}`
    },
    buttons: {
        paddingTop: '2px'
    },
    likedButton: {
        color: colors.darkBlue
    },
    text: {
        padding: '5px 20px',
        margin: 0
    }
}

Comment = Radium(Comment);
export default Comment;