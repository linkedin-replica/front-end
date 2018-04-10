import React, { Component } from 'react';
import Radium from 'radium';
import PropTypes from 'prop-types'
import { colors, paddings } from '../../resources/constants';


class InputForm extends Component {


    render() {
        return (
        <span style = {styles.base}>    
        <form >
        <input style = {styles.text} type="text" name="fname" autocomplete="off" placeholder=" Add a comment..."/>
        </form>
        </span>
        )
    };
}


const styles = {
    base: {
       
    },
    text:{
        padding: '0.3%',
        width:"100%",
        height:"25px",
        maxWidth: '100%',
        overflow:'hidden',
                
    }
}

InputForm = Radium(InputForm);
export default InputForm;