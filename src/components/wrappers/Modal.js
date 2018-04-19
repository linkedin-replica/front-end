import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import BlueButton from '../buttons/BlueButton.js';



class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    return (
      <div className="backdrop" style={styles.backdropStyle}>
        <div className="modal" style={styles.modalStyle}>
          {this.props.children}

          <div style={styles.submitButton}>
            <BlueButton name={this.props.btnText} onClick={this.props.onClose} />
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  btnText: PropTypes.string.isRequired,
  children: PropTypes.node
};

const styles = {
  // The gray background
  backdropStyle: {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,0.3)',
    padding: 50
  },

  // The modal "window"
  modalStyle: {
    display: 'flex',
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    alignItems: 'center',
    flexDirection: 'column'
  },

}
Modal = Radium(Modal);
export default Modal;
