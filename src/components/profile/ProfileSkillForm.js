import React, { Component } from 'react';
import Radium from 'radium';
import BlueButton from '../buttons/BlueButton';
import Modal from '../wrappers/Modal';
import PropTypes from 'prop-types';
import LabeledInput from '../forms/LabeledInput';
import { colors, borders } from '../../resources/constants.js';
import BorderedButton from '../buttons/BorderedButton';
import GrayText from '../typography/GrayText';

class ProfileSkillForm extends Component {
    render() {
        const { handleChange, handleSubmit, isOpen, toggleModal, text } = this.props
        return (
            <Modal style={styles.base}
                show={isOpen}
                onClose={toggleModal}
                btnText="Submit Form">
                <header>
                    <h1 style={styles.header}>
                        Profile Skill
                   </h1>
                </header>
                <form onSubmit={handleSubmit}>
                    <LabeledInput
                        id="title"
                        label="Text"
                        type="text"
                        text={text}
                        handleChange={handleChange('text')}
                    />
                    <div style={styles.buttonContainer}>
                        <BlueButton name="Submit" style={styles.button} size="sm" onClick={handleSubmit}></BlueButton>
                        <GrayText text="Cancel" style={styles.button} size="sm" onClick={toggleModal}></GrayText>
                    </div>

                </form>
            </Modal>
        )
    }
}

ProfileSkillForm.PropTypes = {
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
    history: PropTypes.object
}

const styles = {

    base: {
        padding: '10px',
        background: '#edf0f3',
        margin: '10px auto',
        padding: '30px',
        textAlign: 'left',
        fontSize: '1.5em',
        width: '400px'
    },
    buttonContainer: {
        paddingTop: '15px',
        textAlign: 'center'
    },
    textLabel: {
        fontSize: '0.7em',
        display: 'block'
    },
    header: {
        fontSize: '1em',
        textAlign: 'center'
    },
    button: {
        width: '100%',
        cursor: 'pointer',
    },
    input2: {
        height: '25px',
        padding: '5px',
        borderRadius: borders.button.radius.normal,
        border: 'none',
        width: '62%',
        display: 'inlineBlock'
    },
    greyLabel: {
        width: '50%',
        color: 'grey',
        fontSize: '0.5em',
        paddingRight: '2%'
    }
}

export default Radium(ProfileSkillForm)
