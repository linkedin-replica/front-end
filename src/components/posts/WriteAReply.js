import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import InputForm from './InputForm';
import AvatarImage from '../images/AvatarImage';


class WriteAReply extends Component {

    render() {
        const { img, rounded, addCommentText, handleChangeComment, handleSubmitComment } = this.props
        return (
            <div style={styles.base}>
                <span style={styles.imgDiv}>
                    <AvatarImage src={img} rounded={rounded} size='sm' />
                </span>
                <div style={styles.commentDiv}>
                    <InputForm placeholder="Write a reply"
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

WriteAReply.propTypes = {
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

WriteAReply = Radium(WriteAReply);
export default WriteAReply;