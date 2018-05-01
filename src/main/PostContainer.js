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
        likers: []
    }
    componentDidMount() {
        const { postId, userId } = this.props
        api.getPostComments(postId, userId, commentsLimit)
            .then(res => {
                this.setState({
                    comments: res.data.results
                })
            }).catch(err => toast.error(err.response.data.error))
    }

    constructor(props) {
        super(props)

        this.state = {
            liked: props.liked,
            likeCount: props.likers.length,
            commentsCount: props.commentsCount,
            likers: props.likers
        }
    }

    handleLikeButton = () => {
        const { userId, postId } = this.props
        const { liked, likesCount } = this.state

        let request = liked ?
            api.deleteLike(userId, postId) :
            api.likePost(userId, postId)

        request
            .then(res => {
                this.setState({
                    likesCount: likesCount + (liked ? -1 : 1),
                    liked: !liked
                });
            })
            .catch(err => toast.error(err.response.data.error))
    }


    handleCommentButton = () => {
        const { showComments } = this.state
        this.setState({
            showComments: !showComments
        });
    }

    render() {
        const { images, videos } = this.props
        let postContent = images ? images[0] : (videos ? videos[0] : '')
        return (
            <Post
                {...this.props}
                {...this.state}
                postContent={this.postContent}
                handleLikeButton={this.handleLikeButton}
                handleCommentButton={this.handleCommentButton} />
        );
    }
}

PostContainer.propTypes = {
    userId: PropTypes.string,
    postId: PropTypes.string,
    text: PropTypes.string,
    images: PropTypes.string,
    videos: PropTypes.string,
    commentsCount: PropTypes.string,
    timestamp: PropTypes.number,
    likers: PropTypes.object,
    liked: PropTypes.bool,
    authorName: PropTypes.string,
    authorProfilePictureUrl: PropTypes.string,
    headLine: PropTypes.string
};


export default PostContainer;