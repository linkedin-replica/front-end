import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PostContainer from './PostContainer';
import ListAdapter from '../components/wrappers/ListAdapter';
import api from '../api/api';
import { toast } from 'react-toastify';
import { postsLimit } from '../resources/constants';

class PostsContainer extends Component {

    state = {
        posts: []
    }

    componentDidMount() {
        const { loggedInUser, isCompany } = this.props

        const request =
            isCompany ?
                api.getCompanyPosts(loggedInUser.userId, postsLimit) :
                api.getNewsFeed(postsLimit)

        request
            .then(res => {
                this.setState({
                    posts: res.data.results
                })
            }).catch(err => toast.error(err.response.data.error))
    }

    render() {
        const { posts } = this.state;
        const { loggedInUser } = this.props;
        const newPosts = posts.map(post => ({ ...post, loggedInUser }))

        return (
            <ListAdapter data={newPosts} listItemView={PostContainer} verticalSplit />
        );
    }
}

PostsContainer.propTypes = {
    userId: PropTypes.string,
    isCompany: PropTypes.bool
};


export default PostsContainer;