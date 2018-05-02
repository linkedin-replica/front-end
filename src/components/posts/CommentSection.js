import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import WriteAComment from './WriteAComment';
import Comment from './Comment';
import ListAdapter from '../wrappers/ListAdapter';
import WhiteWrapper from '../wrappers/WhiteWrapper';

class CommentsSection extends Component {

    render() {
        const { profilePictureUrl, rounded, visibility, comments, ...rest } = this.props
        return (
            <div style={[styles.base, visibility ? styles.clicked : styles.base]} >
                <WriteAComment img={profilePictureUrl} rounded={rounded} {...rest} />
                <ListAdapter data={comments} listItemView={Comment} style={styles.commentList} />
            </div>
        )
    };
}

CommentsSection.propTypes = {
    img: PropTypes.string,
    header: PropTypes.string,
    subHeader: PropTypes.string,
    type: PropTypes.string,
    id: PropTypes.string,
    visibility: PropTypes.bool,
    comments: PropTypes.array,
}

const styles = {
    base: {
        display: 'none',
    },
    commentList: {
        background: colors.lightBlue,
        marginLeft: '-0.9em',
        padding: paddings.wrapper
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