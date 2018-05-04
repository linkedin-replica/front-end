import React, { Component } from 'react';
import Radium from 'radium';
import Signup from '../components/login_signup/Signup'
import api from '../api/api'
import { withRouter } from 'react-router';
import { toast } from 'react-toastify';
import Modal from '../wrappers/Modal';
import UnlabeledInput from '../forms/UnlabeledInput';

class EditWallItem extends Component {

    render() {
        const { editText, onChangeText, ...rest } = this.props;

        return (
            <Modal {...rest}>
                <UnlabeledInput handleChange={onChangeText} text={editText} />
            </Modal>
        )
    }
}
EditWallItem = Radium(EditWallItem)

export default EditWallItem
