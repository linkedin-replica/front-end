import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import Post from '../components/posts/Post';
import { commentsLimit } from '../resources/constants';
import { toast } from 'react-toastify';

class PostContainer extends Component {

    state = {
        likesCount: 0,
        commentsCount: 0,
        liked: false,
        showComments: false,
        comments: [],
        likers: [],
        addCommentText: '',

    }
    componentDidMount() {
        const { postId, loggedInUser } = this.props
        api.getPostComments(postId, loggedInUser.userId, commentsLimit)
            .then(res => {
                this.setState({
                    comments: res.data.results
                })
            }).catch(err => toast.error(err.response.data.error))
    }

    constructor(props) {
        super(props)

        let isLiked = props.likers.find(({ likerId }) => likerId === props.loggedInUser.userId)
        this.state = {
            ...this.state,
            liked: isLiked,
            likeCount: props.likers.length,
            commentsCount: props.commentsCount,
            likers: props.likers,
        }
    }

    handleLikeButton = (event) => {
        const { loggedInUser, postId } = this.props
        const { liked, likesCount } = this.state

        let request = liked ?
            api.deletePostLike(loggedInUser.userId, postId) :
            api.likePost(loggedInUser.userId, postId)

        request
            .then(res => {
                this.setState((prevState) => ({
                    likesCount: likesCount + (liked ? -1 : 1),
                    liked: !prevState.liked
                }));
            })
            .catch(err => toast.error(err.response.data.error))
    }


    handleCommentButton = (event) => {
        const { showComments } = this.state
        this.setState({
            showComments: !showComments
        });
    }

    handleSubmitComment = (event) => {
        // Enter was pressed without shift key
        if (event.key === 'Enter' && !event.shiftKey) {
            event.preventDefault();
            const { addCommentText } = this.state
            const { postId, loggedInUser } = this.props

            if (addCommentText.length == 0 || addCommentText === '\n')
                return

            api.addPostComment(postId, loggedInUser.userId, addCommentText)
                .then(res => {
                    toast.success("Added comment successfully")
                    this.setState({
                        addCommentText: ''
                    })
                }).catch(err => toast.error(err.response.data.error))
        }
    }

    handleChangeComment = (event) => {
        // Enter was pressed without shift key
        if (event.key === 'Enter' && !event.shiftKey || this.state.receiverId === '' || this.state.inputMessage === '\n') {
            event.preventDefault();
            this.setState({
                addCommentText: ''
            })
        }
        else {
            this.setState({
                addCommentText: event.target.value
            })
        }
    }

    handleSubmitComment
    render() {
        const { addCommentText, liked } = this.state
        const { images, videos } = this.props
        let postContent = images ? images[0] : (videos ? videos[0] : '')
        let postType = images.length > 0 ? 'img' : (videos.length > 0 ? 'video' : '')

        return (
            <Post
                {...this.props}
                {...this.state}
                postContent={postContent}
                postType={postType}
                handleLikeButton={this.handleLikeButton}
                handleCommentButton={this.handleCommentButton}
                addCommentText={addCommentText}
                handleChangeComment={this.handleChangeComment}
                handleSubmitComment={this.handleSubmitComment} />
        );
    }
}

PostContainer.propTypes = {
    loggedInUser: PropTypes.object,
    postId: PropTypes.string,
    text: PropTypes.string,
    images: PropTypes.array,
    videos: PropTypes.array,
    commentsCount: PropTypes.number,
    timestamp: PropTypes.number,
    likers: PropTypes.array,
    liked: PropTypes.bool,
    authorName: PropTypes.string,
    authorProfilePictureUrl: PropTypes.string,
    headLine: PropTypes.string
};


export default PostContainer;