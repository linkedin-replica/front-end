import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PostContainer from './PostContainer';
import ListAdapter from '../components/wrappers/ListAdapter';
import api from '../api/api';

class PostsContainer extends Component {

    state = {
        posts: []
    }

    constructor(props) {
        super(props)

        const { mockData } = this.props;
        if (mockData)
            this.state.posts = mockData
    }

    componentDidMount() {
        api.getPosts()
            .then(res => {
                console.log(res)
                this.setState({
                    posts: res.data.results
                })
            }).catch(err => console.log(err))
    }

    render() {
        const { posts } = this.state;
        return (
            <ListAdapter data={posts} listItemView={PostContainer} verticalSplit />
        );
    }
}

PostsContainer.propTypes = {
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


export default PostsContainer;