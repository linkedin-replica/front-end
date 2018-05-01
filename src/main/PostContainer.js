import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import Post from '../components/posts/Post';

class PostContainer extends Component {

    state = {
        likeCounter: 0,
        liked: false,
        showComments: false,
    }
    componentDidMount() {
        api.getPostComments()
    }

    constructor(props) {
        super(props)

        const { mockData } = this.props;
        if (mockData)
            this.state.posts = mockData
    }

    likeButtonHandler = () => {
        this.setState({
            likeCounter: this.state.likeCounter += (this.state.isLiked ? -1 : 1),
            isLiked: !this.state.isLiked
        });
        console.log("like counter: ", this.state.likeCounter)

    }


    commentButtonHandler = () => {
        this.setState({
            visibility: !this.state.visibility
        });

    }

    render() {
        const { posts } = this.state;
        return (
            <Post />
        );
    }
}

PostContainer.propTypes = {
    text: PropTypes.string,
    images: PropTypes.string,
    videos: PropTypes.string,
    commentsCount: PropTypes.string,
    timestamp: PropTypes.number,
    likers: PropTypes.object,
    liked: PropTypes.bool,
    authorName: PropTypes.string,
    authorProfilePictureUrl: PropTypes.string,
    headline: PropTypes.string
};


export default PostContainer;