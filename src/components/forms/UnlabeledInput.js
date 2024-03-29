import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, borders } from '../../resources/constants.js'

class UnlabeledInput extends Component {
    render() {
        // Directly get the needed props
        const { placeholder, type, text, handleChange, handleSubmit, size, style, isRequired } = this.props;
        return (
            <input
                style={[styles.base, size ? styles[size] : styles['md'], style]}
                type={type}
                value={text}
                className='form-inline'
                placeholder={placeholder}
                onChange={handleChange}
                onKeyUp={handleSubmit ? handleSubmit : () => { }}
                required={isRequired}
            />
        );
    }
}

UnlabeledInput.propTypes = {
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const styles = {
    base: {
        height: '25px',
        padding: '5px',
        outline: 'none',
        borderRadius: borders.button.radius.normal,
        border: 'none'
    },
    sm: {
        width: '150px'
    },
    md: {
        width: '200px',
    }
}

UnlabeledInput = Radium(UnlabeledInput);

export default UnlabeledInput;
