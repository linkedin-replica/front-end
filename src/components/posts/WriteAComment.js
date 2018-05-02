import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import InputForm from './InputForm';
import AvatarImage from '../images/AvatarImage';


class WriteAComment extends Component {

    render() {
        const { loggedInUser, addCommentText, handleChangeComment, handleSubmitComment, style } = this.props
        return (
            <div style={[styles.base, style]}>
                <span style={styles.imgDiv}>
                    <AvatarImage src={loggedInUser ? loggedInUser.profilePictureUrl : ''} rounded size='sm' />
                </span>
                <div style={styles.commentDiv}>
                    <InputForm placeholder="Write a comment"
                        commentBool={true}
                        value={addCommentText}
                        handleChange={handleChangeComment}
                        onKeyUp={handleSubmitComment}
                        commentBool />
                </div>
            </div>

        )
    };
}

WriteAComment.propTypes = {
    src: PropTypes.string,
    rounded: PropTypes.bool
};

const styles = {
    base: {
        display: 'flex',
        width: '80%'
    },
    imgDiv: {

    },
    commentDiv: {
        marginLeft: '0.3em',
        width: '100%'
    },
}

WriteAComment = Radium(WriteAComment);
export default WriteAComment;