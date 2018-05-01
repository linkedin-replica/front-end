import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import AddPost from '../components/posts/AddPost';

class AddPostContainer extends Component {

    state = {
        addPostContent: '',
        img: null,
        video: null
    }

    componentDidMount() {

    }

    handleChange = (event) => {
        this.setState({
            addPostContent: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { userId } = this.props
        const { addPostContent, img, video } = this.state

        api.addPost(userId, addPostContent, img, video)
            .then(res => {
                console.log(res.data.results)
            })
            .catch(err => console.log(err))
    }

    imageButtonHandler = (event) => {
        this.setState({
            img: event.target.files[0]
        });
    };

    videoButtonHandler = (event) => {
        this.setState({
            video: event.target.files[0]
        });
    };

    render() {
        const { addPostContent } = this.state;
        return (
            <AddPost
                addPostContent={addPostContent}
                handleChange={this.handleChange}
                imageButtonHandler={this.imageButtonHandler}
                videoButtonHandler={this.videoButtonHandler}
            />
        );
    }
}

AddPostContainer.propTypes = {
    userId: PropTypes.string.isRequired,
    isCompany: PropTypes.bool,
    isArticle: PropTypes.bool,
};


export default AddPostContainer;