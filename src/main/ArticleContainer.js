import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import PostContainer from './PostContainer';
import ListAdapter from '../components/wrappers/ListAdapter';
import api from '../api/api';
import { toast } from 'react-toastify';
import { postsLimit } from '../resources/constants';
import { withRouter } from 'react-router'

class ArticleContainer extends Component {

    state = {
        post: []
    }

    constructor(props) {
        super(props)

        if (props.data)
            this.state.posts = props.data
    }

    componentDidMount() {
        if (this.props.data) return;
        const { loggedInUser, match } = this.props

        const request = api.getArticle(match.params.id)

        request
            .then(res => {
                this.setState({
                    post: res.data.results
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
        const { post } = this.state;
        const { loggedInUser } = this.props;
        const newPost = { ...post, loggedInUser, handleEditPost: this.handleEditPost(post.postId), handleDeletePost: this.handleDeletePost(post.postId) }

        return (
            <PostContainer {...newPost} loggedInUser={loggedInUser} />
        );
    }
}

ArticleContainer.propTypes = {
    loggedInUser: PropTypes.object
};


export default withRouter(ArticleContainer);
