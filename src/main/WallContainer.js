import io from 'socket.io-client';
import React, { Component } from 'react';
import PropTypes from 'prop-types'
import api from '../api/api';
import AddPostContainer from './AddPostContainer';
import PostsContainer from './PostsContainer';
import ArticlesContainer from './ArticleContainer';
import { colors } from '../resources/constants';

class WallContainer extends Component {

    render() {
        const { userId, isCompany, isArticle } = this.props
        return (
            <div style={styles.base}>
                <AddPostContainer isCompany={isCompany} isArticle={isArticle} userId={userId} />
                <section>
                    {isArticle ?
                        <ArticlesContainer /> :
                        <PostsContainer />
                    }
                </section>
            </div >
        );
    }
}

const styles = {
    base: {
        background: colors.whiteGray,
        display: 'block',
        padding: '10px'
    },
    header: {
        textAlign: 'center'
    }
}

WallContainer.propTypes = {
    userID: PropTypes.string.isRequired,
    isCompany: PropTypes.bool,
    isArticle: PropTypes.bool
};


export default WallContainer;