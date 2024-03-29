import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, borders } from '../../resources/constants.js'

class LabeledInput extends Component {
    render() {
        // Directly get the needed props
        const { id, label, placeholder, text, type, handleChange, handleSubmit, size, style, isRequired } = this.props;
        return (
            <div className="form-input">
                <label htmlFor={id} style={styles.label}>{label}</label>
                <input
                    style={[styles.base, size ? styles[size] : styles['md'], style]}
                    type={type}
                    value={text}
                    placeholder={placeholder}
                    onChangeCapture={handleChange}
                    onKeyUp={handleSubmit ? handleSubmit : () => { }}
                    required={isRequired}
                />
            </div>
        );
    }
}

LabeledInput.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    text: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    size: PropTypes.oneOf(["sm", "md", "lg"]),
};

const styles = {
    base: {
        height: '25px',
        padding: '5px',
        borderRadius: borders.button.radius.normal,
        border: 'none',
        width: '100%',
        display: 'block'
    },

    label: {
        fontSize: '0.7em'
    }
}

LabeledInput = Radium(LabeledInput);

export default LabeledInput;
