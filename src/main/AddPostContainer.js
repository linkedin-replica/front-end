import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import AddPost from '../components/posts/AddPost';
import { toast } from 'react-toastify';
import Radium from 'radium';

class AddPostContainer extends Component {

    state = {
        addPostContent: '',
        inputFile: null
    }

    componentDidMount() {

    }

    handleChange = (key) => (event) => {
        this.setState({
            [key]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const { loggedInUser, isArticle, isCompanyPost} = this.props
        const { addPostContent, img, video } = this.state

        let request = isArticle?
        api.addArticle(loggedInUser.userId, addPostContent, img, video, isCompanyPost):
        api.addPost(loggedInUser.userId, addPostContent, img, video, isCompanyPost)

            request.then(res => {
                toast.success("Added a new post")
            })
            .catch(err =>
                toast.error(err.response.data.error)
            )
    }

    handleMediaClick = (event) => {
        this.upload.click()
    };
    render() {
        const { addPostContent } = this.state;
        return (
            <section class="add-post">
                <AddPost
                    addPostContent={addPostContent}
                    handleChange={this.handleChange}
                    handleMediaClick={this.handleMediaClick}
                    handleSubmit={this.handleSubmit}
                />
                <input id="myInput"
                    type="file" ref={(ref) => this.upload = ref}
                    style={styles.input}
                    onChangeCapture={this.handleChange('inputFile')}
                />
            </section>
        );
    }
}

const styles = {
    input: {
        display: 'none',
    }
}
AddPostContainer.propTypes = {
    loggedInUser: PropTypes.object.isRequired,
    isCompany: PropTypes.bool,
    isArticle: PropTypes.bool,
};


export default Radium(AddPostContainer);
