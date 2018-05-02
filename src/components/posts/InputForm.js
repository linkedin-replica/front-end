import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';


class InputForm extends Component {

    render() {
        const { placeholder, commentBool, value, handleChange } = this.props
        return (
            <span style={styles.base}>
                <form >
                    <input style={[commentBool ? styles.comment : styles.post]}
                        type="text"
                        autoComplete="off"
                        placeholder={placeholder}
                        value={value}
                        onChangeCapture={handleChange} />
                </form>
            </span>
        )
    };
}


const styles = {
    base: {

    },
    comment: {
        padding: '0.3%',
        width: "118%",
        height: "25px",
        maxWidth: '150%',
        overflow: 'hidden',

    },
    post: {
        border: 'none',
        width: "120%",
        padding: '2%',
        fontSize: '1.2em',
        textAlign: 'center',
        marginTop: '0.9em',

    }
}

InputForm = Radium(InputForm);
export default InputForm;