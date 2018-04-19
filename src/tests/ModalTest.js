import React, { Component } from 'react';
import Modal from '../components/wrappers/Modal';

class ModalTest extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.toggleModal}>
          Open the modal
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}
          ljvfjshdfjksdjfjsdjfsdcndznc
          xvbdfjkvnjdfgvjfndlgkjn

          cvsdhfjklvjsdlkfk
          mvxjdnvkdf
          btnText="Submit Form">
        </Modal>
      </div>
    );
  }
}
export default ModalTest;
