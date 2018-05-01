import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ArticleContainer from './ArticleContainer';
import ListAdapter from '../components/wrappers/ListAdapter';
import api from '../api/api';
import { toast } from 'react-toastify';

class ArticlesContainer extends Component {

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
        api.getTrendingArticlesRecommendations()
            .then(res => {
                this.setState({
                    posts: res.data.results
                })
            }).catch(err => toast.error(err.response.data.error))
    }

    render() {
        const { articles } = this.state;
        return (
            <ListAdapter data={articles} listItemView={ArticleContainer} verticalSplit />
        );
    }
}

ArticlesContainer.propTypes = {
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


export default ArticlesContainer;