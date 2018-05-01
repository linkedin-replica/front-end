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
        const { src, rounded, visibility, comments } = this.props
        // const commentData = {...rest}
        return (
            <div style={[styles.base, visibility ? styles.clicked : styles.base]} >

                <WriteAComment src={src} rounded={rounded} />
                {/* <ListAdapter data={comments} listItemView={Comment} style={styles.commentList} /> */}

            </div>

        )
    };
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