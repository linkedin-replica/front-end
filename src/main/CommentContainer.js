import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import Post from '../components/posts/Post';
import { commentsLimit } from '../resources/constants';
import { toast } from 'react-toastify';

class CommentContainer extends Component {

    state = {
        likesCount: 0,
        repliesCount: 0,
        liked: false,
        showReplies: false,
        comments: [],
        likers: [],
        addReplyText: '',
    }
    componentDidMount() {
        const { commentId, loggedInUser } = this.props
        api.getReplies(commentId, loggedInUser.userId, commentsLimit)
            .then(res => {
                this.setState({
                    comments: res.data.results
                })
            }).catch(err => toast.error(err.response.data.error))
    }

    constructor(props) {
        super(props)

        this.setState({
            liked: props.liked,
            likeCount: props.likers.length,
            repliesCount: props.repliesCount,
            likers: props.likers
        })
    }

    handleLikeButton = () => {
        const { loggedInUser, commentId } = this.props
        const { liked, likesCount } = this.state

        let request = liked ?
            api.deleteLike(loggedInUser.userId, commentId) :
            api.likePost(loggedInUser.userId, commentId)

        request
            .then(res => {
                this.setState({
                    likesCount: likesCount + (liked ? -1 : 1),
                    liked: !liked
                });
            })
            .catch(err => toast.error(err.response.data.error))
    }


    handleReplyButton = () => {
        const { showReplies } = this.state
        this.setState({
            showReplies: !showReplies
        });
    }

    handleSubmitComment = (event) => {
        // Enter was pressed without shift key
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const { addReplyText } = this.state
            const { postId, commentId, loggedInUser } = this.props

            if (addReplyText.length == 0 || addReplyText === '\n')
                return

            api.replyPost(postId, commentId, loggedInUser.userId, addReplyText)
                .then(res => {
                    toast.success("Added reply successfully")
                    this.setState({
                        addReplyText: ''
                    })
                }).catch(err => toast.error(err.response.data.error))
        }
    }

    handleChangeComment = (event) => {
        // Enter was pressed without shift key
        if (event.key === 'Enter' && !event.shiftKey || this.state.receiverId === '' || this.state.inputMessage === '\n') {
            event.preventDefault();
            this.setState({
                addReplyText: ''
            })
        }
        else {
            this.setState({
                addReplyText: event.target.value
            })
        }
    }

    handleSubmitComment
    render() {
        const { addReplyText } = this.state
        const { images, videos } = this.props
        let postContent = images ? images[0] : (videos ? videos[0] : '')
        let postType = images ? 'img' : (videos ? 'video' : '')

        console.log(this.state)
        return (
            <Post
                {...this.props}
                {...this.state}
                postContent={postContent}
                postType={postType}
                handleLikeButton={this.handleLikeButton}
                handleReplyButton={this.handleReplyButton}
                addReplyText={addReplyText}
                handleChangeComment={this.handleChangeComment}
                handleSubmitComment={this.handleSubmitComment} />
        );
    }
}

CommentContainer.propTypes = {
    loggedInUser: PropTypes.object,
    commentId: PropTypes.string,
    text: PropTypes.string,
    images: PropTypes.array,
    videos: PropTypes.array,
    repliesCount: PropTypes.number,
    timestamp: PropTypes.number,
    likers: PropTypes.array,
    liked: PropTypes.bool,
    authorName: PropTypes.string,
    authorProfilePictureUrl: PropTypes.string,
    headLine: PropTypes.string
};


export default CommentContainer;