import React from 'react'
import PropTypes from 'prop-types'
import RecommendedArticle from '../components/articles/RecommendedArticle'

class RecommendedArticleTest extends React.Component {
    render () {
        return (
            <RecommendedArticle {...dummyRecommendedArticle}/>    
        )
    }
}

const dummyRecommendedArticle = {
    authorId: '212918213424',
    postId: '9724874',
    title: 'Etsh is the best front-end developer ever',
    authorFirstName: 'Omar',
    authorLastName: 'Radwan',
    miniText: 'Etsh was born in cairo. He studied computer science engineering in the German University in Cairo. He taught us React mn awelo le a5ro ...',
    peopleTalking: 2048370
}

export default RecommendedArticleTest;
