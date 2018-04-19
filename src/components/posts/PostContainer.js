import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import Wall from '../components/wall/Wall';

class WallContainer extends Component {

    state = {
        likeCounter: 0,
        isLiked:false,
        visibility : false,
       
    }

    likeButtonHandler = () => {
        this.setState({
            likeCounter: this.state.likeCounter+= (this.state.isLiked? -1:1),
            isLiked: !this.state.isLiked
        });
        console.log("like counter: ", this.state.likeCounter)
        
    }


    commentButtonHandler = () => {
        this.setState({
            visibility: !this.state.visibility
        });
        
    } 

    constructor(props) {
        super(props)

        const { mockData } = this.props;
        if (mockData)
            this.state.posts = mockData

    }
    
    componentDidMount() {

    }

    render() {
        const { posts, comments } = this.state;
        return (
            <Post 
             />
        );
    }
}

PostContainer.propTypes = {
    text: propTypes.string,
    images: propTypes.string,
    videos: propTypes.string,
    commentsCount: propTypes.string,
    timestamp: propTypes.number,
    likers: propTypes.object,
    liked: propTypes.bool,
    authorName: propTypes.string,
    authorProfilePictureUrl: propTypes.string,
    headline: propTypes.string


};


export default PostContainer;