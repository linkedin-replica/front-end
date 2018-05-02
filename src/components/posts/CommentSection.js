import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import WriteAComment from './WriteAComment';
import ListAdapter from '../wrappers/ListAdapter';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import CommentContainer from '../../main/CommentContainer';

class CommentsSection extends Component {

    render() {
        const { loggedInUser, visibility, comments, ...rest } = this.props
        const newComments = comments.map(comment => ({ ...comment, loggedInUser }))
        return (
            <div style={[styles.base, visibility ? styles.clicked : styles.base]} >
                <WriteAComment style={styles.addComment} loggedInUser={loggedInUser} {...rest} />
                <ListAdapter data={newComments} listItemView={CommentContainer} style={styles.commentList} />
            </div>
        )
    };
}

CommentsSection.propTypes = {
    type: PropTypes.string,
    id: PropTypes.string,
    visibility: PropTypes.bool,
    comments: PropTypes.array,
}

const styles = {
    base: {
        display: 'none',
        width: '100%'
    },
    addComment: {
        padding: paddings.wrapper,
    },
    commentList: {
        background: colors.lightBlue,
        width: '100%'
    },
    clicked: {
        display: 'block'
    },
    wrapper: {
        padding: paddings.wrapper,
    }
}



CommentsSection = Radium(CommentsSection);
export default CommentsSection;