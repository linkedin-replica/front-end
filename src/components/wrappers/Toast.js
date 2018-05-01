import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Radium from 'radium';
import { colors } from '../../resources/constants';

class Toast extends Component {
    notifySuccess = (text) => toast.success(text, {
        position: toast.POSITION.BOTTOM_LEFT
    });
    notifyError = (text) => toast.error(text, {
        position: toast.POSITION.BOTTOM_LEFT
    });

    componentDidMount() {
        const { text, isSuccess } = this.props

        if (isSuccess)
            this.notifySuccess(text)
        else
            this.notifyError(text)
    }

    render() {
        return (
            <ToastContainer style={styles.base} autoClose={4000} />
        );
    }
}

const styles = {
    base: {
        height: '50px',
        fontWeight: 'bold',
    }
}
export default Radium(Toast)