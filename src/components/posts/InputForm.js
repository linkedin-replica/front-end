import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';


class InputForm extends Component {

    render() {
        const { placeholder, commentBool, value, handleChange } = this.props
        return (
            <textarea style={[styles.base, commentBool ? styles.comment : styles.post]}
                type="text"
                autoComplete="off"
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
        padding: '0.3%',
        width: "118%",
        height: "25px",
        maxWidth: '150%',
        overflow: 'hidden',

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