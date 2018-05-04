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
        const { loggedInUser, isCompany, isArticle, companyId } = this.props
        console.log("companyId   " + companyId)
        return (
            <div style={styles.base}>
                <AddPostContainer isCompany={isCompany} isArticle={isArticle} loggedInUser={loggedInUser} companyId={companyId} />
                <section>
                    {isArticle ?
                        <ArticlesContainer /> :
                        <PostsContainer loggedInUser={loggedInUser} isCompany={isCompany} companyId={companyId}/>
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
    loggedInUser: PropTypes.object,
    isCompany: PropTypes.bool,
    isArticle: PropTypes.bool
};


export default WallContainer;
