import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';
import InputForm from './InputForm';
import AvatarImage from '../images/AvatarImage';


class WriteAComment extends Component {

    render() {
        const {src, rounded, state} = this.props
        console.log(src)
        return (
            <div style={[styles.base, state ? styles.clicked: styles.base]} >
            <span style={styles.imgDiv}>
                <AvatarImage src={src} rounded={rounded} size = 'sm' />
            </span>
            <span style={styles.commentDiv}>
                 <InputForm />
            </span>
        </div>
           
        )
    };
}

WriteAComment.propTypes = {
    src: PropTypes.string,
    state: PropTypes.bool
};

const styles = {
    base: {
        display:'block'
    },
    clicked: {
        display:'hidden'
    },
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