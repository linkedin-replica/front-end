import React from 'react'
import PropTypes from 'prop-types'
import RecommendedArticle from './RecommendedArticle'
import ListAdapter from '../wrappers/ListAdapter'

class RecommendedArticles extends React.Component {
    render() {
        const { recommendedArticlesData } = this.props;
        return (
            <ListAdapter listItemView={RecommendedArticle} data={recommendedArticlesData} verticalSplit />
        );
    }
}

RecommendedArticles.propTypes = {
    recommenjodedArticlesData: PropTypes.array
}

export default RecommendedArticles;
