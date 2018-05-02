import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings, borders } from '../../resources/constants';


class InputForm extends Component {

    render() {
        const { placeholder, commentBool, value, handleChange, onKeyUp } = this.props
        return (
            <textarea style={[styles.base, commentBool ? styles.comment : styles.post]}
                type="text"
                autoComplete="off"
                onKeyUpCapture={onKeyUp}
                placeholder={placeholder}
                value={value}
                onChangeCapture={handleChange} />
        )
    };
}


const styles = {
    base: {
        outline: 'none',
        resize: 'none',
    },
    comment: {
        width: '100%',
        paddingLeft: '2%',
        height: "25px",
        overflow: 'hidden',
        borderRadius: '15px'
    },
    post: {
        width: '100%',
        fontSize: '1.2em',
        borderBottom: `solid 0.02em ${colors.lightGray}`,
        borderTop: 'none',
        borderLeft: 'none',
        borderRight: 'none',
    }
}

InputForm = Radium(InputForm);
export default InputForm;