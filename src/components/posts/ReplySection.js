import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import WriteAComment from './WriteAComment';
import Comment from './Comment';
import ListAdapter from '../wrappers/ListAdapter';
import WhiteWrapper from '../wrappers/WhiteWrapper';
import WriteAReply from './WriteAReply';
import Reply from './Reply';

class ReplySection extends Component {

    render() {
        const { profilePictureUrl, rounded, visibility, replies, ...rest } = this.props
        return (
            <div style={[styles.base, visibility ? styles.clicked : styles.base]} >
                <WriteAReply img={profilePictureUrl} rounded={rounded} {...rest} />
                <ListAdapter data={replies} listItemView={Reply} style={styles.commentList} />
            </div>
        )
    };
}

ReplySection.propTypes = {
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
        width: '100%',
        background: colors.lightBlue,
    },
    addComment: {
        padding: paddings.wrapper,
    },
    commentList: {
        width: '100%'
    },
    clicked: {
        display: 'block'
    },
    wrapper: {
        padding: paddings.wrapper,
    }
}



ReplySection = Radium(ReplySection);
export default ReplySection;