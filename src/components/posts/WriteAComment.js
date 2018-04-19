import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import InputForm from './InputForm';
import AvatarImage from '../images/AvatarImage';


class WriteAComment extends Component {

    render() {
        const {src, rounded, visibility} = this.props
        return (
            <div>
            <span style={styles.imgDiv}>
                <AvatarImage src={src} rounded={rounded} size = 'sm' />
            </span>
            <span style={styles.commentDiv}>
                 <InputForm placeholder="Write a comment" commentBool={true} />
            </span>
        </div>
           
        )
    };
}

WriteAComment.propTypes = {
    src: PropTypes.string,
    rounded: PropTypes.bool
};

const styles = {
  
    imgDiv: {
       
    },
    commentDiv: {
        display: 'inline-block',
        marginLeft: '0.3em',
        position: 'relative',
        bottom: '0.7em',
        width: '400px'
        
    },
}

WriteAComment = Radium(WriteAComment);
export default WriteAComment;