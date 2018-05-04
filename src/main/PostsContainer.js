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

    constructor(props) {
        super(props)

        if (props.data)
            this.state.posts = props.data
    }

    componentDidMount() {
        const { loggedInUser, companyId, isCompany } = this.props
        console.log("companyId   " + companyId)

        const request =
            isCompany ?
                api.getCompanyPosts(companyId, postsLimit) :
                api.getNewsFeed(postsLimit)

        request
            .then(res => {
                this.setState({
                    posts: res.data.results
                })
            }).catch(err => toast.error(err.response.data.error))
    }

    handleDeletePost = (postId) => (event) => {

        api.deletePost(postId)
            .then(res => {
                toast.success("Post deleted successfully")
            }).catch(err => toast.error(err.response.data.error))
    }

    handleEditPost = (postId) => (event) => {

        api.editPost(postId)
            .then(res => {
                toast.success("Post edited successfully")
            }).catch(err => toast.error(err.response.data.error))
    }

    render() {

        const { posts } = this.state;
        const { loggedInUser } = this.props;
        const newPosts = posts.map(post => ({ ...post, loggedInUser, handleEditPost: this.handleEditPost(post.postId), handleDeletePost: this.handleDeletePost(post.postId) }))

        return (
            <ListAdapter data={newPosts} listItemView={PostContainer} verticalSplit />
        );
    }
}

PostsContainer.propTypes = {
    userId: PropTypes.string,
    companyId: PropTypes.string,
    isCompany: PropTypes.bool
};


export default PostsContainer;
