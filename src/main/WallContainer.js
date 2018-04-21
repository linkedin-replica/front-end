import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import Wall from '../components/wall/Wall';

class WallContainer extends Component {

    state = {
        posts: [],
        comments: [],
        imageButton: false,
        videoButton: false
    }

    constructor(props) {
        super(props)

        const { mockData } = this.props;
        if (mockData)
            this.state.posts = mockData

    }
    imageButtonHandler = () => {
        this.setState({
          imageButton: !this.state.imageButton
        });
        console.log("image button: ", this.state.imageButton);
      };
    
      videoButtonHandler = () => {
        this.setState({
          videoButton: !this.state.videoButton
        });
        console.log("video button: ", this.state.videoButton);
      };
    componentDidMount() {

    }

    render() {
        const { posts, comments } = this.state;
        return (
            <Wall posts={posts}
                comments={comments}
             />
        );
    }
}

WallContainer.propTypes = {
    userID: propTypes.string,
    firstName: propTypes.string,
    lastName: propTypes.string,
    headline: propTypes.string,
    profilePictureUrl: propTypes.string
};


export default WallContainer;