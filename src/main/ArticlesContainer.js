import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ArticleContainer from './ArticleContainer';
import ListAdapter from '../components/wrappers/ListAdapter';
import api from '../api/api';
import { toast } from 'react-toastify';
import RecommendedArticles from '../components/articles/RecommendedArticles'

class ArticlesContainer extends Component {

    state = {
        articles: []
    }

    constructor(props) {
        super(props)

        const { mockData } = this.props;
        if (mockData)
            this.state.articles = mockData
    }

    componentDidMount() {
        api.getTrendingArticlesRecommendations()
            .then(res => {
                this.setState({
                    articles: res.data.results
                })
            }).catch(err => toast.error(err.response.data.error))
    }

    render() {
        const { articles } = this.state;
        return (
            <RecommendedArticles recommendedArticlesData = {articles}/>
        );
    }
}

ArticlesContainer.propTypes = {
    mockData: PropTypes.array
};

export default ArticlesContainer;
